import { connect } from 'react-redux';
import StepInterface from '../components/Stepper/StepInterface';
import { selectStep } from '../actions';

function handleChange(value, dispatch) {
	dispatch(selectStep, value);
}

const mapStateToProps = (state, ownProps) => ({
	currentStep: state.app.currentStep
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleChange: (value) => {
		handleChange(value, dispatch);
	}

});

const StepContent = connect(
	mapStateToProps,
	mapDispatchToProps
)(StepInterface);

export default StepContent;
