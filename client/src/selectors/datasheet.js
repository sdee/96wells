import { createSelector } from 'reselect';

var Miso = require("miso.dataset");

const dataList = state => state.app.googlesheet;

const getColumns = createSelector(
	[dataList],
	googlesheet => (
		console.log(googlesheet)
	)
);
