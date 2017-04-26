import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './app';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';

const store = createStore(rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

render(
	<Provider store={store}>
  <App />
	</Provider>,
  document.getElementById('root')
);
