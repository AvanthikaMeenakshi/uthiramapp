import React, { Component } from 'react';
import logo from '../../blood_bank.png';

export default class HeaderComponent extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = { user = [] }
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
		this.loadLoggedInUser = this.loadLoggedInUser.bind(this);
	}

	loadLoggedInUser(){
		fetch('/loginuser', {
        	method: 'GET'
    	}).then(function(response) {
		    if (response.status >= 400) {
		      throw new Error("Bad response from server");
		    }
		    return response.json();
		}).then(function(data) {
    		if(data === "no user"){
    			console.log("HERE")
    			this.setState({ user: "" })
    		} else {
    			console.log("HERE2")
    		}
  		}).catch(err => {
	       console.log('caught it!',err);
	    })
	}

	componentDidMount() {
		this.loadLoggedInUser.bind(this);
	}
	
  	render() {
  		var style = {
  			backgroundImage: "url(" + logo + ")",
  			backgroundSize: "contain",
    		width: "100%",
    		height: "100%",
    		backgroundPosition: "center",
    		display: "inline-block",
    		backgroundRepeat: "no-repeat"
  		}
    	return (
    		<div className="header">
    			<a href="/" className="logo-a"><span style={style}></span></a>
    			<div className="header-links">
			    <a href="/register">Register</a>
			    <a href="/login">Login</a>
			    <a href="/search">Search</a>
			    </div>
			</div>
    	);
  	}
}