import React, { Component } from 'react';

class Well extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<circle r="10" cx={this.props.i*25} cy="0" transform="translate(30,30)" fill="steelblue">>
			</circle>
		);
	}

}

export default Well;
