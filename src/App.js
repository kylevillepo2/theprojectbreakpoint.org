import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Rename your original App component to Home.js
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import EventPopup from "./components/EventPopup";
import "./App.css";

function App() {
  return (
    <Router>
      <EventPopup />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
