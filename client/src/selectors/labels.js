import { createSelector } from 'reselect';

//apply visibility
const dataList = (state) => state.app.dataList;
const sampleVisible = (state) => state.plate.showSample;
const visibleAttributes = (state) => state.plate.visibleAttributes;

export const getWellLabels=createSelector(
	[dataList, sampleVisible, visibleAttributes],
	function (dataList, sampleVisible, visibleAttributes) {
		let wellLabels = new Map();
		dataList.forEach (function(d) {
			let label = '';
			if (sampleVisible) {
				label+=d.sample;
			}
			if (visibleAttributes) {
				let attr = d[visibleAttributes];
				if (attr!==undefined) {
					label +="\n"+attr;
				}
			}
			wellLabels.set(d.idx, label);
		});
		return wellLabels;
	}
);
