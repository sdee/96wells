import React, { Component } from 'react';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<g transform="translate(55,55)">
			<circle r="35" cx={this.props.i*75} cy={this.props.j*75} fill={this.props.color} fillOpacity="0.6">
			</circle>
			<text x={this.props.i*75}
				y={this.props.j*75}
				fontFamily="helvetica"
				textAnchor="middle"
				fontSize="13px"
				fontWeight="bold"
				>{this.props.sample}</text>
		</g>
		);
	}
}

export default Well;
