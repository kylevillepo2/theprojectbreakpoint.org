import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";
import { Helmet } from "react-helmet";

function Events() {
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0});

  useEffect(() => {
    const eventTime = new Date(2025, 4, 24, 12, 0); // May 24, 2025, 12:00 PM
    const updateTimer = () => {
      const now = new Date();
      const diff = eventTime - now;
      if (diff <= 0) {
        setTimeLeft({days: 0, hours: 0, minutes: 0});
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({days, hours, minutes});
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const {days, hours, minutes} = timeLeft;

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
                <span className="countdown-label">Event Starts In:</span>
                <span className="countdown-value">{days}d {hours}h {minutes}m</span>
              </div>
              <h2 className="event-card-title">SATURDAY MAY 24TH, 12:00 - 1:00 PM</h2>
              <h3 className="event-card-subtitle">at Fullerton Tennis Center</h3>
              <div className="event-card-address">
                110 E Valencia Mesa Dr,<br />
                Fullerton, CA 92835
              </div>
              {/* Google Maps Embed */}
              <div className="event-card-map">
                <iframe
                  title="Fullerton Tennis Center Map"
                  src="https://www.google.com/maps?q=Fullerton+Tennis+Center,110+E+Valencia+Mesa+Dr,+Fullerton,+CA+92835&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Highlights */}
              <div className="event-highlights-row">
                <span className="event-highlight-badge">NO EXPERIENCE NEEDED</span>
                <span className="event-highlight-badge">RACKETS & BALLS PROVIDED</span>
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
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Events;