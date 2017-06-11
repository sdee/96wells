import { createSelector } from 'reselect';
import { getAttributes } from '../selectors/samples';
//include id in export?

export const dataList = state => state.app.dataList;
export const layout = state => state.plate.layout;

// export const attributes = state => getAttributes(state);

export const csvFile = createSelector(
	[dataList, getAttributes, layout],
	(dataList, attributes) => {
		const csv = [];
		const cols = ['Sample'];
		csv.push(cols.concat(attributes));
		dataList.forEach((d) => {
			const row = [];
			row.push(d.sample);
			attributes.forEach((a) => {
				row.push(d[a] || '');
			});
			csv.push(row);
		});
		return csv;
	});
