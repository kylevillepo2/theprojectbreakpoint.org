import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";
import { Helmet } from "react-helmet";

function Events() {
  const [events] = useState([
    { date: "2024-05-10", id: 1 } // Updated event date
  ]);

  const [timeRemaining, setTimeRemaining] = useState({});
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0});

  useEffect(() => {
    const updateTimers = () => {
      const newTimes = {};
      events.forEach((event) => {
        newTimes[event.id] = calculateTimeRemaining(event.date);
      });
      setTimeRemaining(newTimes);
    };
  
    updateTimers();
    const interval = setInterval(updateTimers, 1000); // Update every second
  
    return () => clearInterval(interval);
  }, [events]);

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

  function calculateTimeRemaining(eventDate) {
    const now = new Date();
    // May 10, 2024 at 1:00 PM local time
    const eventTime = new Date(2024, 4, 10, 13, 0); // Months are 0-based (4 = May)
    const timeDiff = eventTime - now;
    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    return { days, hours, minutes };
  }

  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - Events</title>
      </Helmet>
      <Navbar />
      <main>
        <section className="events-section">
          <div className="events-container" style={{textAlign: 'center', padding: '60px 0', position: 'relative'}}>
            <div className="event-card featured-event" style={{maxWidth: 700, margin: '0 auto', background: '#22343a', color: 'white', borderRadius: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', padding: 32, position: 'relative', overflow: 'hidden'}}>
              {/* Countdown Timer */}
              <div className="countdown-timer" style={{marginBottom: 24}}>
                <span className="countdown-label">Event Starts In:</span>
                <span className="countdown-value">{days}d {hours}h {minutes}m</span>
              </div>
              <h2 style={{fontSize: '2em', marginBottom: 16, fontWeight: 700, letterSpacing: 1}}>SATURDAY MAY 24TH, 12:00 - 1:00 PM</h2>
              <h3 style={{fontWeight: 600, marginBottom: 8}}>at Fullerton Tennis Center</h3>
              <div style={{marginBottom: 24, fontSize: '1.1em', letterSpacing: 1}}>
                110 E Valencia Mesa Dr,<br />
                Fullerton, CA 92835
              </div>
              {/* Google Maps Embed */}
              <div style={{margin: '32px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
                <iframe
                  title="Fullerton Tennis Center Map"
                  src="https://www.google.com/maps?q=Fullerton+Tennis+Center,110+E+Valencia+Mesa+Dr,+Fullerton,+CA+92835&output=embed"
                  width="100%"
                  height="300"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Highlights */}
              <div className="event-highlights-row" style={{justifyContent: 'center', marginBottom: 24}}>
                <span className="event-highlight-badge">NO EXPERIENCE NEEDED</span>
                <span className="event-highlight-badge">RACKETS & BALLS PROVIDED</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap'}}>
                <div style={{flex: 1, minWidth: 220}}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDRxICh6-rq7MxxBMoFmxUTshPGOe1rsyQoB33ZwWFoP_Yhg/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#d6f36b',
                      color: '#22343a',
                      fontWeight: 700,
                      fontSize: '1.3em',
                      borderRadius: 10,
                      padding: '18px 40px',
                      margin: '24px 0 0 0',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    RSVP HERE
                  </a>
                </div>
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