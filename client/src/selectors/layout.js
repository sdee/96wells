import { createSelector } from 'reselect';
import { getSamples } from '../selectors/samples';
import { range } from 'underscore';

const sizes = {
	'96wells': [8, 12],
	'284wells': [24, 16],
	'test': [3,3]
};

const dataList = (state) => state.app.dataList;
const plateSize = (state) => state.plate.plateSize;
const layout = (state) => state.plate.layout;

export const getNumRows = createSelector(
	[plateSize],
	(plateSize) => sizes[plateSize][0]
);

export const getNumCols = createSelector(
	[plateSize],
	(plateSize) => sizes[plateSize][1]
);

export const calculateLayout = createSelector(
	[dataList, layout, getNumRows, getNumCols, getSamples,
	(state) => {return state.plate.layout==='random' ? Math.random() : 1}], //final function forces reload when layout is random
	(dataList, layout, rows, cols, samples) => {
		switch (layout) {
			case 'listorder':
				return placeSamplesInListOrder(dataList, rows, cols);
			case 'random':
				return placeSamplesInRandomOrder(dataList, rows, cols);
			case 'roundrobin':
				return roundRobinLayout (dataList, samples, rows, cols);
			default:
				return placeSamplesInListOrder(dataList, rows, cols);
		}
	}
);

function roundRobinLayout (datalist, samples, numRows, numCols) {
	console.log("ROUND ROBIN");

	let plateGrid = [];
	let sampleList = Array.from(samples);
	let numSamples = samples.size;
	let dataBySample = new Map();
	console.log(sampleList);

	for (let sample of Array.from(samples)){
		let data = datalist.filter((x) => x["sample"]===sample);
		dataBySample.set(sample, data);
	}
	let row = 0, col = 0, cnt=0, sampleIdx=0;
	datalist.forEach(function(sample, i) {
		let nextWell = undefined
		while (!nextWell) {
			let currSample = sampleList[sampleIdx % numSamples];
			nextWell = dataBySample.get(currSample).pop();
			sampleIdx++;
		}
		if (nextWell) {
			//needs refactoring/repetive code
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
	let count = 0;
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
