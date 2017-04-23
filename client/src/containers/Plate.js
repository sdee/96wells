import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout';
import { getSamples, getAttributes, getColorMap } from '../selectors/samples';


const mapStateToProps = (state, ownProps) => ({
	layout: state.plate.layout,
	dataList: state.app.dataList,
	samples: getSamples(state),
	colorMap: getColorMap(state),
	attributes: getAttributes(state)

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate ;
