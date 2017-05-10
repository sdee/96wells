import { connect } from 'react-redux';
import AppStepper from '../components/Stepper/AppStepper';
import { selectStep, postNotification } from '../actions';

function handleChange(value, dispatch) {
	dispatch(selectStep(value));
	if (value === 2 || value === 3) {
		dispatch(postNotification('Coming soon!'));
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentStep: state.app.currentStep
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleChange: (value) => {
		handleChange(value, dispatch);
	}
});

const Stepper = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppStepper);

export default Stepper;
