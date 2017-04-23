import { connect } from 'react-redux';
import { changeLayout } from '../actions';
import LayoutSelector from '../components/LayoutSelector'

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSubmit: (values) => {
		dispatch(changeLayout(values['layout']));
	}
});

const LayoutForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LayoutSelector);

export default LayoutForm ;
