import React, { Component } from 'react';
import {
	Step,
	Stepper,
	StepButton,
} from 'material-ui/Stepper';
import PropTypes from 'prop-types';

class AppStepper extends Component {

	constructor(props) {
		super();
	}

  render() {
		const currentStep = this.props.currentStep;
		const onChange = this.props.handleChange;

    return (
      <div style={{width: '100%', maxWidth: 700}}>
        <Stepper linear={false} activeStep={currentStep}>
          <Step>
            <StepButton onClick={() => onChange(0)}>
              Import Data
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => onChange(1)}>
              Select Layout
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => onChange(2)}>
              Finalize Layout
            </StepButton>
          </Step>
					<Step>
            <StepButton onClick={() => onChange(3)}>
              Export
            </StepButton>
          </Step>
        </Stepper>
      </div>
    );
  }
}

// AppStepper.propTypes = {
// 	currentStep: PropTypes.number
// };

export default AppStepper;
