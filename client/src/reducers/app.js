import { LOAD_DATA } from '../actions';

const testList = require('../../../data/test_list.json');
const fullPlate = require('../../../data/full_plate.json');
const balancedTest = require('../../../data/balanced_test.json');

const initialState = {
	datasource: 'test1', // source of sample list
	googlesheet: '1Ewgyv4EayonkOHaa6Q8N_63jrjt7vQF-NFOCZRPQuU4',
	dataList: testList.map(function (v, i) {
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
			}) // adds id
		});
	}
	default: {
		return state;
	}
	}
};

export default app;
