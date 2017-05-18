import { createSelector } from 'reselect';

//apply visibility
const dataList = state => state.app.dataList;
const sampleVisible = state => state.plate.showSample;
const visibleAttribute = state => state.plate.visibleAttribute;

export const getWellLabels = createSelector(
	[dataList, sampleVisible, visibleAttribute],
	function (dataList, sampleVisible, visibleAttribute) {
		const wellLabels = new Map();
		console.log(dataList);
		dataList.forEach(function(d) {
			const labels = [];
			if (sampleVisible) {
				labels.push(d.sample);
			}
			if (visibleAttribute && d[visibleAttribute]) {
				const attr = d[visibleAttribute];
				labels.push(attr);
			}
			wellLabels.set(d.idx, labels);
		});
		console.log(wellLabels);
		return wellLabels;
	}
);
