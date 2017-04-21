import React, { Component } from 'react';
import Well from './Well'
const testData = require('../../../../data/test2.json');

class PlateLayout extends Component {
	constructor() {
		super();

		this.state = {
			rawData: [],
			dataFilter: () => true,
		};

		this.colors = ["#21f0b6", "#0a4f4e", "#9acfd8", "#25919d", "#a7d64e", "#5c922f", "#f1bb99", "#a55153", "#e71761", "#d64405"];

		this.data = testData;

		let samples = new Set();
		let attributes = new Set();
		let keys = new Set(["sample"]);

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

		let sampleToColorMap = new Map();
		const numColors = this.colors.length;
		const colors = this.colors;
		sampleList.forEach(function(sample, i) {
			let colorIndex = i % numColors;
			sampleToColorMap.set(sample, colors[colorIndex]);
		});
		this.sampleToColorMap = sampleToColorMap;
	}

	makeRow(rowData, j) {
		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.sampleToColorMap.get(well.sample)}/>)
		);
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
