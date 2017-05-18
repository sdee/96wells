
import { pluck, range, filter, reject, isEmpty } from 'underscore';
import { createSelector } from 'reselect';
import { getSamples } from '../selectors/samples';
var ndarray = require("ndarray");

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

export const emptyGrid = createSelector(
	[getNumRows, getNumCols],
	(rows, cols) => range(rows).map(() => range(cols).map(() => {}))
);

export const listOrder = createSelector(
	[dataList, getNumRows, getNumCols, getNumWells, emptyGrid],
	(dlist, rows, cols, numWells, empty) => {
		let listOrderGrid = empty;
		dlist.forEach( function(datarow) {
			let row, col;
			let well = nextUnoccupiedWell(listOrderGrid, numWells);
			let val = well.next().value;
			if (val) {
				[row, col] = val;
				listOrderGrid[parseInt(row)][parseInt(col)] = datarow;
			}
		});
		return listOrderGrid;
});

export const getDescription = createSelector(
	[layout],
	layout => {
		switch (layout) {
		case 'listorder':
			return 'Places sample left to right, top to bottom based on the order in the imported data set.'
		// case 'random':
		// 	return 'Places each experiment at a random well position.';
		// case 'roundrobin':
		// 	return 'Places experiments one at a time, alternating between samples.';
		// case 'empty':
		// 	return 'empty layout'
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
		 	return listorder;
			// case 'random':
			// 	return placeSamplesInRandomOrder(dataList, rows, cols);
			// case 'roundrobin':
			// 	return roundRobinLayout(dataList, samples, rows, cols);
			// default:
			// 	return placeSamplesInListOrder(dataList, rows, cols);
			}
		// 	for (var i = 0; i < ndgrid.shape[0]; i++) {
		// 		console.log(ndgrid.pick(i).map(x => x));
		// 		grid.push(ndgrid.pick(i));
		// }
		// console.log("grid");
		// console.log(grid);
		// return grid;
}
);

function isOccupied(row, col, plate) {
		return !isEmpty(plate[row][col]);
}

function occupiedWells(plategrid) {
	return filter(allWells(), ([row, col]) => isOccupied(row, col, plategrid));
}

function unoccupiedWells(plategrid) {
	return reject(allWells(), ([row, col]) => isOccupied(row, col, plategrid));
}

function * nextUnoccupiedWell(plategrid, numWells) {
    let i = 0;
    while(i < numWells+1) {
			let unoccupied = unoccupiedWells(plategrid);
			yield unoccupied[i];
			i+=1;
		}
}

function allWells(){
	let wells = [];
	range(0, 8).map(row =>
		range(0, 12).map(col => wells.push([row, col])
	)
);
	return wells;
}
