import { combineReducers } from 'redux';
import app from './app';
import plate from './plate';
import notification from './notification';

const wells = combineReducers({
	app,
	plate,
	notification
});

export default wells;
