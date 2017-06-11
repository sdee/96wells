import { createSelector } from 'reselect';
import { getAttributes } from '../selectors/samples';
//include id in export?

export const dataList = state => state.app.dataList;

export const attributes = state => getAttributes(state);

export const csvFile = createSelector(
	let csv = [];
	[dataList, attributes],
	(dataList, samples) => {
		let cols = ['Sample'];
		cols.concat(Array.from(attributes));
		dataList.forEach((d) => {
			let row = [];
			row.push(d.sample);
			attributes.forEach((a) => {
				row.push(d[d] || '');
			});
		});
	});
	return csv;
);
