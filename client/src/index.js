import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import app from './reducers/app';
import plate from './reducers/plate';
import notification from './reducers/notification'

import './index.css';
import { routerForBrowser } from 'redux-little-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const routes = {
  '/layout/:layout': {
    title: 'layout algorithm'
  }
};

const {
  reducer,
  middleware,
  enhancer
} = routerForBrowser({
  // The configured routes. Required.
  routes,
  // The basename for all routes. Optional.
  basename: '/example'
});

const middlewares = [middleware, thunk].filter(Boolean);

// const store = createStore(combineReducers({ router: reducer, appReducer, plateReducer, notificationReducer }), /* preloadedState, */ composeEnhancers( enhancer,
//     applyMiddleware(...middlewares)
//   ));

const reducers = combineReducers({ app, plate, notification, router: reducer });

	const store = createStore( reducers, /* preloadedState, */ composeEnhancers(
	    applyMiddleware(...middlewares)
	  ));


console.log(store);

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
