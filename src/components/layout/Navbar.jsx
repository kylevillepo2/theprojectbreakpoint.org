import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="/PlayerPictures/logo.png" alt="Logo" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link 
          to="/donate" 
          className="donate-btn"
          onClick={() => window.scrollTo(0, 0)}
        >
          Donate
        </Link>
        <Link 
          to="/about"
          onClick={() => window.scrollTo(0, 0)}
        >
          About
        </Link>
        <Link 
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact
        </Link>
        <Link 
          to="/events"
          onClick={() => window.scrollTo(0, 0)}
        >
          Events
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
