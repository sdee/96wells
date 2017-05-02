import { connect } from 'react-redux';
import DatasheetChooser from '../components/DatasheetChooser';
import { setGoogleSheet } from '../actions';

function handleSubmit(values, dispatch) {
	if (values.length<1) { //for testing only
		values = '1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4';
	}
	dispatch(setGoogleSheet(values));
}

const mapStateToProps = (state, ownProps) => ({
	googlesheet: state.app.googlesheet
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSubmit: (values) => {
		handleSubmit(values, dispatch);
	}
});

console.log(DatasheetChooser);

const DatasheetField = connect(
	mapStateToProps,
	mapDispatchToProps
)(DatasheetChooser);

export default DatasheetField;
