import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function Events() {
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0});

  useEffect(() => {
    const eventTime = new Date(2025, 6, 11, 16, 30); // July 11, 2025, 4:30 PM
    const updateTimer = () => {
      const now = new Date();
      const diff = eventTime - now;
      if (diff <= 0) {
        setTimeLeft({days: 0, hours: 0});
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setTimeLeft({days, hours});
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const {days, hours} = timeLeft;

  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - Events</title>
        <meta name="description" content="See upcoming free tennis clinics and events for low-income youth in the Fullerton area. Project Breakpoint offers free tennis coaching, equipment, and a welcoming environment for kids and families." />
        <meta name="keywords" content="free tennis for kids, Fullerton youth tennis, tennis non-profit, low-income sports, tennis clinics Fullerton, Project Breakpoint events" />
      </Helmet>
      <Navbar />
      <main>
        {/* Fullerton Move Highlight Section */}
        <section className="events-section" style={{ background: '#f8faf8', padding: '48px 0' }}>
          <div className="events-container">
            <div className="event-card" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', borderRadius: 18, padding: 36 }}>
              <h2 className="event-card-title" style={{ color: '#22343a', marginBottom: 16 }}>Coming This Fall: Fullerton Tennis Clinics</h2>
              <p style={{ fontSize: '1.15rem', color: '#22343a', marginBottom: 20 }}>
                We’re excited to announce that Project Breakpoint will be expanding to Fullerton starting around October! Stay tuned for more details about our new weekly clinics, locations, and how to get involved.
              </p>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎾</div>
              <div style={{ color: '#555', fontSize: '1rem' }}>
                If you’re in the Fullerton area and interested in joining or volunteering, <br />
                please <a href="/contact" style={{ color: '#d6f36b', fontWeight: 700, textDecoration: 'underline' }}>contact us</a>!
              </div>
            </div>
          </div>
        </section>
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Events;