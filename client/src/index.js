import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';

const store = createStore(rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

const MaterialApp = () => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
);


ReactDOM.render(
	<Provider store={store}>
	<MaterialApp />
	</Provider>,
	document.getElementById('root')
);
