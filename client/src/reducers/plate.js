const testList = require('../../../data/test_list.json'); //move up higher

const layouts = ['listorder', 'random'];

import { CHANGE_LAYOUT, SHOW_LAYER } from '../actions';

const sizes = {
	'96': [8, 12],
	'284': [24, 16]
};

const initialState = {
	size: '96', //number of wells
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
