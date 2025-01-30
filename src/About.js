import React from 'react';
import Navbar from './Navbar'; // We'll extract the navbar
import Footer from './Footer'; // We'll extract the footer
import SubscribeSection from './SubscribeSection'; // We'll extract subscribe section

function About() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Project Breakpoint was founded in 2024 by a group of college tennis enthusiasts
            who recognized the need for more accessible community tennis programs. Starting
            as a small local initiative, we've grown to serve over 500 participants annually
            through our various community programs and partnerships.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to make tennis accessible to everyone regardless of age, background,
            or financial situation. Through free community clinics, equipment donations,
            and partnerships with local schools, we're breaking down barriers to entry
            and fostering a love for the sport.
          </p>
        </section>

        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;