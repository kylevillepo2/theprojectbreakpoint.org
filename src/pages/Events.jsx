import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Partnership popup state
  const [showPartnershipPopup, setShowPartnershipPopup] = useState(false);
  const [partnershipForm, setPartnershipForm] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    partnershipType: 'event-hosting',
    message: ''
  });
  const [isPartnershipSubmitting, setIsPartnershipSubmitting] = useState(false);
  const [partnershipSubmitStatus, setPartnershipSubmitStatus] = useState(null);

  // Event categories
  const categories = [
    { id: 'all', name: 'All Events', icon: '🎾' },
    { id: 'clinics', name: 'Tennis Clinics', icon: '🏆' },
    { id: 'tournaments', name: 'Tournaments', icon: '🏅' },
    { id: 'volunteer', name: 'Volunteer Events', icon: '🤝' },
    { id: 'fundraiser', name: 'Fundraisers', icon: '💚' }
  ];

  // Sample events data (you can replace with real data later)
  const events = [
    {
      id: 1,
      title: "Volunteer Training Session",
      category: "volunteer",
      date: "September 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Fullerton Community Center",
      description: "Join our volunteer training session to learn how to coach tennis and mentor youth. No tennis experience required!",
      status: "upcoming",
      image: "/ClinicPictures/AboutUs2.JPEG",
      registration: "Open",
      capacity: "20 spots",
      highlights: ["Training Provided", "No Experience Needed", "Make Impact"]
    }
  ];

  // Filter events based on selected category
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  // Countdown timer for featured event
  useEffect(() => {
    const eventTime = new Date(2025, 9, 1, 9, 0); // October 1, 2025, 9:00 AM
    const updateTimer = () => {
      const now = new Date();
      const diff = eventTime - now;
      if (diff <= 0) {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({days, hours, minutes, seconds});
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'past': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'ongoing': return 'Ongoing';
      case 'past': return 'Past';
      default: return 'Unknown';
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Email Notification Signup',
          email: email,
          subject: 'Fullerton Launch Notification Request',
          inquiryType: 'enrollment',
          message: `User signed up for email notifications about the Fullerton launch. Email: ${email}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => {
          setShowPopup(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnershipSubmit = async (e) => {
    e.preventDefault();
    setIsPartnershipSubmitting(true);
    setPartnershipSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: partnershipForm.name,
          email: partnershipForm.email,
          subject: `Partnership Inquiry: ${partnershipForm.partnershipType}`,
          inquiryType: 'partnership',
          message: `
Organization: ${partnershipForm.organization}
Phone: ${partnershipForm.phone}
Partnership Type: ${partnershipForm.partnershipType}
Message: ${partnershipForm.message}
          `.trim()
        }),
      });

      if (response.ok) {
        setPartnershipSubmitStatus('success');
        setPartnershipForm({
          name: '',
          email: '',
          organization: '',
          phone: '',
          partnershipType: 'event-hosting',
          message: ''
        });
        setTimeout(() => {
          setShowPartnershipPopup(false);
          setPartnershipSubmitStatus(null);
        }, 2000);
      } else {
        setPartnershipSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting partnership form:', error);
      setPartnershipSubmitStatus('error');
    } finally {
      setIsPartnershipSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Events | Project Breakpoint</title>
        <meta name="description" content="Join Project Breakpoint's tennis events, clinics, and tournaments. Free tennis programs for youth in Fullerton and San Diego. Volunteer opportunities and community events." />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-6 tracking-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover upcoming tennis clinics, tournaments, volunteer opportunities, and community events. 
              All programs are free and open to youth of all skill levels.
            </p>
          </div>
        </section>

        {/* Featured Event Countdown */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              🎾 Fullerton Launch Coming Soon!
            </h2>
            <p className="text-xl mb-8 text-green-100">
              We're expanding to Fullerton this October! Join us for our inaugural tennis clinics.
            </p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-sm text-green-100">Days</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm text-green-100">Hours</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm text-green-100">Minutes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm text-green-100">Seconds</div>
              </div>
            </div>

            <button 
              onClick={() => setShowPopup(true)}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Notified When Registration Opens
            </button>
          </div>
        </section>

        {/* Event Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎾</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Events Found</h3>
                <p className="text-gray-600">Check back soon for upcoming events!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-green-100">
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                          {getStatusText(event.status)}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {categories.find(cat => cat.id === event.category)?.icon} {categories.find(cat => cat.id === event.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      {/* Event Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Registration Info */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold">{event.registration}</span> • {event.capacity}
                        </div>
                      </div>

                                             {/* Action Button */}
                       <a 
                         href="https://forms.google.com/your-form-link-here" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                       >
                         {event.registration === 'Open' ? 'Register Now' : 'Learn More'}
                       </a>
              </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Interested in partnering with us or hosting a tennis event in your community? 
              We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPartnershipPopup(true)}
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </button>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo(0, 0)}
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <SubscribeSection />
      </main>
      <Footer />

      {/* Email Notification Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stay Updated!
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your email to stay updated on our programs and be notified when registration opens for our Fullerton tennis clinics.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Notify Me'}
                  </button>
                </div>
              </form>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  ✅ Thank you! You'll be notified when registration opens.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Partnership Popup */}
      {showPartnershipPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Partner With Us
              </h3>
              <p className="text-gray-600 mb-6">
                Tell us about your organization and how you'd like to partner with Project Breakpoint.
              </p>
              
              <form onSubmit={handlePartnershipSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={partnershipForm.name}
                      onChange={(e) => setPartnershipForm({...partnershipForm, name: e.target.value})}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={partnershipForm.email}
                      onChange={(e) => setPartnershipForm({...partnershipForm, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={partnershipForm.organization}
                      onChange={(e) => setPartnershipForm({...partnershipForm, organization: e.target.value})}
                      placeholder="Your organization name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={partnershipForm.phone}
                      onChange={(e) => setPartnershipForm({...partnershipForm, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                    Partnership Type *
                  </label>
                  <select
                    id="partnershipType"
                    value={partnershipForm.partnershipType}
                    onChange={(e) => setPartnershipForm({...partnershipForm, partnershipType: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="event-hosting">Event Hosting</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="volunteer-program">Volunteer Program</option>
                    <option value="equipment-donation">Equipment Donation</option>
                    <option value="facility-partnership">Facility Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your partnership idea *
                  </label>
                  <textarea
                    id="message"
                    value={partnershipForm.message}
                    onChange={(e) => setPartnershipForm({...partnershipForm, message: e.target.value})}
                    placeholder="Describe how you'd like to partner with us..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPartnershipPopup(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isPartnershipSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPartnershipSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
                  </button>
                </div>
              </form>

              {partnershipSubmitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  ✅ Thank you! We'll get back to you soon about your partnership request.
                </div>
              )}
              {partnershipSubmitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;