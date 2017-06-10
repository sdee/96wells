import { connect } from 'react-redux';
import { showLayer, showSample } from '../actions';
import SettingsPane from '../components/Settings/SettingsPane';
import { getAttributes, getColorMap, getNumOfExperiments, getSampleList } from '../selectors/samples';

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
	numExperiments: getNumOfExperiments(state),
	numSamples: getSampleList(state).length
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
