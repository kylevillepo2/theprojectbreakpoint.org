import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SubscribeSection from './SubscribeSection';

// You can replace these image imports with actual images for each event
import EventImg1 from './photos/img4.jpg';
import EventImg2 from './photos/img5.jpg';
import EventImg3 from './photos/img6.jpg';

function Events() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main>
        {/* Events Intro Section */}
        <section className="welcome-section">
          <h2>Our Upcoming Events</h2>
          <p>
            Join Project Breakpoint for clinics, tournaments, and community gatherings.
            We believe in the power of tennis to bring people together and foster a
            spirit of camaraderie.
          </p>
        </section>

        {/* Events Listing */}
        <section className="events-section">
          <div className="events-container">
            {/* Event 1 */}
            <div className="event-card">
              <img src={EventImg1} alt="Spring Tennis Clinic" />
              <div className="event-info">
                <h3 className="event-title">Spring Tennis Clinic</h3>
                <p className="event-date">Date: March 15, 2024</p>
                <p className="event-location">Location: UC Irvine Tennis Courts</p>
                <p className="event-description">
                  Our spring clinic welcomes all skill levels to learn fundamentals,
                  refine technique, and enjoy a fun day on the court.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-card">
              <img src={EventImg2} alt="Community Doubles Tournament" />
              <div className="event-info">
                <h3 className="event-title">Community Doubles Tournament</h3>
                <p className="event-date">Date: April 10, 2024</p>
                <p className="event-location">Location: Irvine Public Park</p>
                <p className="event-description">
                  Grab a partner and sign up for our doubles tournament! All proceeds
                  support our youth mentorship and tennis programs.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-card">
              <img src={EventImg3} alt="Youth Outreach Day" />
              <div className="event-info">
                <h3 className="event-title">Youth Outreach Day</h3>
                <p className="event-date">Date: May 5, 2024</p>
                <p className="event-location">Location: Santa Ana Community Center</p>
                <p className="event-description">
                  A special day dedicated to introducing tennis to youth in the
                  community through games, mini-tournaments, and coaching sessions.
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
