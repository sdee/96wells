import React, { Component } from 'react';
import d3 from 'd3';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (

			<g>
			<circle r="25" cx={this.props.i*55} cy={this.props.j*55} transform="translate(55,55)" fill={this.props.color}>>
			</circle>
		</g>
		);
	}
}

export default Well;
