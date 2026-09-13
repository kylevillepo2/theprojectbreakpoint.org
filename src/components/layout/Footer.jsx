import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="bp-container footer-grid">
        <div>
          <Link className="brand" to="/">
            PROJECT BREAKPOINT
          </Link>
          <p>
            Free tennis. Student mentors.
            <br />A community for every child.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="/#mission">Our mission</a>
          <a href="/#programs">Programs</a>
          <a href="/#impact">Impact</a>
          <a href="/#team">Our team</a>
          <Link to="/donate">Donate</Link>
        </div>
        <div>
          <h2>Our chapters</h2>
          <a href="/#uci">UC Irvine · Active</a>
          <a href="/#ucsd">UC San Diego · Launching soon</a>
          <Link to="/chapters">Volunteer or start a chapter</Link>
        </div>
        <div>
          <h2>Say hello</h2>
          <a href="mailto:proj.breakpoint@gmail.com">
            proj.breakpoint@gmail.com
          </a>
          <a href="tel:+18582955270">(858) 295-5270</a>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      <div className="bp-container footer-bottom">
        © {new Date().getFullYear()} Project Breakpoint. All rights reserved.
      </div>
    </footer>
  );
}
