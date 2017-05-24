import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './components/Container.js';
import App from './App.js';
import StepContainer from './components/Stepper/StepContainer.js';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={StepContainer} />
    <Route path="/StepInterface" component={StepContainer} >
      <Route path="/step/:stepId" component={StepContainer} />
    </Route>
  </Route>
);

export default routes;
