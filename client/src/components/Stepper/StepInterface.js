import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import LayoutForm from '../../containers/LayoutForm';
import DatasheetChooser from '../../containers/DatasheetField'

class StepInterface extends Component {

	constructor(props) {
		super();
	}

	showContent(currentStep) {
		let content;


		switch(currentStep) {
			case 0:
			content = <DatasheetChooser />;
			break;

			case 1:
			content = <LayoutForm />;
			break;

		};
		return content;
	}


	render(){

		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
			},
		};
		const currentStep = this.props.currentStep;
		console.log(currentStep);



		return (
			<div>
				{this.showContent(this.props.currentStep)}
			</div>
		);
	}
}


//
export default StepInterface;
