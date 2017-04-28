import React, { Component } from 'react';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<g transform="translate(55,55)">
			<circle r="25" cx={this.props.i*55} cy={this.props.j*55} fill={this.props.color}>
			</circle>
			<text x={this.props.i*55-12.5} y={this.props.j*55} font-family="sans-serif" text-anchor="middle" font-size="13px">test</text>
		</g>
		);
	}
}

export default Well;
