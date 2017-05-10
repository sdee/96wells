import { connect } from 'react-redux';
import { changeLayout, showLayer, showSample, postNotification } from '../actions';
import LayoutSelector from '../components/Stepper/LayoutSelector';
import { getAttributes } from '../selectors/samples';

function handleLayoutChange(value, dispatch) {
	dispatch(changeLayout(value));
	dispatch(postNotification('Layout chosen'));
}

function handleSampleVisChange(e, dispatch) {
	dispatch(showSample(e.target.checked));
}

function handleAttrVisChange(e, dispatch) {
	dispatch(showLayer(e.target.value, e.target.checked));
}

const mapStateToProps = (state, ownProps) => ({
	attributes: getAttributes(state),
	showSample: state.plate.showSample,
	layout: state.plate.layout,
	visibleAttribute: state.plate.visibleAttribute
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleLayoutChange: (values) => {
		handleLayoutChange(values, dispatch);
	},
	handleSampleVisChange: (values) => {
		handleSampleVisChange(values, dispatch);
	},
	handleAttrVisChange: (values) => {
		handleAttrVisChange(values, dispatch);
	}
});

const LayoutForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LayoutSelector);

export default LayoutForm;
