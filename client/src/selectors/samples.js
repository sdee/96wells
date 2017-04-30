import { createSelector } from 'reselect';
import { pluck } from 'underscore';

const dataList = (state) => state.app.dataList;

export const getSamples = createSelector(
	[ dataList ],
	(dataRows) => {
		return new Set(pluck(dataRows, 'sample'));
	}
)

export const getAttributes = createSelector(
	[ dataList ],
	(dataRows) => {
		let attributes = new Set(dataRows.reduce((prev, curr) => [...prev, ...Object.getOwnPropertyNames(curr)],[] ));
		attributes.delete('sample');
		attributes.delete('idx');
		return Array.from(attributes);
	}
)

export const getColorMap = createSelector(
	[ getSamples ],
	function (samples) {
		const colors = ["#21f0b6", "#0a4f4e", "#9acfd8", "#25919d", "#a7d64e", "#5c922f", "#f1bb99", "#a55153", "#e71761", "#d64405"];
		const numColors = colors.length;
		let sampleToColorMap = new Map();
		Array.from(samples).forEach (function(sample, i) {
			let colorIndex = i % numColors;
			sampleToColorMap.set(sample, colors[colorIndex]);
		});
		return sampleToColorMap;
	}
)
