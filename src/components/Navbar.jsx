import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import v from '../assets/v.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <a  href = "/" className="navbar-left">
        <img src={v} alt="Logo" className="navbar-logo" />
      </a>
      <div className="navbar-center">
        <a href="#opportunities" className="nav-link">Opportunities</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#how-it-works" className="nav-link">How It Works?</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Login</button>
        <button className="navbar-button-j">Join-now</button>
      </div>
    </nav>
  );
};

export default Navbar;
