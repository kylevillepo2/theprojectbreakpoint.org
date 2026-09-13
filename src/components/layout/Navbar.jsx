import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const close = () => setOpen(false);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={close}>
          <img src="/images/logo.png" width="48" height="48" alt="" />
          <span>
            PROJECT
            <br />
            BREAKPOINT
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <div
          id="main-navigation"
          className={`site-links ${open ? "is-open" : ""}`}
          onClick={close}
        >
          <a href="/#mission">Mission</a>
          <a href="/#programs">Programs</a>
          <Link to="/chapters">Chapters</Link>
          <a href="/#team">Team</a>
          <Link to="/contact">Contact</Link>
          <Link className="bp-button" to="/donate">
            Donate <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
