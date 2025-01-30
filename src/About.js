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
            Blah Blah Blah
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Blah blah
          </p>
        </section>

        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;