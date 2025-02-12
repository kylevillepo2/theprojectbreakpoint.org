import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";
import { Helmet } from "react-helmet";

function Events() {
  const [events] = useState([
    { date: "2025-02-22", id: 1 } // Only event remains
  ]);

  const [timeRemaining, setTimeRemaining] = useState({});

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

  function calculateTimeRemaining(eventDate) {
    const now = new Date();
    
    // Create event date with proper time (February 22, 2025 at 10:00 AM local time)
    const eventTime = new Date(2025, 1, 22, 10, 0); // Months are 0-based (1 = February)
    
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
        <section className="welcome-section">
          <h2>Our Inaugural Event! 🎾</h2>
          <p className="highlight-text">
            Be part of history as we launch our first community tennis clinic! 
            Perfect for all skill levels, this free event marks the beginning of 
            our mission to connect people through tennis.
          </p>
        </section>

        <section className="events-section">
          <div className="events-container">
            <div className="event-card featured-event">
              <img src={"./photos/img6.jpg"} alt="First Community Tennis Clinic" />
              <div className="event-info">
                <h3 className="event-title">Grand Opening Tennis Clinic</h3>
                <div className="event-highlights">
                  <p className="event-date">📅 February 22, 2025</p>
                  <p className="event-time">⏰ 10:00 AM - 11:00 AM</p>
                  <p className="event-location">📍 University Community Park, Irvine</p>
                </div>

                <div className="countdown-timer">
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[1]?.days || 0)}
                    </span>
                    <span className="time-label">Days</span>
                  </div>
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[1]?.hours || 0)}
                    </span>
                    <span className="time-label">Hours</span>
                  </div>
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[1]?.minutes || 0)}
                    </span>
                    <span className="time-label">Minutes</span>
                  </div>
                </div>

                <p className="event-description">
                  Join us for our very first community tennis clinic! 
                  Whether you're picking up a racket for the first time or 
                  looking to brush up your skills, this event is perfect for 
                  all ages. Let's serve up some fun while fostering a love 
                  for tennis in our community! 🎾✨
                </p>
                <div className="cta-banner">
                  <h4>Don't Miss Out!</h4>
                  <p>Free entry • All equipment provided • No experience needed</p>
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