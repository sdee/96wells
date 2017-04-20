import React, { Component } from 'react';
import Row from './Row'
import Well from './Well'

class PlateLayout extends Component {
	constructor() {
		super();

		this.state = {
			rawData: [],
			dataFilter: () => true,
		};

		this.colors = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf'];

		// replace with state
		this.data =
		[
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 12'],
			['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7', 'Sample 8', 'Sample 9', 'Sample 10', 'Sample 11', 'Sample 1'],
		]

		console.log(this.data);
		let samples = new Set();
		this.data.forEach(function(row) {
			row.forEach(function (data) {
				samples.add(data);
			});
		});
		let sampleList = [...samples]; //hack, ordered by insertion order but not gauranteed by ECMA standards

		let sampleToColorMap = new Map();

		const numColors = this.colors.length;
		const colors = this.colors;
		sampleList.forEach(function(sample, i) {
			let colorIndex = i % numColors;
			sampleToColorMap.set(sample, colors[colorIndex]);
		});
		console.log(this.sampleToColorMap);
		this.sampleToColorMap = sampleToColorMap;
	}

	makeRow(rowData, j) {
		console.log("row");
		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.sampleToColorMap.get(well)}/>)
		);
	}

	render() {
		return (
			<div>
				Plate2<br/>
			<svg width="800" height="600">
				<g className = "plate">
					{this.data.map((e, index) => this.makeRow(e, index))}
				</g>
			</svg>
		</div>
	);
}

}

export default PlateLayout;
