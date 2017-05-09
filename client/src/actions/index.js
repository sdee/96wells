/*
*Action types
*/
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_LAYER = 'SHOW_LAYER';
export const SHOW_SAMPLE = 'SHOW_SAMPLE';
export const LOAD_GOOGLE_SUCCESS = 'LOAD_GOOGLE_SUCCESS';
export const SET_GOOGLE_SHEET = 'LOAD_GOOGLE_SHEET';

/*
*Action creators
*/
export function changeLayout(layout) {
	return { type: CHANGE_LAYOUT, layout };
}

export function showLayer(layer, value) {
	return { type: SHOW_LAYER, layer, value };
}

export function loadData(dataSet = 'default') {
	return { type: LOAD_DATA, dataSet };
}

export function showSample(showSample = true) {
	return { type: SHOW_SAMPLE, showSample };
}

export function setGoogleSheet(key) {
	return { type: SET_GOOGLE_SHEET, key };
}

export function loadGoogleSuccess(resp, key) {
	return { type: LOAD_GOOGLE_SUCCESS, resp, key };
}
