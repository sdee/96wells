const testList = require('../../../data/test_list.json'); //move up higher

const layouts = ['listorder', 'random'];

import { CHANGE_LAYOUT, SHOW_LAYER } from '../actions';

const initialState = {
	name: 'name',
	plateSize: 'test', //number of wells
	datasource: 'test1', //source of sample list
	layout: 'listorder' //algorithm for placing samples in wells,
};

const plate = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LAYOUT: {
			console.log("change layout");
			console.log(action.layout);
			return Object.assign({}, state, {
				layout: action.layout,
				plateSize: "test"
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
