/*
*Action types
*/
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_LAYER = 'SHOW_LAYER';
export const SHOW_SAMPLE = 'SHOW_SAMPLE';

/*
*Action creators
*/

export function changeLayout(layout) {
	return {type: CHANGE_LAYOUT, layout};
}

export function showLayer(layer, value) {
	return {type: SHOW_LAYER, layer, value};
}

export function loadData(dataSet = 'default') {
	return {type: LOAD_DATA, dataSet};
}

export function showSample(showSample=true) {
	return {type: SHOW_SAMPLE, showSample};
}
