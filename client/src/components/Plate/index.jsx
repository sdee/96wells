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

		d3.csv(this.props.url)
		.row((d) => {
			return {
				patient: d['patient'],
				sample: d['sample']
			};
		})
		.get((error, rows) => {
			if (error) {
				console.error(error);
				console.error(error.stack);
			} else{
				this.setState({rawData: rows});
			}
		});
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
