import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import ProjectsPage from '../pages/ProjectsPage';
import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/projects" component={ProjectsPage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
