import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">About</Link></li>
        <li className="nav-item"><Link to="/projects">Projects</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;