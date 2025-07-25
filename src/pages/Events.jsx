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
      </Helmet>
      <Navbar />
      <main>
        <section className="events-section">
          <div className="events-container">
            <div className="event-card featured-event">
              {/* Countdown Timer */}
              <div className="countdown-timer" style={{marginBottom: 24}}>
                <span className="countdown-label">First Summer Clinic Starts In:</span>
                <span className="countdown-value">{days}d {hours}h</span>
              </div>
              <h2 className="event-card-title">SUMMER TENNIS CLINICS</h2>
              <h3 className="event-card-subtitle">Every Friday • 4:30 PM - 5:30 PM</h3>
              <div className="event-card-dates">
                July 11th - August 16th, 2025
              </div>
              <div className="event-card-address">
                Canyon Crest Academy Tennis Courts<br />
                San Diego, CA
              </div>
              {/* Google Maps Embed */}
              <div className="event-card-map">
                <iframe
                  title="Canyon Crest Academy Athletic Field Map"
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=32.9579101,-117.1886939&zoom=16&maptype=satellite"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Highlights */}
              <div className="event-highlights-row">
                <span className="event-highlight-badge">NO EXPERIENCE NEEDED</span>
                <span className="event-highlight-badge">RACKETS & BALLS PROVIDED</span>
                <span className="event-highlight-badge">WEEKLY SESSIONS</span>
              </div>
              <div className="event-card-rsvp-row">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDRxICh6-rq7MxxBMoFmxUTshPGOe1rsyQoB33ZwWFoP_Yhg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-card-rsvp-btn"
                >
                  RSVP HERE
                </a>
              </div>
            </div>
          </div>
        </section>
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