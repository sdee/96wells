import React, { Component } from 'react';
import Well from './Well';
import MoveableWell from './MoveableWell';
import PropTypes from 'prop-types';

class PlateLayout extends Component {

	componentWillMount() {
		// console.log(this.props.samples);
		// console.log(this.props.dataList);
		// console.log(this.props.colorMap);
		// console.log(this.well);
	}

	componentWillUpdate() {

	}

	makeRow(rowData, j, customizable) {
		const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P'];
		return (
			<g>
				<text
					x={9}
					y={105 + j * 73}
					fontFamily="helvetica"
					textAnchor="middle"
					fontSize="26px"
					fontWeight="lighter"
				>
					{letters[j]}
				</text>
				{rowData.map((well, i) => {
					const wellProps = {
						id: `well_${i}_${j}`,
						i,
						j,
						wellData: well,
						color: this.props.colorMap.get(well.sample),
						labels: this.props.wellLabels.get(well.idx)
						// swapWells: this.props.swapWells
					};
					let renderWell = '';
					if (customizable) {
						renderWell = <MoveableWell {...wellProps} swapWells={this.props.swapWells} />;
					} else {
						renderWell = <Well {...wellProps} />;
					}
					return renderWell;
				}
				)}
			</g>
		);
	}

	render() {
		return (
			<div style={{ marginLeft: '20px', marginTop: '0px', marginBottom: '0px', padding: '0px', display: 'flow' }}>
				<svg width="1000" height="800">
					<g className="plate">
						{this.props.grid.map((e, index) => this.makeRow(e, index, this.props.customizable))}
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
