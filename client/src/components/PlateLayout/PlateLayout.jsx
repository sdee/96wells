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
		console.log("GRID");
		console.log(this.props.grid);

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
			<div style={{marginLeft:'20px', marginTop:'0px', marginBottom:'0px', padding:'0px', display:'flow'}}>
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
	colorMap: PropTypes.object,
	wellLabels: PropTypes.object,
	grid: PropTypes.array
};

export default PlateLayout;
