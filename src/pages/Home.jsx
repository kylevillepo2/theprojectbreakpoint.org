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
        {/* v0 Generated Mission Section */}
        <MissionSection />

        {/* Updated Founders Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                Meet Our Founders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our passionate team of student leaders and tennis enthusiasts dedicated to breaking barriers through tennis.
              </p>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;