import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - About</title>
      </Helmet>
      <Navbar />
      <main>
        {/* Unified About Section */}
        <section
          style={{
            textAlign: "center",
            padding: "50px 20px",
            backgroundColor: "#fff",
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#263a44",
              color: "#fff",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
              position: "relative",
            }}
          >
            <h1 style={{ fontSize: "2.8rem", marginBottom: "20px", color: "#d6f36b", letterSpacing: 1 }}>About Us</h1>
            <img
              src="/photos/ourstory.jpg"
              alt="Our Story"
              style={{
                width: "220px",
                height: "auto",
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            {/* Our Story */}
            <h2 style={{ fontSize: "2rem", marginTop: "30px", color: "#d6f36b" }}>Our Story</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "10px" }}>
              Project Breakpoint was founded by a group of college students passionate about making tennis accessible to all.
              We believe that tennis has the power to build confidence, resilience, and community — and we are committed
              to sharing that experience with youth from every background.
            </p>

            {/* Our Mission */}
            <h2 style={{ fontSize: "2rem", marginTop: "30px", color: "#d6f36b" }}>Our Mission</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "10px" }}>
              We aim to break down barriers and share the joy of tennis with youth from all backgrounds.
              Our mission is to create inclusive, fun, and supportive spaces where kids can grow both on and off the court.
            </p>

            {/* Our Vision */}
            <h2 style={{ fontSize: "2rem", marginTop: "30px", color: "#d6f36b" }}>Our Vision</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "10px" }}>
              We envision a future where every child—regardless of income, location, or experience—has the opportunity
              to learn, grow, and thrive through tennis. We hope to expand our reach nationally and develop future leaders
              who give back to their communities through sport.
            </p>

            {/* Bullet Points */}
            <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.2rem", lineHeight: "2", marginTop: "20px" }}>
              <li>🎾 Teaching life skills through tennis</li>
              <li>🌱 Fostering inclusivity and personal growth</li>
              <li>🤝 Partnering with schools and community centers</li>
              <li>🧠 Supporting mental and physical wellness</li>
              <li>🎉 Making tennis fun, accessible, and empowering</li>
            </ul>
          </div>
        </section>

        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
