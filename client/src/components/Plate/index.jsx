import React, { Component } from 'react';
import * as d3 from 'd3';
import PlateLayout from '../PlateLayout/PlateLayout'

class Plate extends Component {
	constructor() {
		super();

		this.state = {
			rawData: [],
			dataFilter: () => true
		};
	}

	loadRawData() {

	}

	componentWillMount() {
		this.loadRawData();
	}

	render() {
		return (
			<PlateLayout/>
		);
	}
}

export default Plate;
