import { LOAD_DATA, LOAD_GOOGLE_SUCCESS, SELECT_STEP } from '../actions';

// const testList = require('../../../data/test_list.json');
const fullPlate = require('../../../data/full_plate.json');
const balancedTest = require('../../../data/balanced_test.json');

const initialState = {
	datasource: 'balanced', // source of sample list
	googlesheet: '',
	dataList: [],
	currentStep: 0
}

function selectData(dataset) {
	switch(dataset) {
		case 'balanced': {
			return balancedTest;
		}
		case 'fullplate': {
			return fullPlate;
		}
		case 'default': {
			return balancedTest;
		}
		case 'empty': {
			return [];
		}
	}
}

const app = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA: {
			const data = selectData(action.dataSet);
			return Object.assign({}, state, {
				datasource: action.dataSet === 'default'? 'balanced' : action.dataSet,
				dataList: data.map(function (v, i) {
					v.idx = i;
					return v;
				}) // adds id
			});
		}

		case SELECT_STEP: {
			return Object.assign({}, state, {
				currentStep: action.step
			});
		}

		case LOAD_GOOGLE_SUCCESS: {
			return Object.assign({}, state, {
				googlesheet: action.key,
				dataList: action.resp,
				datasource: 'googlesheet'
			});
		}

		default: {
			return state;
		}
	}
};

export default app;
