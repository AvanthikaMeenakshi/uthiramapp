import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Udhiram</a>
            </div>
            <div className="navbar-right">
              <a className="navbar-brand" href="#">Register</a>
              <a className="navbar-brand" href="#">Login</a>
              <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="Bottom--Button">
          <a href=""><div className="Become--Member">
            <i className="icon ion-person-add"></i>
          </div></a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="Banner--Blood">
                <div className="row">
                  <div className="col-lg-8 col-md-7 col-sm-6 col-xs-6">
                    <div className="Banner--Text ml30">
                      <p >Chennai faces fatal accidents 16% more than the other metro cities.</p>
                      <p>A life may depend on a gesture from you, a pint of Blood.</p>
                      <p>Becoming a superman is just a needle away.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6 tc">
                    <div className="Banner--Image img-responsive" width="100%">
                      <img src="./images/blood-bag.jpg" className="img-responsive" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
