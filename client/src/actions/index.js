/*
*Action types
*/
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_LAYER = 'SHOW_LAYER';
export const SHOW_SAMPLE = 'SHOW_SAMPLE';
export const LOAD_GOOGLE_SUCCESS = 'LOAD_GOOGLE_SUCCESS';
export const SET_GOOGLE_SHEET = 'LOAD_GOOGLE_SHEET';
export const SELECT_STEP = 'SELECT_STEP';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const POST_NOTIFICATION = 'POST_NOTIFICATION';
export const SWAP_LOCATIONS = 'SWAP_LOCATIONS';

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

export function selectStep(step) {
	return { type: SELECT_STEP, step };
}

export function postNotification(message) {
	return { type: POST_NOTIFICATION, message };
}

export function clearNotification() {
	return { type: CLEAR_NOTIFICATION };
}

export function swapLocations(source, target) {
	return { type: SWAP_LOCATIONS, source, target };
}
