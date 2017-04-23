import { combineReducers } from 'redux';
import app from './app';
import { reducer as formReducer } from 'redux-form'

const wells = combineReducers({
	app,
	form: formReducer
});

export default wells;
