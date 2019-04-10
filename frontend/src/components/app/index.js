import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import DonorRegistration from '../DonorRegistration';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/register" component={DonorRegistration} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
