import React, { Component } from 'react';
import {
	Step,
	Stepper,
	StepButton,
} from 'material-ui/Stepper';
import { Link } from 'react-router';
import PropTypes from 'prop-types';


class AppStepper extends Component {

	constructor(props) {
		super();
	}

	render() {
		const currentStep = this.props.currentStep;
		const onChange = this.props.handleChange;

		return (
			<div style={{ width: '100%', maxWidth: 700, marginLeft: '20px' }}>
				<Stepper linear={false} activeStep={currentStep}>
					<Step>
						<StepButton containerElement={<Link to="/step/0" />} onClick={() => onChange(0)}>
							Import Data
						</StepButton>
					</Step>
					<Step>
						<StepButton containerElement={<Link to="/step/1" />} onClick={() => onChange(1)}>
							Select Layout
						</StepButton>
					</Step>
					<Step>
						<StepButton containerElement={<Link to="/step/2" />} onClick={() => onChange(2)}>
							Finalize Layout
						</StepButton>
					</Step>
					<Step>
						<StepButton containerElement={<Link to="/step/3" />} onClick={() => onChange(3)}>
							Export
						</StepButton>
					</Step>
				</Stepper>
			</div>
		);
	}
}

AppStepper.propTypes = {
	currentStep: PropTypes.number,
	handleChange: PropTypes.func.isRequired
};

AppStepper.defaultProps = {
	currentStep: 0
};

export default AppStepper;
