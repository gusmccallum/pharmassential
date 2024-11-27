import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>Pharmassential</h1>
        <p>Fast, Reliable Medication Delivery</p>
      </div>
      <div className="banner-cta">
        <button className="cta-button">Order Now</button>
      </div>
    </header>
  );
};

export default Banner; 