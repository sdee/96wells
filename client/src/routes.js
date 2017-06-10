import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import StepContainer from './components/Stepper/StepContainer';
import App from './App.js';

const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/step/0" />
		<Route path="/StepInterface" component={StepContainer} >
			<Route path="/step/:stepId" component={StepContainer} />
		</Route>
	</Route>
);

export default routes;
