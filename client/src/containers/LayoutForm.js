import { connect } from 'react-redux';
import { changeLayout, showLayer, showSample } from '../actions';
import LayoutSelector from '../components/LayoutSelector'
import { getAttributes } from '../selectors/samples';

function handleForm(values, dispatch){
	if ("layout" in values) {
		dispatch(changeLayout(values['layout']));
	}

	if ("attributes" in values) {
		dispatch(showLayer(values['attributes']));
	}

	if ("showSample" in values) {
		dispatch(showSample(values['showSample']));
	}
}

const mapStateToProps = (state, ownProps) => ({
	attributes: getAttributes(state),
	showSample: state.plate.showSample
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSubmit: (values) => {
		handleForm(values, dispatch);
	}
});

const LayoutForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LayoutSelector);

export default LayoutForm ;
