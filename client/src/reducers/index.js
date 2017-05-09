import { combineReducers } from 'redux';
import app from './app';
import plate from './plate';

const wells = combineReducers({
	app,
	plate
});

export default wells;
