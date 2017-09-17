import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router'; // importing from 'react-router'
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as ReactBootstrap from 'react-bootstrap';
ReactDOM.render(
	<div>
		<HeaderComponent />
		<Routes history={browserHistory} />
		<FooterComponent />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();