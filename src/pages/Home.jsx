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
        {/* Mission Section - Full Screen */}
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