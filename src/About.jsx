import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - About</title>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Image Section */}
        <section
          style={{
            backgroundImage: `url(${"/photos/ourstory.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            minHeight: "600px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "700px",
            }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Our Story</h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              Project Breakpoint was founded by a group of college students passionate about making tennis accessible to all.
            </p>
          </div>
        </section>

        {/* Our Mission & Vision Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to break down barriers and share the joy of tennis with youth from all backgrounds.
            Our mission is to create inclusive, fun, and supportive spaces where kids can grow both on and off the court.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a future where every child—regardless of income, location, or experience—has the opportunity
            to learn, grow, and thrive through tennis. We hope to expand our reach nationally and develop future leaders
            who give back to their communities through sport.
          </p>
          <ul>
            <li>🎾 Teaching life skills through tennis</li>
            <li>🌱 Fostering inclusivity and personal growth</li>
            <li>🤝 Partnering with schools and community centers</li>
            <li>🧠 Supporting mental and physical wellness</li>
            <li>🎉 Making tennis fun, accessible, and empowering</li>
          </ul>
        </section>

        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
