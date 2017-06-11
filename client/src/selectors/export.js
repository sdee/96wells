import { createSelector } from 'reselect';
import { getAttributes } from '../selectors/samples';
import { finalizeLayout } from '../selectors/layout';
//include id in export?

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
				// console.log("ROW");
				// console.log(row);
				exportRow.push(well);
				csv.push(exportRow);
			});
		});
		return csv;
	});