import { CHANGE_LAYOUT, SHOW_LAYER, SHOW_SAMPLE, SWAP_LOCATIONS } from '../actions';
import { isEqual } from 'underscore';

const initialState = {
	name: 'name',
	plateSize: '96wells', // number of wells
	datasource: 'test1', // source of sample list
	layout: 'listorder', // algorithm for placing samples in wells,
	visibleAttribute: '',
	showSample: true,
	userChanges: []
};

const plate = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_LAYOUT: {
		return Object.assign({}, state, {
			layout: action.layout
		});
	}

	case SHOW_LAYER: {
		const attribute = action.layer;
		const value = action.value;
		let visible = state.visibleAttribute;
		if (value) {
			visible = attribute;
		} else {
			visible = '';
		}
		return Object.assign({}, state, {
			visibleAttribute: visible
		});
	}

	case SHOW_SAMPLE: {
		return Object.assign({}, state, {
			showSample: action.showSample
		});
	}

	case SWAP_LOCATIONS: {
		console.log("swap locations");
		console.log(state.userChanges.length);
		console.log(state.userChanges);
		console.log(action.source);
		console.log(action.target);
		const userChangeList = state.userChanges;
		if (!isEqual(action.source, action.target)) {
			userChangeList.push([action.source, action.target]);
		}
		return Object.assign({}, state, {
			userChanges: userChangeList
		});
	}

	default: {
		return state;
	}
	}
};

export default plate;
