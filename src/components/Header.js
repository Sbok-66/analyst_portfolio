import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="site-title">Your Name</h1>
        <p className="tagline">Aspiring Data Analyst</p>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;