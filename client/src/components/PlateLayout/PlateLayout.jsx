import React, { Component } from 'react';
import Well from './Well';
import PropTypes from 'prop-types';

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
				<svg width="1000" height="600">
					<g className="plate">
						<rect width="1000" height="600">
							{this.props.grid.map((e, index) => this.makeRow(e, index))}
						</rect>
					</g>
				</svg>
			</div>
		);
	}
}

PlateLayout.propTypes = {
	colorMap: PropTypes.object,
	wellLabels: PropTypes.object,
	grid: PropTypes.array
};

export default PlateLayout;
