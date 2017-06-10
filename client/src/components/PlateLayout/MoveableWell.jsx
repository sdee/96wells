import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import Well from './Well';

const wellSource = {
	beginDrag(props) {
		return {
			id: props.id,
			row: props.i,
			col: props.j,
			coord: [props.i, props.j]
		};
	}
};

const wellTarget = {
	drop(props, monitor, component) {
		const dragCoord = monitor.getItem().coord;
		const hoverCoord = [props.i, props.j];
	// Don't replace items with themselves
		if (dragCoord === hoverCoord) {
			return;
		}
		props.swapWells(dragCoord, hoverCoord);
		monitor.getItem().coord = hoverCoord;
	}
};

function dragCollect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
		connectDragPreview: connect.dragPreview()
	};
}

function dropCollect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class DnDWell extends Component {

	constructor(props) {
		super();
	}

	render() {
		const { i,
						j,
						color,
						connectDragSource,
						connectDragPreview,
						connectDropTarget,
						isDragging,
						labels }
						= this.props;
		const opacity = 0.4;
		return connectDragPreview(
			<g>
				{connectDragSource(connectDropTarget(
					<g>
						<Well
							i={i}
							j={j}
							color={color}
							fade={isDragging}
							labels={labels}
							draggable={Boolean(true)}
							opacity={opacity / 2}
						/>
					</g>
				))
				}
			</g>
	);
	}
}

DnDWell.propTypes = {
	i: PropTypes.number.isRequired,
	j: PropTypes.number.isRequired,
	labels: PropTypes.array.isRequired,
	color: PropTypes.string,
	connectDragSource: PropTypes.func.isRequired,
	connectDragPreview: PropTypes.func.isRequired,
	connectDropTarget: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired,
	swapWells: PropTypes.func.isRequired
};

DnDWell.defaultProps = {
	color: '#21f0b6'
};

const DragSourceDecorator = DragSource('Well', wellSource, dragCollect);
const DropTargetDecorator = DropTarget('Well', wellTarget, dropCollect);
const MoveableWell = DropTargetDecorator(DragSourceDecorator(DnDWell));
module.exports = MoveableWell;
