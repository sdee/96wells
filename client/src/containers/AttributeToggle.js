import { connect } from 'react-redux';

import AttributeCheckbox from '../components/Form/AttributeCheckbox';
import { showLayer } from '../actions';

function handleAttrVisChange(e, dispatch) {
	console.log("handle attr vis change");
	console.log(e.target.checked);
	console.log(e.target.value);
	dispatch(showLayer(e.target.value, e.target.checked));
}

const mapStateToProps = (state, ownProps) => {
	return {
	attribute: ownProps.attribute,
	checked: state.plate.visibleAttribute.includes(ownProps.attribute)
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleAttrVisChange: (values) => {
		handleAttrVisChange(values, dispatch);
	}
});


const AttributeToggle = connect(
	mapStateToProps,
	mapDispatchToProps
)(AttributeCheckbox);

export default AttributeToggle ;
