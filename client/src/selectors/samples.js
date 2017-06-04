import { createSelector } from 'reselect';
import { pluck } from 'underscore';

const dataList = state => state.app.dataList;

export const getSamples = createSelector(
	[dataList],
	dataRows => new Set(pluck(dataRows, 'sample'))
);

export const getSampleList = createSelector(
	[getSamples],
	samples => Array.from(samples)
);

export const getNumOfExperiments = createSelector(
	[dataList],
	dataRows => dataRows.length
);

export const getAttributes = createSelector(
	[dataList],
	(dataRows) => {
		const attributes = new Set(dataRows.reduce((prev, curr) => [...prev, ...Object.getOwnPropertyNames(curr)], []));
		attributes.delete('sample');
		attributes.delete('idx');
		return Array.from(attributes);
	}
);

export const getColorMap = createSelector(
	[getSamples],
	(samples) => {
		const colors = ['#21f0b6',
			'#0a4f4e',
			'#9acfd8',
			'#25919d',
			'#a7d64e',
			'#5c922f',
			'#f1bb99',
			'#a55153',
			'#e71761',
			'#d64405'];
		const numColors = colors.length;
		const sampleToColorMap = new Map();
		Array.from(samples).forEach((sample, i) => {
			const colorIndex = i % numColors;
			sampleToColorMap.set(sample, colors[colorIndex]);
		});
		return sampleToColorMap;
	}
);
