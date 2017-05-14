import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LayoutForm from '../../containers/LayoutForm';
import DatasheetField from '../../containers/DatasheetField'

class StepInterface extends Component {

	constructor(props) {
		super();
	}

	showContent(currentStep) {
		let content;

		switch(currentStep) {
			case 0:
			content = <DatasheetField />;
			break;

			case 1:
			content = <LayoutForm />;
			break;

		};
		return content;
	}

	render(){
		return (
			<div>
				{this.showContent(this.props.currentStep)}
			</div>
		);
	}
}

//
export default StepInterface;