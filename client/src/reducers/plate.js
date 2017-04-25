import { CHANGE_LAYOUT, SHOW_LAYER } from '../actions';

const initialState = {
	name: 'name',
	plateSize: '96wells', //number of wells
	datasource: 'test1', //source of sample list
	layout: 'listorder' //algorithm for placing samples in wells,
};

const plate = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LAYOUT: {
			return Object.assign({}, state, {
				layout: action.layout
		});
		}

		case SHOW_LAYER: {
			return Object.assign({}, state, {

			});
		}
		default: {
			return state;
		}
	}
};

export default plate;
