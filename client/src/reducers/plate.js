const testList = require('../../../data/test_list.json'); //move up higher

const layouts = ['listorder', 'random'];

import { CHANGE_LAYOUT, SHOW_LAYER } from '../actions';

const sizes = {
	'96': [8, 12],
	'284': [24, 16]
};

const initialState = {
	size: '96', //number of wells
	datasource: 'test1', //source of sample list
	layout: 'listorder', //algorithm for placing samples in wells,
	plateLayout: []
};

function placeSamplesInRandomOrder(datalist) {
	const numCols = 3;
	const numRows = 3;
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

function placeSamplesInListOrder(datalist) {
	let plateGrid = [];
	const numCols = 3;
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
};

const plate = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LAYOUT: {
			let newLayout = placeSamplesInRandomOrder(testList);
			return Object.assign({}, state, {
				layout: action.layout,
				plateLayout: newLayout
		});
		}

		case SHOW_LAYER: {
			return Object.assign({}, state, {

			});
		}
		default: {
			return state;
		}
	}
};

export default plate;