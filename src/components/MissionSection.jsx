import React from "react";
import { Link } from "react-router-dom";

export function MissionSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ClinicPictures/MissionBackground.jpg"
          alt="Project Breakpoint tennis program with children on courts"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-12">
        <div className="flex justify-center items-center w-full">
          {/* Mission Content */}
          <div className="text-white space-y-8 px-8 lg:px-16 max-w-4xl">
            {/* Mission Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                To ensure that every child, regardless of income, receives quality coaching, 
                the right equipment, and a supportive community to discover tennis.
              </p>
              <p className="text-lg text-gray-300">
                We believe that tennis has the power to build confidence, resilience, and community 
                — and we are committed to sharing that experience with youth from every background.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-lg text-gray-200 font-semibold">Youth Served</div>
              </div>
              <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-lg text-gray-200 font-semibold">Free Programs</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
              <Link to="/events">
                <button 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 shadow-lg hover:shadow-xl"
                  aria-label="Get involved with Project Breakpoint programs"
                >
                  Get Involved
                </button>
              </Link>
              <Link to="/about">
                <button 
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl text-lg border-2 border-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl"
                  aria-label="Learn more about Project Breakpoint"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
