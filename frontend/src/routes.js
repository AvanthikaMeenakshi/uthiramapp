// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/app';
import NotFound from './components/notfound';
import Register from './components/user/register.js';


const Routes = (props) => (
  <Router {...props}>
	<Route server_url="http://localhost:4000" path="/" component={App} />
	<Route server_url="http://localhost:4000" path="/Register" component={Register} />
	<Route server_url="http://localhost:4000" path="*" component={NotFound} />
  </Router>

);
 
export default Routes;