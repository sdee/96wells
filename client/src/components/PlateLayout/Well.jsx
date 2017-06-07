import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const wellSource = {
	beginDrag(props) {
		return {
			id: props.id,
			row: props.i,
			col: props.j
		}
	}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
		connectDragPreview: connect.dragPreview()
  };
}

class Well extends Component {

	constructor(props) {
		super();
	};

	render() {
		const i = this.props.i;
		const j = this.props.j;
		const color = this.props.color;
		const connectDragSource = this.props.connectDragSource;
		const connectDragPreview = this.props.connectDragPreview;
		const isDragging = this.props.isDragging;
		const spacing = 73;
		const opacity = 0.4;
		if (isDragging) {
			console.log("dragging "+this.props.id)
		}

		return connectDragPreview(
			<g>
				{connectDragSource(
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
							cursor="cell"
							fillOpacity={isDragging ? opacity / 2 : opacity}
						/>
					<text
						x={i * spacing}
						y={45 + j * spacing}
						fontFamily="helvetica"
						textAnchor="middle"
						fontSize="12px"
						fontWeight="bold"
					>
						{this.props.labels.map((l, x) => <tspan x={5 + i * spacing} dy={`${(0.2 + (x * 0.9)).toString()}em`} key={'text' + i + '_' + j + l}>{l}</tspan>)}
					</text>
					</g>
		)
	}
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

export default DragSource("Well", wellSource, collect)(Well);
