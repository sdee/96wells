const testList = require('../../../data/test_list.json'); //move up higher
const fullPlate = require('../../../data/full_plate.json'); //move up higher
import { LOAD_DATA } from '../actions';

const initialState = {
	datasource: 'test1', //source of sample list
	dataList: testList
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA: {
			return Object.assign({}, state, {
				dataList: fullPlate
			});
		}
		default: {
			return state;
		}
	}
};

export default app;
