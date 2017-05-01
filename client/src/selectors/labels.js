import { createSelector } from 'reselect';

//apply visibility
const dataList = (state) => state.app.dataList;
const sampleVisible = (state) => state.plate.showSample;
const visibleAttribute = (state) => state.plate.visibleAttribute;

export const getWellLabels=createSelector(
	[dataList, sampleVisible, visibleAttribute],
	function (dataList, sampleVisible, visibleAttribute) {
		let wellLabels = new Map();
		dataList.forEach (function(d) {
			let labels = new Array();
			if (sampleVisible) {
				labels.push(d.sample);
			}
			if (visibleAttribute && d[visibleAttribute]) {
				let attr = d[visibleAttribute];
				labels.push(attr);
			}

			wellLabels.set(d.idx, labels);
		});
		return wellLabels;
	}
);
