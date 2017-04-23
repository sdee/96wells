import React, { Component } from 'react';
import Well from './Well';

class PlateLayout extends Component {

	constructor() {
		super();

		let keys = new Set(["sample"]);
		this.plateGrid = [];
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
		let plateGrid = [];
		if (layout === "listorder") {
			plateGrid = this.placeSamplesInListOrder(datalist);
		}
		else if (layout === "random") {
			plateGrid = this.placeSamplesInRandomOrder(datalist);
		}
		return plateGrid;
	}

	makeRow(rowData, j) {
		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.props.colorMap.get(well.sample)}/>)
		);
	}

	componentWillMount() {
		console.log(this.props.samples);
		console.log(this.props.colorMap);
		console.log(this.props.attributes);
		this.plateGrid = this.implementLayout(this.props.dataList, this.props.layout);
	}

	componentWillUpdate() {
		this.plateGrid = this.implementLayout(this.props.dataList, this.props.layout);
	}

	render() {
		return (
			<div>
				Plate2<br/>
			<svg width="800" height="600">
				<g className="plate">
					{this.plateGrid.map((e, index) => this.makeRow(e, index))}
				</g>
			</svg>
		</div>
	);
}

}

export default PlateLayout;
