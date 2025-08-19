import React from "react";
import { Link } from "react-router-dom";

export function MissionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/ClinicPictures/MissionBackground.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-emerald-900/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission Content */}
          <div className="text-white space-y-8">
                         {/* Mission Statement */}
             <div className="space-y-6">
               <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-lg">Breaking Barriers Through Tennis</h1>
               <p className="text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed font-medium drop-shadow-md">
                 We provide free tennis instruction and mentorship to underserved youth, creating pathways to college
                 scholarships and lifelong success.
               </p>
             </div>

                         {/* Statistics */}
             <div className="grid grid-cols-2 gap-6 py-8">
               <div className="text-center p-6 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                 <div className="text-4xl lg:text-5xl font-bold text-emerald-300 drop-shadow-md">200+</div>
                 <div className="text-lg text-white font-medium drop-shadow-sm">Kids Served</div>
               </div>
               <div className="text-center p-6 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                 <div className="text-4xl lg:text-5xl font-bold text-emerald-300 drop-shadow-md">100%</div>
                 <div className="text-lg text-white font-medium drop-shadow-sm">Free Programs</div>
               </div>
             </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/events" 
                onClick={() => window.scrollTo(0, 0)}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Join Our Program
              </Link>
              <Link 
                to="/donate" 
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white/10 backdrop-blur-sm border-2 border-emerald-400 text-white hover:bg-emerald-400 hover:text-black font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Support Our Mission
              </Link>
            </div>
          </div>

                     {/* Right Column - Values Cards */}
           <div className="space-y-6">
             <div className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 transform hover:scale-105 rounded-lg border p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                     />
                   </svg>
                 </div>
                 <div className="text-white">
                   <h3 className="text-2xl font-bold mb-3 text-emerald-200 drop-shadow-md">Accessibility</h3>
                   <p className="text-lg text-white leading-relaxed drop-shadow-sm">
                     Free programs ensuring every child has access to quality tennis instruction regardless of economic
                     background.
                   </p>
                 </div>
               </div>
             </div>

                         <div className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 transform hover:scale-105 rounded-lg border p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                     />
                   </svg>
                 </div>
                 <div className="text-white">
                   <h3 className="text-2xl font-bold mb-3 text-emerald-200 drop-shadow-md">Excellence</h3>
                   <p className="text-lg text-white leading-relaxed drop-shadow-sm">
                     Professional coaching and mentorship that develops both athletic skills and character for lifelong
                     success.
                   </p>
                 </div>
               </div>
             </div>

                         <div className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 transform hover:scale-105 rounded-lg border p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                     />
                   </svg>
                 </div>
                 <div className="text-white">
                   <h3 className="text-2xl font-bold mb-3 text-emerald-200 drop-shadow-md">Community</h3>
                   <p className="text-lg text-white leading-relaxed drop-shadow-sm">
                     Building strong relationships and support networks that extend far beyond the tennis court.
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
