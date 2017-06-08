import { connect } from 'react-redux';
import PlateLayout from '../components/PlateLayout/PlateLayout';
import { getSamples, getAttributes, getColorMap } from '../selectors/samples';
import { getWellLabels } from '../selectors/labels';
import { calculateLayout } from '../selectors/layout';
import { swapLocations } from '../actions';

function handleDnd(sourceCoord, targetCoord, dispatch) {
	console.log("handle dnd");
	console.log(sourceCoord);
	console.log(targetCoord);
	dispatch(swapLocations(sourceCoord, targetCoord));
}

const mapStateToProps = (state, ownProps) => ({
	layout: state.plate.layout,
	plateSize: state.plate.plateSize,
	dataList: state.app.dataList,
	samples: getSamples(state),
	colorMap: getColorMap(state),
	attributes: getAttributes(state),
	visibleAttributes: state.plate.visibleAttributes,
	grid: calculateLayout(state),
	wellLabels: getWellLabels(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	swapWells: (source, target) => {
		handleDnd(source, target, dispatch);
	}
});

const Plate = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlateLayout);

export default Plate;
