import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteBehavior from "./components/RouteBehavior";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Chapters from "./pages/Chapters";
import "./styles/App.css";
import "./styles/Landing.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <RouteBehavior />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/chapters" element={<Chapters />} />
        </Routes>
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
