import { createSelector } from 'reselect';

var Miso = require("miso.dataset");

const dataList = state => state.app.googlesheet;

export const getColumns = createSelector(
	[dataList],
	googlesheet => (
		console.log(googlesheet)
	)
);
