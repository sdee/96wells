import React, { Component } from 'react';
import {
	Step,
	Stepper,
	StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';

class AppStepper extends Component {

	state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {stepIndex} = this.state;
		
    return (
      <div style={{width: '100%', maxWidth: 700}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Import Data
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Select Layout
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Finalize Layout
            </StepButton>
          </Step>
					<Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Export
            </StepButton>
          </Step>
        </Stepper>
      </div>
    );
  }
}


export default AppStepper;
