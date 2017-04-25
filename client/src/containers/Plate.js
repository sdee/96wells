import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout';
import { getSamples, getAttributes, getColorMap } from '../selectors/samples';
import { calculateLayout } from '../selectors/layout';

const mapStateToProps = (state, ownProps) => ({
	layout: state.plate.layout,
	plateSize: state.plate.plateSize,
	dataList: state.app.dataList,
	samples: getSamples(state),
	colorMap: getColorMap(state),
	attributes: getAttributes(state),
	grid: calculateLayout(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate ;
