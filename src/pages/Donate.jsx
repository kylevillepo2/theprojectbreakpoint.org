import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [
    { value: 25, label: '$25', description: 'Provides tennis equipment for one child' },
    { value: 50, label: '$50', description: 'Supports one month of coaching for a child' },
    { value: 100, label: '$100', description: 'Funds a complete tennis program session' }
  ];

  const handleVenmoDonation = (amount) => {
    const venmoUrl = `https://venmo.com/projectbreakpoint?txn=pay&amount=${amount}&note=Donation%20to%20Project%20Breakpoint%20-%20Tennis%20for%20Youth`;
    window.open(venmoUrl, '_blank');
  };

  const handleCustomDonation = () => {
    if (customAmount && parseFloat(customAmount) > 0) {
      handleVenmoDonation(parseFloat(customAmount));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Donate | Project Breakpoint</title>
        <meta name="description" content="Support Project Breakpoint's mission to provide free tennis programs for underserved youth. Your donation helps break down barriers and create opportunities through tennis." />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-6 tracking-tight">
              Support Our{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Your donation helps us provide free tennis programs, equipment, and mentorship 
              to underserved youth in Fullerton and beyond.
            </p>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 text-center mb-12">
              Your Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">200+ Kids Served</h3>
                <p className="text-gray-600">Youth from underserved communities have participated in our programs</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">100% Free Programs</h3>
                <p className="text-gray-600">Every child participates at no cost, thanks to generous donors like you</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Growing Community</h3>
                <p className="text-gray-600">Expanding to new locations and reaching more children every year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">
                Make a Donation
              </h2>
              <p className="text-xl text-gray-600">
                Choose an amount that works for you. Every dollar makes a difference!
              </p>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {presetAmounts.map((amount) => (
                <div
                  key={amount.value}
                  className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedAmount === amount.value
                      ? 'border-green-500 shadow-lg'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedAmount(amount.value)}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      {amount.label}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {amount.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVenmoDonation(amount.value);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Donate with Venmo
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Custom Amount
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your donation amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="0.00"
                      min="1"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={handleCustomDonation}
                  disabled={!customAmount || parseFloat(customAmount) <= 0}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                  Donate with Venmo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Venmo Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-700">Secure Donations via Venmo</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We use Venmo for secure, instant donations. Your payment information is protected, 
                and you'll receive a confirmation immediately.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Venmo Handle */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Venmo Handle</h4>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-3xl font-bold text-blue-600">@projectbreakpoint</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Search for us on Venmo</p>
                </div>
                
                {/* QR Code */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Scan QR Code</h4>
                  <div className="flex justify-center">
                                                <img
                              src="/VenmoQR.JPG"
                              alt="Venmo QR Code"
                              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg shadow-md"
                            />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Scan with your phone's camera</p>
                </div>
              </div>
              

            </div>
          </div>
        </section>

        {/* What Your Donation Funds */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              What Your Donation Funds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl mb-4">🎾</div>
                  <h3 className="text-xl font-semibold mb-2">Tennis Equipment</h3>
                  <p className="text-green-100">Rackets, balls, nets, and safety gear for all participants</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h3 className="text-xl font-semibold mb-2">Professional Coaching</h3>
                  <p className="text-green-100">Qualified tennis instructors and mentorship programs</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl mb-4">🏫</div>
                  <h3 className="text-xl font-semibold mb-2">Program Expansion</h3>
                  <p className="text-green-100">Growing to new schools and communities</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl mb-4">🚌</div>
                  <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                  <p className="text-green-100">Helping kids get to and from tennis programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 text-center mb-12">
              Stories of Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      "Thanks to Project Breakpoint, my son discovered his love for tennis. 
                      The coaches are amazing and he's gained so much confidence."
                    </p>
                    <div className="text-sm text-gray-600">- Maria, Parent</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      "Volunteering with Project Breakpoint has been incredibly rewarding. 
                      Seeing kids develop their skills and confidence is priceless."
                    </p>
                    <div className="text-sm text-gray-600">- David, Volunteer Coach</div>
                  </div>
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

export default Donate;
