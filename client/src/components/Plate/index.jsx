import React, { Component } from 'react';
import PlateLayout from '../PlateLayout/PlateLayout'



class Plate extends Component {
	constructor() {
		super();

		this.state = {
			rawData: [],
			dataFilter: () => true
		};
	}

	componentWillMount() {

	}

	render() {
		return (
			<PlateLayout/>
		);
	}
}

export default Plate;
