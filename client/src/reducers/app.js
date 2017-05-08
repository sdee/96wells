import { LOAD_DATA, LOAD_GOOGLE_SUCCESS } from '../actions';

// const testList = require('../../../data/test_list.json');
// const fullPlate = require('../../../data/full_plate.json');
const balancedTest = require('../../../data/balanced_test.json');

const initialState = {
	datasource: 'test1', // source of sample list
	googlesheet: '',
	dataList: []
}

const app = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA: {
			return Object.assign({}, state, {
				dataList: balancedTest.map(function (v, i) {
					v.idx = i;
					return v;
				}) // adds id

			});
		}
		case LOAD_GOOGLE_SUCCESS: {
			return Object.assign({}, state, {
				googlesheet: action.key,
				dataList: action.resp
			});
		}

		default: {
			return state;
		}
	}
	};

	export default app;
