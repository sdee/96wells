import { combineReducers } from 'redux';
import app from './app';
import plate from './plate';
import { reducer as formReducer } from 'redux-form'

const wells = combineReducers({
	app,
	plate,
	form: formReducer
});

export default wells;
