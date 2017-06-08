import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {

		const { i,
			j,
			color,
			fade,
			draggable
			}
			= this.props;
		const spacing = 73;
		const opacity = fade ? 0.2 : 0.4;

		return(
			<g transform="translate(55,55)">
				{ j === 0 ? (
					<text
						x={i * spacing}
						fontFamily="helvetica"
						textAnchor="middle"
						fontSize="26px"
						fontWeight="lighter"
					>
						{i + 1}
					</text>
				)
				: ('')
			}
				<circle
					r="35"
					cx={5 + i * spacing}
					cy={45 + j * spacing}
					fill={color}
					cursor={draggable ? 'cell' : 'default'}
					fillOpacity={opacity}
				/>
				<text
					x={i * spacing}
					y={45 + j * spacing}
					fontFamily="helvetica"
					textAnchor="middle"
					fontSize="12px"
					fontWeight="bold"
				>
				{this.props.labels.map((l, x) => <tspan x={5 + i * spacing} dy={`${(0.2 + (x * 0.9)).toString()}em`} key={`text${  i  }_${  j}${l}`}>{l}</tspan>)}
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
