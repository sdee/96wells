const testList = require('../../../data/test_list.json');
const fullPlate = require('../../../data/full_plate.json');
const balancedTest = require('../../../data/balanced_test.json');
import { LOAD_DATA } from '../actions';

const initialState = {
	datasource: 'test1', //source of sample list
	dataList: testList.map(function (v,i) {
		v.idx = i;
		return v;
	})
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA: {
			return Object.assign({}, state, {
				dataList: balancedTest.map(function (v,i) {
 				v.idx = i;
				return v;
			}) //adds id
			});
		}
		default: {
			return state;
		}
	}
};

export default app;
