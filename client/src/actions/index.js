/*
*Action types
*/
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_LAYER = 'SHOW_LAYER';

/*
*Action creators
*/

export function changeLayout(layout) {
	return {type: CHANGE_LAYOUT, layout};
}

export function showLayer(layer) {
	return {type: SHOW_LAYER, layer};
}

export function loadData(dataSet = 'default') {
	return {type: LOAD_DATA, dataSet};
}
