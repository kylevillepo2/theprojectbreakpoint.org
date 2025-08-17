import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FounderCard from "../components/FounderCard";
import { founders } from "../data/founders";
import { Helmet } from "react-helmet";
import { MissionSection } from "../components/MissionSection";
import SubscribeSection from "../components/shared/SubscribeSection";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Project Breakpoint | Free Tennis for Kids in Fullerton</title>
        <meta name="description" content="Project Breakpoint is a tennis non-profit providing free tennis coaching, equipment, and a welcoming environment for low-income youth in the Fullerton area." />
      </Helmet>
      <Navbar />
      <main>
        {/* Welcome Section */}
        <section className="welcome-section bg-gray-50" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h1 style={{
            color: '#2e7d32',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '32px',
            letterSpacing: 1
          }}>
            Welcome to Project Breakpoint
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#333',
            maxWidth: 900,
            margin: '0 auto',
            lineHeight: 1.3
          }}>
            We're dedicated to creating inclusive tennis opportunities for all. Explore our mission, meet our team,<br />
            and discover how you can get involved in our community programs.
          </p>
        </section>

        {/* Mission Section */}
        <MissionSection />

        {/* Founders Section */}
        <div className="founders-section">
          <div className="founders-title">Our Founders</div>
          <div className="founders-container">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                image={founder.image}
                name={founder.name}
                role={founder.role}
                description={founder.description}
              />
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;