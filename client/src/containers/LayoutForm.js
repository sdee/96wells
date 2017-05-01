import { connect } from 'react-redux';
import { changeLayout, showLayer, showSample } from '../actions';
import LayoutSelector from '../components/LayoutSelector';
import { getAttributes } from '../selectors/samples';

function handleForm(values, dispatch) {
	if ('layout' in values) {
		dispatch(changeLayout(values['layout']));
	}

	if ('attributes' in values) {
		dispatch(showLayer(values['attributes']));
	}

	if ('showSample' in values) {
		dispatch(showSample(values['showSample']));
	}
}

function handleLayoutChange(e, dispatch) {
	dispatch(changeLayout(e.target.value));
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
	onSubmit: (values) => {
		handleForm(values, dispatch);
	},
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
