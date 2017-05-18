import { connect } from 'react-redux';
import { changeLayout, showLayer, showSample, postNotification } from '../actions';
import SettingsPane from '../components/Settings/SettingsPane';
import { getAttributes, getColorMap, getNumOfExperiments } from '../selectors/samples';
import { getDescription } from '../selectors/layout'

function handleSampleVisChange(e, dispatch) {
	dispatch(showSample(e.target.checked));
}

function handleAttrVisChange(e, dispatch) {
	dispatch(showLayer(e.target.value, e.target.checked));
}

const mapStateToProps = (state, ownProps) => ({
	attributes: getAttributes(state),
	showSample: state.plate.showSample,
	visibleAttribute: state.plate.visibleAttribute,
	colorMap: getColorMap(state),
	numSamples: getNumOfExperiments(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSampleVisChange: (values) => {
		handleSampleVisChange(values, dispatch);
	},
	handleAttrVisChange: (values) => {
		handleAttrVisChange(values, dispatch);
	}
});

const VisibilityFilters = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsPane);

export default VisibilityFilters;
