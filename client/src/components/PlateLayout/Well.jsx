import React, { Component } from 'react';

class Well extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<circle r="10" cx={this.props.i*25} cy={this.props.j*30} transform="translate(30,30)" fill={this.props.color}>>
			</circle>
		);
	}

}

export default Well;
