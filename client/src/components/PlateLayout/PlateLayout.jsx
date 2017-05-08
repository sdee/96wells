import React, { Component, PropTypes } from 'react';
import Well from './Well';

class PlateLayout extends Component {

	componentWillMount() {
		// console.log(this.props.samples);
		// console.log(this.props.dataList);
		// console.log(this.props.colorMap);
		// console.log(this.well);
		// console.log(this.props.grid);
	}

	componentWillUpdate() {

	}

	makeRow(rowData, j) {
		return (
			rowData.map((well, i) =>
				<Well
					i={i}
					j={j}
					wellData={well}
					color={this.props.colorMap.get(well.sample)}
					labels={this.props.wellLabels.get(well.idx)}
					sample={well.sample}
				/>)
		);
	}

	render() {
		return (
			<div>
				<svg width="1000" height="620">
					<g className="plate">
						{this.props.grid.map((e, index) => this.makeRow(e, index))}
					</g>
				</svg>
			</div>
		);
	}
}

PlateLayout.propTypes = {
	colorMap: PropTypes.colorMap,
	wellLabels: PropTypes.object
};

export default PlateLayout;
