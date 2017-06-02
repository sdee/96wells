import { range, filter, reject, sample, isEmpty, contains, shuffle } from 'underscore';
import { createSelector } from 'reselect';
import { getSampleList } from '../selectors/samples';

export const dataList = state => state.app.dataList;
export const plateSize = state => state.plate.plateSize;
export const layout = state => state.plate.layout;

export const sizes = {
	'96wells': [8, 12],
	'284wells': [24, 16],
	'test': [3, 3]
};

export const getNumRows = createSelector(
	[plateSize],
	size => sizes[size][0]
);

export const getNumCols = createSelector(
	[plateSize],
	size => sizes[size][1]
);

export const getNumWells = createSelector(
	[getNumRows, getNumCols],
	(rows, cols) => rows * cols
);

function allWells() {
	const wells = [];
	range(0, 8).map(row =>
		range(0, 12).map(col => wells.push([row, col])
	)
);
	return wells;
}

const getEmptyLayout = (rows, cols) => range(rows).map(() => range(cols).map(() => {}));

const isOccupied = (row, col, plate) => !isEmpty(plate[row][col]);

const occupiedWells = plategrid => filter(allWells(), ([row, col]) => isOccupied(row, col, plategrid));

const unoccupiedWells = plategrid => reject(allWells(), ([row, col]) => isOccupied(row, col, plategrid));

function * nextUnoccupiedWell(plategrid, numWells) {
	let i = 0;
	while (i < numWells + 1) {
		const unoccupied = unoccupiedWells(plategrid);
		yield unoccupied[i];
		i += 1;
	}
}

function * nextRandomWell(plategrid) {
	const unoccupied = shuffle(unoccupiedWells(plategrid));
	yield sample(unoccupied);
}

function * nextSample(samples) {
	let i = 0;
	while (true) {
		yield samples[i % samples.length];
		i += 1;
	}
}

export const listOrder = createSelector(
	[dataList, getNumRows, getNumCols, getNumWells, layout],
	(dlist, rows, cols, numWells) => {
		let listOrderGrid = getEmptyLayout(rows, cols);
		dlist.forEach((datarow) => {
			const [row, col] = nextUnoccupiedWell(listOrderGrid, numWells).next().value;
			listOrderGrid[row][col] = datarow;
		});
		return listOrderGrid;
	});

export const randomLayout = createSelector(
	[dataList, getNumRows, getNumCols, layout],
	(data, rows, cols) => {
		const randomGrid = getEmptyLayout(rows, cols);
		data.forEach((datarow) => {
			const [row, col] = nextRandomWell(randomGrid).next().value;
			randomGrid[row][col] = datarow;
		});
		return randomGrid;
	});

export const roundRobinLayout = createSelector(
	[dataList, getSampleList, getNumRows, getNumCols, getNumWells, layout],
	(data, samples, rows, cols, numWells) => {
		const RRGrid = getEmptyLayout(rows, cols);
		let count = 0;
		let assignedIds = [];
		let rotateSample = nextSample(samples);
		while (count < data.length) {
			let currSample = rotateSample.next().value;
			let datarow = data
										.filter((x) => x['sample']===currSample)
										.filter((x) => !contains(assignedIds, x.idx));
			if (datarow) {
				const [row, col] = nextUnoccupiedWell(RRGrid, numWells).next().value;
				RRGrid[row][col] = datarow;
				assignedIds.push(datarow.idx);
				count+=1;
			}
		}
		return RRGrid;
	});

export const getDescription = createSelector(
	[layout],
	layout => {
		switch (layout) {
		case 'listorder':
		return 'Places sample left to right, top to bottom based on the order in the imported data set.'
		case 'random':
		return 'Places each experiment at a random well position.';
		case 'roundrobin':
			return 'Places experiments one at a time, alternating between samples.';
		default:
		return 'Choose a layout.'
		}
	}
);

//how to use variables inside function that don't trigger selector
export const calculateLayout = createSelector(
	[dataList,
		layout,
		getNumRows,
		getNumCols,
		listOrder,
		randomLayout,
		roundRobinLayout,
		state =>  state.plate.layout === 'random' ? Math.random() : 1 ], //final function forces reload when layout is random
		(dataList, layout, rows, cols, listorder, rando, roundrobin) => {
		switch (layout) {
		case 'listorder':
			return listorder;
		case 'random':
			return rando;
		case 'roundrobin':
			return roundrobin;
		default:
			return 'listorder'
	}
	}
);
