import React, { Component } from 'react';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<circle r="30" cx={this.props.i*65} cy={this.props.j*65} transform="translate(55,55)" fill={this.props.color}>>
			</circle>
		);
	}
}

export default Well;
