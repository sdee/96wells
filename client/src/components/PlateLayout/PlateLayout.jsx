import React, { Component } from 'react';
import Well from './Well';

class PlateLayout extends Component {

	makeRow(rowData, j) {
		return (
			rowData.map((well, i) => <Well i={i} j={j} wellData={well} color={this.props.colorMap.get(well.sample)} sample={well.sample}/>)
		);
	}

	componentWillMount() {
		console.log(this.props.samples);
		console.log(this.props.colorMap);
		console.log(this.props.attributes);
		console.log(this.props.grid);
	}

	componentWillUpdate() {

	}

	render() {
		return (
			<div>
			<svg width="1000" height="800">
				<g className="plate">
					{this.props.grid.map((e, index) => this.makeRow(e, index))}
				</g>
			</svg>
		</div>
	);
}

}

export default PlateLayout;
