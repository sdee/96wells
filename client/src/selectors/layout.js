import { createSelector } from 'reselect';
import { getSamples } from '../selectors/samples';
import { pluck, range, filter, reject, isEmpty } from 'underscore';

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

export const plateGrid = createSelector(
	[getNumRows, getNumCols],
	(rows, cols) => Array(rows).fill(Array(cols).fill({}))
);

export const emptyLayout = createSelector(
	[plateGrid],
	(plateGrid) => {
		let cnt=0;
		let grid = Object.assign([], plateGrid);
		unoccupiedWells(plateGrid).forEach(([row, col]) => grid[row][col] = { sample: 'empty', idx: cnt++ });
		return grid;
});

export const listOrder = createSelector(
	[plateGrid, dataList],
	(plateGrid, dlist) => {
		let grid2 = Object.assign([], plateGrid);
		dlist.forEach( function(datarow) {
			let row, col;
			let well = nextUnoccupiedWell(plateGrid);
			// [row, col] = well.next();
			console.log("next");
			let val = well.next().value;
			[row, col] = val;
			console.log(row, col);
			grid2[row][col] = datarow;
		});
		return grid2;
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
		case 'empty':
			return 'empty layout'
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
		getSamples,
		listOrder,
		state =>  state.plate.layout === 'random' ? Math.random() : 1 ], //final function forces reload when layout is random
		(dataList, layout, rows, cols, samples, listorder) => {
			switch (layout) {
			case 'listorder':
				console.log(listorder);
				return listorder;
			case 'random':
				return placeSamplesInRandomOrder(dataList, rows, cols);
			case 'roundrobin':
				return roundRobinLayout(dataList, samples, rows, cols);
			default:
				return placeSamplesInListOrder(dataList, rows, cols);
			}
		}
);

/*
* Assign experiment to well, rotating between samples
*/
function roundRobinLayout(datalist, samples, numRows, numCols) {
	const plateGrid = [];
	const sampleList = Array.from(samples);
	const numSamples = samples.size;
	const dataBySample = new Map();
	for (let sample of Array.from(samples)){
		let data = datalist.filter((x) => x["sample"] === sample);
		dataBySample.set(sample, data);
	}
	let row = 0, col = 0, sampleIdx=0;
	datalist.forEach(function(sample, i) {
		let nextWell;
		while (!nextWell) {
			let currSample = sampleList[sampleIdx % numSamples];
			nextWell = dataBySample.get(currSample).pop();
			sampleIdx++;
		}
		if (nextWell) {
			// needs refactoring/repetive code
			if (col === numCols) {
				row++;
				col = 0;
			}
			if (plateGrid[row] === undefined) {
				plateGrid[row] = [];
			}
			plateGrid[row][col] = nextWell;
			col++;
		}
	});
	return plateGrid;
}

/*
* Places experiments at a well randomly chosen from unoccupied wells
*/
function placeSamplesInRandomOrder(datalist, numRows, numCols){
	let plateGrid = [];
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function checkMembership(arr, coord) {
		let member = false;
		arr.forEach(function (arrCoord) {
			if (coord[0] === arrCoord[0] && coord[1] === arrCoord[1]) {
				member = true;
			}
		});
		return member;
	}

	function getRandomCoord() {
		let col = getRandomInt(0, numCols - 1), row = getRandomInt(0, numRows - 1);
		let randCoord = [row, col];
		return randCoord;
	}

	let occupied = [];
	datalist.forEach(function (datarow) {
		let coord = getRandomCoord();
		do {
			coord = getRandomCoord();
		} while (checkMembership(occupied, coord) === true);

		let row = coord[0], col = coord[1];
		if (plateGrid[row] === undefined) {
			plateGrid[row] = [];
		}
		occupied.push(coord);
		plateGrid[row][col] = datarow;
	});
	return plateGrid;
}

/*
*Place experiments to plate in order they appear in the data list-left to right, top to bottom.
*/
function placeSamplesInListOrder(datalist, numRows, numCols) {
	let plateGrid = [];
	let row = 0, col = 0;
	datalist.forEach(function (datarow) {
		if (col === numCols) {
			row++;
			col = 0;
		}
		if (plateGrid[row] === undefined) {
			plateGrid[row] = [];
		}
		plateGrid[row][col] = datarow;
		col++;
	});
	return plateGrid;
}
function isOccupied(row, col, plate) {
	if (typeof plate[row] !== 'undefined' && plate[row][col] !== undefined) {

		return !isEmpty(plate[row][col])
	}
	return false;
}
function occupiedWells(plategrid) {
	return filter(allWells(), ([row, col]) => isOccupied(row, col, plategrid));
}

function unoccupiedWells(plategrid) {
	return reject(allWells(), ([row, col]) => isOccupied(row, col, plategrid));
}

function *nextUnoccupiedWell(plategrid) {
	console.log("unoccupied");
	console.log(unoccupiedWells(plategrid));
    let i = 0;
    while(i < unoccupiedWells(plategrid).length)
			yield unoccupiedWells(plategrid)[i];
}


function allWells(){
	let wells = [];
	range(0, 8).map(row =>
		range(0, 12).map(col => wells.push([row, col])
	)
);
	return wells;
}
