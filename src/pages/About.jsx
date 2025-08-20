import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function About() {
  // Volunteer popup state
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    message: ''
  });
  const [isRegistrationSubmitting, setIsRegistrationSubmitting] = useState(false);
  const [registrationSubmitStatus, setRegistrationSubmitStatus] = useState(null);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setIsRegistrationSubmitting(true);
    setRegistrationSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registrationForm.name,
          email: registrationForm.email,
          subject: 'Fullerton Volunteer Registration',
          inquiryType: 'volunteer',
          message: `
Phone: ${registrationForm.phone}
Experience Level: ${registrationForm.experience}
Message: ${registrationForm.message}
          `.trim()
        }),
      });

      if (response.ok) {
        setRegistrationSubmitStatus('success');
        setRegistrationForm({
          name: '',
          email: '',
          phone: '',
          experience: 'beginner',
          message: ''
        });
        setTimeout(() => {
          setShowRegistrationPopup(false);
          setRegistrationSubmitStatus(null);
        }, 2000);
      } else {
        setRegistrationSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting registration form:', error);
      setRegistrationSubmitStatus('error');
    } finally {
      setIsRegistrationSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - About</title>
        <meta name="description" content="Learn about Project Breakpoint, a tennis non-profit providing free tennis coaching, equipment, and a welcoming environment for low-income youth in the Fullerton area. Discover our story, mission, and vision." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Project Breakpoint
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering youth through tennis, one serve at a time. Learn about our story, mission, and vision,
              and discover how we're making tennis accessible for all.
            </p>
            
            {/* Impact Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-700/10 p-3 rounded-full">
                    <svg className="h-8 w-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">200+</h3>
                <p className="text-gray-600 font-medium">Kids Served</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-700/10 p-3 rounded-full">
                    <svg className="h-8 w-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">5+</h3>
                <p className="text-gray-600 font-medium">Schools Partnered</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-700/10 p-3 rounded-full">
                    <svg className="h-8 w-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Free Programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="/ClinicPictures/AboutUs0.jpg"
                  alt="Project Breakpoint coaches youth tennis at local schools in Fullerton"
                  loading="lazy"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Project Breakpoint was founded by a group of college students passionate about making tennis accessible to all.
                  We believe that tennis has the power to build confidence, resilience, and community — and we are committed
                  to sharing that experience with youth from every background.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a simple idea has grown into a movement to break down barriers and create opportunities
                  for young people to discover their potential through the sport we love.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We have already coached at multiple elementary schools and are currently coaching weekly at a high school in San Diego, helping students of all ages experience the joy and benefits of tennis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We aim to break down barriers and share the joy of tennis with youth from all backgrounds.
                  Our mission is to create inclusive, fun, and supportive spaces where kids can grow both on and off the court.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By providing coaching, equipment, and a welcoming environment, we give low-income kids the opportunity
                  to learn tennis and develop life skills that will serve them well beyond the court.
                </p>
              </div>
              <div className="relative group order-1 lg:order-2">
                <img
                  src="/ClinicPictures/AboutUs1.JPEG"
                  alt="Free tennis coaching for low-income youth in Fullerton"
                  loading="lazy"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="/ClinicPictures/AboutUs2.JPEG"
                  alt="Kids learning tennis through Project Breakpoint's non-profit programs in Fullerton"
                  loading="lazy"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where every child—regardless of income, location, or experience—has the opportunity
                  to learn, grow, and thrive through tennis. We hope to expand our reach nationally and develop future leaders
                  who give back to their communities through sport.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through tennis, we're building a community of confident, resilient young people who understand the value
                  of teamwork, perseverance, and giving back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-green-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🎾</div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-300">Teaching Life Skills</h3>
                <p className="text-gray-300 leading-relaxed">Through tennis, we teach confidence, resilience, and teamwork</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-300">Fostering Inclusivity</h3>
                <p className="text-gray-300 leading-relaxed">Creating welcoming spaces for youth from all backgrounds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-300">Building Partnerships</h3>
                <p className="text-gray-300 leading-relaxed">Working with schools and community centers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-300">Supporting Wellness</h3>
                <p className="text-gray-300 leading-relaxed">Promoting mental and physical health through sport</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join us in making tennis accessible to every child. Whether you want to volunteer, donate, or enroll your child, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowRegistrationPopup(true)}
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Volunteer With Us
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

      {/* Registration Popup */}
      {showRegistrationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Volunteer Registration
              </h3>
              <p className="text-gray-600 mb-6">
                Join our Fullerton volunteer program! We'll mentor you in coaching tennis to youth.
              </p>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="regName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="regName"
                      value={registrationForm.name}
                      onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="regEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="regEmail"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="regPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="regPhone"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="regExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Tennis Experience Level
                  </label>
                  <select
                    id="regExperience"
                    value={registrationForm.experience}
                    onChange={(e) => setRegistrationForm({...registrationForm, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="none">No Experience</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="regMessage" className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to volunteer? *
                  </label>
                  <textarea
                    id="regMessage"
                    value={registrationForm.message}
                    onChange={(e) => setRegistrationForm({...registrationForm, message: e.target.value})}
                    placeholder="Tell us about your interest in volunteering..."
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationPopup(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isRegistrationSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRegistrationSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </form>

              {registrationSubmitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  ✅ Thank you! We'll contact you soon about volunteering opportunities.
                </div>
              )}
              {registrationSubmitStatus === 'error' && (
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

export default About;