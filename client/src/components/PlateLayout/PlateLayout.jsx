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


	makeRow(rowData, j) {
		console.log("MOUNTED");
		console.log(this.props.plateLayout);
		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.sampleToColorMap.get(well.sample)}/>)
		);
	}

	componentDidMount() {

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
