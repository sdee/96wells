import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';
import plate from './plate';

const wells = combineReducers({
	app,
	plate,
	form: formReducer
});

export default wells;
