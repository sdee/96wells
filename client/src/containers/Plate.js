import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout'

const mapStateToProps = (state, ownProps) => ({
	layout: state.plate.layout,
	dataList: state.app.dataList
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate ;
