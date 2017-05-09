import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import LayoutForm from '../../containers/LayoutForm'

class StepInterface extends Component {

	constructor(props) {
		super();
	}

	render(){

		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
			},
		};
		const currentStep = this.props.currentStep;

		let content;
		switch(currentStep) {
			case 1:
			content = <LayoutForm />;

		};


		return (
			<div>
				{content}
			</div>
		);
	}
}


//
export default StepInterface;
