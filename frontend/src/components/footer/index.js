import React, { Component } from 'react';

export default class FooterComponent extends Component {
  	render() {
	    return (
			<div className="footer">
				<footer className="site-footer"> 
					<div className="container"> 
						<div className="row"> 
							<div className="col-md-1"></div>
							<div className="col-md-10"> 
								<ul className="list-links"> 
									<li><a href="">Search Donors</a></li> 
									<li><a href="">About Us</a></li> 
									<li><a href="">Donor Registration</a></li> 
									<li><a href="">Search Donors</a></li>
									<li><a href="">Register As Donor </a></li>
									<li><a href="">Request Blood</a></li> 
									<li><a href="">Blood Tips</a></li>
									<li><a href="">Privacy Policy</a></li> 
								</ul> 
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
					<p className="small-text"> 
						All rights reserved © 2017
					</p> 
				</footer>
			</div>
	    );
  	}
}