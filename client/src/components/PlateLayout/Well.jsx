import React, { Component } from 'react';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<g transform="translate(55,55)">
				<circle
					r="35"
					cx={this.props.i * 75}
					cy={this.props.j * 75}
					fill={this.props.color}
					fillOpacity="0.6"
				/>
				<text
					x={this.props.i * 75}
					y={this.props.j * 75}
					fontFamily="helvetica"
					textAnchor="middle"
					fontSize="10px"
					fontWeight="bold"
				>
					{this.props.labels.map((l, x) => <tspan x={this.props.i * 75} dy={(0.2 + (x * 0.9)).toString() + "em"}>{l}</tspan>)}
				</text>
			</g>
		);
	}
}

export default Well;
