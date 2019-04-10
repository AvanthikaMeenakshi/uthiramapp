import React from "react";

const ContactUsSection = () => (
  <div className="col-md-4 col-sm-6 col-xs-12">
    <div className="footer-widget">
      <div className="sidebar-widget-wrapper">
        <div className="footer-widget-header clearfix">
          <h3>Contact Us</h3>
        </div>
        <div className="textwidget">
          <i className="fa fa-envelope-o fa-contact" />{" "}
          <p><a href="/">support@donation.com</a><br /><a href="/">helpme@donation.com</a></p>
          <i className="fa fa-location-arrow fa-contact" />{" "}
          <p>Road-2,3/A East Shibgonj<br />Sylhet-3100, Bangladesh</p>
          <i className="fa fa-phone fa-contact" />{" "}
          <p>Office:&nbsp; (+880) 0823 560 433<br />Cell:&nbsp; (+880) 0723 161 343</p>
        </div>
      </div>
    </div>
  </div>
);

const SubscribeSection = () => (
  <div className="col-md-4 col-sm-6 col-xs-12">
    <div className="footer-widget">
      <div className="sidebar-widget-wrapper">
        <div className="footer-widget-header clearfix">
          <h3>Subscribe Us</h3>
        </div>
        <p>Signup for regular newsletter and stay up to date with our
          latest news.
        </p>
        <div className="footer-subscription">
          <p>
            <input
              id="mc4wp_email"
              className="form-control"
              required=""
              placeholder="Enter Your Email"
              name="EMAIL"
              type="email"
            />
          </p>
          <p>
            <input
              className="btn btn-default"
              value="Subscribe Now"
              type="submit"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SuportLinks = () => (
  <div className="col-md-4 col-sm-12 col-xs-12">
    <div className="footer-widget clearfix">
      <div className="sidebar-widget-wrapper">
        <div className="footer-widget-header clearfix">
          <h3>Support Links</h3>
        </div>
        <ul className="footer-useful-links">
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/thalassemia/symptoms-causes/syc-20354995">
              <i className="fa fa-caret-right fa-footer" />
              Thalassemia
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/symptoms/high-white-blood-cell-count/basics/definition/sym-20050611">
              <i className="fa fa-caret-right fa-footer" />
              Blood Count
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/thrombocytosis/symptoms-causes/syc-20378315">
              <i className="fa fa-caret-right fa-footer" />
              Thrombocytosis
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/sickle-cell-anemia/symptoms-causes/syc-20355876">
              <i className="fa fa-caret-right fa-footer" />
              Sickle Cell Anemia
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinic.org/diseases-conditions/aplastic-anemia/symptoms-causes/syc-20355015">
              <i className="fa fa-caret-right fa-footer" />Aplastic Anemia
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const FooterComponent = () => (
  <footer>
    <section className="footer-widget-area footer-widget-area-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="about-footer">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <img src="/images/logo-footer.png" alt="footer-logo" />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <p>
                    We are world largest and trustful blood donation center. We
                    have been working since 1973 with a prestigious vision to
                    helping patient to provide blood. We are working all over
                    the world, organizing blood donation campaign to grow
                    awareness among the people to donate blood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <SubscribeSection />
          <ContactUsSection />
          <SuportLinks />
        </div>
      </div>
    </section>
    <section className="footer-contents">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <p className="copyright-text">
              Copyright © {new Date().getFullYear()}, All Right Reserved
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            <div className="footer-nav">
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/register">Join</a></li>
                  <li><a href="/about_us">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default FooterComponent;
