import React from 'react';
import { Link } from 'react-router-dom';
import logo from './photos/logo.png';

function Navbar() {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="Logo" className="nav-logo" /></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;