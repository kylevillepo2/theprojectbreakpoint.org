import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";

function Events() {
  const [events] = useState([
    { date: "2025-03-15", id: 1 },
    { date: "2025-04-10", id: 2 },
    { date: "2025-05-05", id: 3 },
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

    updateTimers(); // Initial call
    const interval = setInterval(updateTimers, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [events]);

  function calculateTimeRemaining(eventDate) {
    const now = new Date();
    const eventTime = new Date(eventDate);
    const timeDiff = eventTime - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return { days, hours };
  }

  // Format numbers with leading zero
  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div>
      <Navbar />
      <main>
        <section className="welcome-section">
          <h2>Our Upcoming Events</h2>
          <p>
            Join Project Breakpoint for clinics, tournaments, and community
            gatherings. We believe in the power of tennis to bring people
            together and foster a spirit of camaraderie.
          </p>
        </section>

        <section className="events-section">
          <div className="events-container">
            {/* Event 1 */}
            <div className="event-card">
              <img src={"./photos/img4.jpg"} alt="Spring Tennis Clinic" />
              <div className="event-info">
                <h3 className="event-title">Spring Tennis Clinic</h3>
                <p className="event-date">Date: March 15, 2024</p>
                {/* time remaining */}
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
                </div>
                <p className="event-location">
                  Location: UC Irvine Tennis Courts
                </p>
                <p className="event-description">
                  Our spring clinic welcomes all skill levels to learn
                  fundamentals, refine technique, and enjoy a fun day on the
                  court.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-card">
              <img
                src={"./photos/img5.jpg"}
                alt="Community Doubles Tournament"
              />
              <div className="event-info">
                <h3 className="event-title">Community Doubles Tournament</h3>
                <p className="event-date">Date: April 10, 2024</p>
                <div className="countdown-timer">
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[2]?.days || 0)}
                    </span>
                    <span className="time-label">Days</span>
                  </div>
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[2]?.hours || 0)}
                    </span>
                    <span className="time-label">Hours</span>
                  </div>
                </div>
                <p className="event-location">Location: Irvine Public Park</p>
                <p className="event-description">
                  Grab a partner and sign up for our doubles tournament! All
                  proceeds support our youth mentorship and tennis programs.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-card">
              <img src={"./photos/img6.jpg"} alt="Youth Outreach Day" />
              <div className="event-info">
                <h3 className="event-title">Youth Outreach Day</h3>
                <p className="event-date">Date: May 5, 2024</p>
                <div className="countdown-timer">
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[3]?.days || 0)}
                    </span>
                    <span className="time-label">Days</span>
                  </div>
                  <div className="time-block">
                    <span className="time-number">
                      {formatNumber(timeRemaining[3]?.hours || 0)}
                    </span>
                    <span className="time-label">Hours</span>
                  </div>
                </div>
                <p className="event-location">
                  Location: Santa Ana Community Center
                </p>
                <p className="event-description">
                  A special day dedicated to introducing tennis to youth in the
                  community through games, mini-tournaments, and coaching
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Events;
