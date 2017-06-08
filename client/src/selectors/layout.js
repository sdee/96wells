import { range, filter, reject, sample, isEmpty, contains, shuffle, some } from 'underscore';
import { createSelector } from 'reselect';
import { getSampleList } from '../selectors/samples';

export const dataList = state => state.app.dataList;
export const plateSize = state => state.plate.plateSize;
export const layout = state => state.plate.layout;
export const userChanges = state => state.plate.userChanges;
export const userChangesLen = state => state.plate.userChanges.length;


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

//currently matches by sample attribute, can later be generalized
const hasLikeNeighbors = (row, col, plategrid, sample) => some(getWells(neighbors(row, col), plategrid), n => (!!n && !!n.sample ? n.sample : undefined) === sample)

const getWells = (wells, plategrid) => wells.map(([row, col]) => plategrid[row][col]);

const neighbors = (row, col) => reject([[row-1, col-1], [row-1, col], [row-1, col+1], [row, col-1], [row, col+1], [row+1, col-1], [row+1, col], [row+1, col+1]], ([row, col]) => row <0 || col < 0 || row > 7 || col > 11 );

const occupiedWells = plategrid => filter(allWells(), ([row, col]) => isOccupied(row, col, plategrid));

const unoccupiedWells = plategrid => reject(allWells(), ([row, col]) => isOccupied(row, col, plategrid));

const availableWells = (plategrid, attribute) => reject(unoccupiedWells(plategrid), ([row, col]) => hasLikeNeighbors(row, col, plategrid, attribute));

function* nextUnoccupiedWell(plategrid, numWells) {
	let i = 0;
	while (i < numWells + 1) {
		const unoccupied = unoccupiedWells(plategrid);
		yield unoccupied[i];
		i += 1;
	}
}

function* nextAvailableWell(plategrid, attribute) {
	const available = availableWells(plategrid, attribute);
	while (available.length > 0) {
		yield available.shift();
	}
}

function* nextRandomWell(plategrid) {
	const unoccupied = shuffle(unoccupiedWells(plategrid));
	yield sample(unoccupied);
}

function* nextSample(samples) {
	let i = 0;
	while (true) {
		yield samples[i % samples.length];
		i += 1;
	}
}

export const listOrder = createSelector(
	[dataList, getNumRows, getNumCols, getNumWells, layout],
	(dlist, rows, cols, numWells) => {
		const listOrderGrid = getEmptyLayout(rows, cols);
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
		const assignedIds = [];
		samples.sort();
		const rotateSample = nextSample(samples);
		while (count < data.length) {
			const currSample = rotateSample.next().value;
			const datarow = data
										.filter(x => x['sample'] === currSample)
										.filter(x => !contains(assignedIds, x.idx));
			if (datarow) {
				const [row, col] = nextUnoccupiedWell(RRGrid, numWells).next().value;
				const datum = datarow.pop();
				RRGrid[row][col] = datum;
				assignedIds.push(datum.idx);
				count += 1;
			}
		}
		return RRGrid;
	});

	export const spreadSampleLayout = createSelector(
		[dataList, getNumRows, getNumCols, getNumWells, layout],
		(data, rows, cols, numWells) => {
			const SSGrid = getEmptyLayout(rows, cols);
			data.forEach((datarow) => {
				const [row, col] = nextAvailableWell(SSGrid, datarow.sample).next().value;
				SSGrid[row][col] = datarow;
			});
			return SSGrid;
		});

export const getDescription = createSelector(
	[layout],
	(layout) => {
		switch (layout) {
		case 'listorder':
		return 'Places sample left to right, top to bottom based on the order in the imported data set.'
		case 'random':
		return 'Places each experiment at a random well position.';
		case 'roundrobin':
			return 'Places experiments one at a time, alternating between samples.';
		case 'spreadsample':
			return 'Spread samples out so that neighboring experiments do not share same sample.'
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
		spreadSampleLayout,
		state => state.plate.layout === 'random' ? Math.random() : 1 ], // final function forces reload when layout is random
		(dataList, layout, rows, cols, listorder, rando, roundrobin, spreadsample) => {
		switch (layout) {
		case 'listorder':
			return listorder;
		case 'random':
			return rando;
		case 'roundrobin':
			return roundrobin;
		case 'spreadsample':
			return spreadsample;
		default:
			return 'listorder';
		}
		}
);

export const finalizeLayout = createSelector(
	[calculateLayout, userChanges, userChangesLen],
	(layout, userChanges) => {
		const userGrid = JSON.parse(JSON.stringify(layout));
		userChanges.forEach(([[col1, row1], [col2, row2]]) => {
			const datarow1 = userGrid[row1][col1];
			const datarow2 = userGrid[row2][col2];
			userGrid[row1][col1] = datarow2;
			userGrid[row2][col2] = datarow1;
		});
		return userGrid;
	}

);
