import { connect } from 'react-redux';
import { clearUserChanges } from '../actions';
import LayoutCustomizer from '../components/Stepper/Steps/LayoutCustomizer';

function handleClearUserChanges(dispatch) {
	dispatch(clearUserChanges());
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleClear: () => {
		handleClearUserChanges(dispatch);
	}
});

const LayoutCustomization = connect(
	mapStateToProps,
	mapDispatchToProps
)(LayoutCustomizer);

export default LayoutCustomization;
