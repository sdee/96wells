import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		const i = this.props.i;
		const j = this.props.j;
		const color = this.props.color;
		const spacing = 73;
		const opacity = 0.4;

		return (
			<g transform="translate(55,55)">
				<circle
					r="35"
					cx={i * spacing}
					cy={j * spacing}
					fill={color}
					fillOpacity={opacity}
				/>
				<text
					x={i * spacing}
					y={j * spacing}
					fontFamily="helvetica"
					textAnchor="middle"
					fontSize="12px"
					fontWeight="bold"
				>
					{this.props.labels.map((l, x) => <tspan x={i * spacing} dy={(0.2 + (x * 0.9)).toString() + 'em'} key={'text'+i+'_'+j+l}>{l}</tspan>)}
				</text>
			</g>
		);
	}
}

Well.propTypes = {
	i: PropTypes.number,
	j: PropTypes.number,
	labels: PropTypes.array,
	color: PropTypes.string
};

export default Well;
