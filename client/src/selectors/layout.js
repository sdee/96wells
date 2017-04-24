import { createSelector } from 'reselect';

const sizes = {
	'96wells': [8, 12],
	'284wells': [24, 16],
	'test': [3,3]
};

const dataList = (state) => state.app.dataList;
const plateSize = (state) => state.plate.plateSize;
const layout =  (state) => state.plate.layout;

export const getNumRows = createSelector(
	[plateSize],
	(plateSize) => sizes[plateSize][0]
);

export const getNumCols = createSelector(
	[plateSize],
	(plateSize) =>  sizes[plateSize][1]
);

export const calculateLayout = createSelector(
	[dataList, layout, getNumRows, getNumCols, (state) => {return state.plate.layout==='random' ? Math.random() : 1}], //final function forces reload when layout is random
	(dataList, layout, rows, cols) => {
		switch (layout) {
			case 'listorder':
				return placeSamplesInListOrder(dataList, rows, cols);
			case 'random':
				return placeSamplesInRandomOrder(dataList, rows, cols);
			default:
				return placeSamplesInListOrder(dataList, rows, cols);
		}
	}
);

function placeSamplesInRandomOrder(datalist, numRows, numCols) {

	let plateGrid = [];

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function checkMembership(arr, coord) {
		let member = false;
		arr.forEach(function(arrCoord) {
			if (coord[0]===arrCoord[0] && coord[1]===arrCoord[1]) {
				member = true;
			}
		});
		return member;
	}

	function getRandomCoord() {
		let col = getRandomInt(0, numCols-1), row = getRandomInt(0, numRows-1);
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
};

function placeSamplesInListOrder(datalist, numRows, numCols) {
	let plateGrid = [];
	let row = 0, col = 0;
	console.log("-----");
	let count =0;
	datalist.forEach(function (datarow) {

		if (col === numCols) {
			row++;
			col = 0;
		}
		if (plateGrid[row] === undefined) {
			plateGrid[row] = [];
		}
		plateGrid[row][col] = datarow;
		count++;
		col++;
	});

	return plateGrid;
};
