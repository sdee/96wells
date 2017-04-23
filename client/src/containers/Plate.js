import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout';
import { getSamples, getColorMap } from '../selectors/samples';


const mapStateToProps = (state, ownProps) => ({
	layout: state.plate.layout,
	dataList: state.app.dataList,
	samples: getSamples(state),
	colorMap: getColorMap(state)


});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate ;
