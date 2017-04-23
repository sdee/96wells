import React, { Component } from 'react';
import Well from './Well'
const testData = require('../../../../data/test2.json'); //move up higher
const testList = require('../../../../data/test_list.json'); //move up higher

class PlateLayout extends Component {

	constructor() {
		super();

		this.state = {
			//need sample list or data here
		};

		this.colors = ["#21f0b6", "#0a4f4e", "#9acfd8", "#25919d", "#a7d64e", "#5c922f", "#f1bb99", "#a55153", "#e71761", "#d64405"];

		this.data = testData;
		this.datalist = testList;

		let samples = new Set();
		let attributes = new Set();
		let keys = new Set(["sample"]);

		//make list of attributes
		this.data.forEach(function(row) {
			row.forEach(function (data) {
				samples.add(data.sample);
				Object.keys(data).map(a => {
					if (!keys.has(a)) {
						attributes.add(a)
					}
				})
			});
		});

		let sampleList = [...samples]; //slight hack, ordered by insertion order but not gauranteed by ECMA standards

		//create color map
		let sampleToColorMap = new Map();
		const numColors = this.colors.length;
		const colors = this.colors;
		sampleList.forEach(function(sample, i) {
			let colorIndex = i % numColors;
			sampleToColorMap.set(sample, colors[colorIndex]);
		});
		this.sampleToColorMap = sampleToColorMap;
	}

createColorMap() {

	}

placeSamplesInListOrder(datalist) {
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
}

placeSamplesInRandomOrder(datalist) {
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
}

	implementLayout(datalist, layout) {
		if (layout === 'listorder') {
			this.placeSamplesInListOrder(datalist);
		}
		else if (layout === 'random') {
			this.placeSamplesInRandomOrder(datalist);
		}
	}

	makeRow(rowData, j) {
		console.log("MOUNTED");

		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.sampleToColorMap.get(well.sample)}/>)
		);
	}

	componentDidMount() {
		this.implementLayout(this.dataList, this.layout);
	 }

	render() {
		return (
			<div>
				Plate2<br/>
			<svg width="800" height="600">
				<g className="plate">
					{this.data.map((e, index) => this.makeRow(e, index))}
				</g>
			</svg>
		</div>
	);
}

}

export default PlateLayout;
