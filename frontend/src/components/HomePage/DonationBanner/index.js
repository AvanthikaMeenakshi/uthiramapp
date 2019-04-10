import React from 'react';

const DonationBanner = () => (
  <div className="slider-wrap">
    <div id="slider_1" className="owl-carousel owl-theme">
      <div className="item">
        <img src="/images/home_1_slider_1.jpg" alt="img" />
        <div className="slider-content text-center">
          <div className="container">
            <div className="slider-contents-info">
              <h3>Donate blood,save life !</h3>
              <h2>Your Donation Can bring<br />smile at others face</h2>
              <a href="/register" className="btn btn-slider">Donate Now <i className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DonationBanner;
