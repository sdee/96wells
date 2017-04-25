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
		</g>
		);
	}
}

export default Well;
