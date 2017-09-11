import React, { Component } from 'react';

import './style.css';

import error from './error-404.png';

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