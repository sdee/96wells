import { createSelector } from 'reselect';
import { getAttributes } from '../selectors/samples';
import { finalizeLayout } from '../selectors/layout';

export const dataList = state => state.app.dataList;
export const layout = state => state.plate.layout;

export const csvFile = createSelector(
	[dataList, getAttributes, finalizeLayout],
	(dlist, attributes, grid) => {
		const csv = [];
		let cols = ['Sample'].concat(attributes);
		cols.push('Well');
		csv.push(cols);
		const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P'];
		grid.forEach((row, rowIndex) => {
			row.forEach((d, colIndex) => {
				const exportRow = [];
				const well = letters[rowIndex] + String(colIndex);
				exportRow.push(d.sample);
				attributes.forEach((a) => {
					exportRow.push(d[a] || '');
				});
				exportRow.push(well);
				csv.push(exportRow);
			});
		});
		return csv;
	});
