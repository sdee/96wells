import { CHANGE_LAYOUT, SHOW_LAYER, SHOW_SAMPLE } from '../actions';

const initialState = {
	name: 'name',
	plateSize: '96wells', //number of wells
	datasource: 'test1', //source of sample list
	layout: 'listorder', //algorithm for placing samples in wells,
	visibleAttribute: '',
	showSample: true
};

const plate = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LAYOUT: {
			return Object.assign({}, state, {
				layout: action.layout
			});
		}

		case SHOW_LAYER: {
			let attribute = action.layer;
			let value = action.value;
			let visible = state.visibleAttribute.slice(0);
			if (value) {
				visible = attribute;
			}
			else {
				visible = '';
			}
			return Object.assign({}, state, {
				visibleAttribute: visible
			});
		}

		case SHOW_SAMPLE: {
			console.log("SHOW SAMPLE");
			console.log(action.showSample);
			return Object.assign({}, state, {
				showSample: action.showSample
			});
		}

		default: {
			return state;
		}
	}
};

export default plate;
