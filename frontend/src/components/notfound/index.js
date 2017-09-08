import React, { Component } from 'react';

import './style.css';
import error from './error-404.png';

import {Bootstrap} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    return (
      <div className="logosytle">
        <img src={error} alt="404-notfound" />
      </div>
    );
  }
}