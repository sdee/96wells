import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout'

const mapStateToProps = (state, ownProps) => ({
	plateLayout: state.plate.plateLayout
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate ;
