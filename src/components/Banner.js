import React from 'react';
import './Banner.css';
import deliveryImage from '../img/delivery3.jpg';

const Banner = () => {
  return (
    <header className="banner" style={{ backgroundImage: `url(${deliveryImage})` }}>
      <div className="gradient-overlay top"></div>
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <h1>Pharmassential</h1>
          <p>Fast, Reliable Medication Delivery</p>
          <div className="banner-cta">
            <button className="cta-button">Order Now</button>
          </div>
        </div>
      </div>
      <div className="gradient-overlay bottom"></div>
    </header>
  );
};

export default Banner; 