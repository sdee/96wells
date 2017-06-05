import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { postNotification } from './actions';

import Container from './components/Container.js';
import App from './App.js';
import StepContainer from './components/Stepper/StepContainer.js';

const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/step/0" />
		<Route path="/StepInterface" component={StepContainer} >
			<Route path="/step/:stepId" component={StepContainer} />
		</Route>
	</Route>
);

export default routes;
