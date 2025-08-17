import React from "react";

export function MissionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission Content */}
          <div className="text-white space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/PlayerPictures/logo.png"
                alt="Project Breakpoint Logo"
                className="w-96 h-auto"
              />
            </div>

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

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Involved
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Stats or Additional Content */}
          <div className="text-white space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent">200+</div>
                <div className="text-sm text-gray-300">Youth Served</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent">5</div>
                <div className="text-sm text-gray-300">Schools Partnered</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-300">Free Programs</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-300">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
