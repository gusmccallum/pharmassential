import React from 'react';
import './App.css';
import Banner from './components/Banner';
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Banner />
      <main>
        {/* Your main content goes here */}
        <h2>Welcome to Pharmassential</h2>
        <p>Easy medication delivery for seniors and people with disabilities</p>
        {/* Add more sections or components as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
