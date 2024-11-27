import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <button className="burger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="menu-items">
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/services" onClick={toggleMenu}>Our Services</a></li>
          <li><a href="/prescriptions" onClick={toggleMenu}>Manage Prescriptions</a></li>
          <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu; 