import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';

// const store = createStore(rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

const MaterialApp = () => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
	<MaterialApp />
	</Provider>,
	document.getElementById('root')
);
