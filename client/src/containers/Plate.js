import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout';
import { getSamples, getAttributes, getColorMap } from '../selectors/samples';
import { getWellLabels } from '../selectors/labels';
import { calculateLayout } from '../selectors/layout';

const mapStateToProps = (state, ownProps) => ({
	// layout: state.plate.layout,
	plateSize: state.plate.plateSize,
	dataList: state.app.dataList,
	samples: getSamples(state),
	colorMap: getColorMap(state),
	attributes: getAttributes(state),
	visibleAttributes: state.plate.visibleAttributes,
	grid: calculateLayout(state),
	wellLabels: getWellLabels(state),
	layout: state.router.params.layout,
	location: state.router
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate;
