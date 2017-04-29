import { connect } from 'react-redux';
import { changeLayout, showLayer } from '../actions';
import LayoutSelector from '../components/LayoutSelector'
import { getAttributes } from '../selectors/samples';

function handleForm(values, dispatch){
	if ("layout" in values) {
		console.log('dispatch');
		dispatch(changeLayout(values['layout']));
	}

	if ("attributes" in values) {
		dispatch(showLayer(values['attributes']));
	}

}

const mapStateToProps = (state, ownProps) => ({
	attributes: getAttributes(state)
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
