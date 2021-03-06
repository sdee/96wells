import { connect } from 'react-redux';
import AppStepper from '../components/Stepper/AppStepper';
import { selectStep, postNotification } from '../actions';

function handleChange(value, dispatch) {
	dispatch(selectStep(value));
	if (value === 0) {
		dispatch(postNotification('Import data from a Google sheet or choose a test set.'));
	}	else if (value === 1) {
		dispatch(postNotification('Select an automated layout.'));
	} else if (value === 2) {
		dispatch(postNotification('Customize layout'));
	} else if (value === 3) {
		dispatch(postNotification('Export data.'));
	}	else {
		dispatch(postNotification('Coming soon!'));
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentStep: parseInt(ownProps.step)
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
