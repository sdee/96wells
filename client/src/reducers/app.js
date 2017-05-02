import { LOAD_DATA, SET_GOOGLE_SHEET } from '../actions';

var Miso = require("miso.dataset");

const testList = require('../../../data/test_list.json');
const fullPlate = require('../../../data/full_plate.json');
const balancedTest = require('../../../data/balanced_test.json');

const initialState = {
	datasource: 'test1', // source of sample list
	googlesheet: '',
	dataList: testList.map(function (v, i) {
		v.idx = i;
		return v;
	})
};

function createDataset(googlesheet) {
	var ds = new Miso.Dataset({
  importer : Miso.Dataset.Importers.GoogleSpreadsheet,
  parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
  key : googlesheet,
  worksheet : "1"
});

ds.fetch({
  success : function() {
    console.log(ds.columnNames());
  },
  error : function() {
    console.log("Connection error");
  }
});
}

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

	case SET_GOOGLE_SHEET: {
		console.log("SET googlesheet");
		console.log(action.key);
		createDataset(action.key);
		return Object.assign({}, state, {
			googlesheet: action.key
		});
	}

	default: {
		return state;
	}
	}
};

export default app;
