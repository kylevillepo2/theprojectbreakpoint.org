import AccessibleDialog from "../components/AccessibleDialog";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

const chapters = [
  {
    school: "UC Irvine",
    shortName: "UCI",
    status: "Active Chapter",
    statusColor: "bg-emerald-500",
    description:
      "Our founding chapter, run by UCI students. We organize free tennis programs for local youth and lead the organization's volunteer coaching program.",
    highlights: ["Free Tennis Programs", "Volunteer Coaching", "Founding Team"],
    image: "/ClinicPictures/AboutUs2.JPEG",
  },
  {
    school: "UC San Diego",
    shortName: "UCSD",
    status: "Launching Soon",
    statusColor: "bg-amber-500",
    description:
      "Our newest chapter is getting off the ground at UCSD. We're looking for founding members who want to help bring free tennis coaching to San Diego youth.",
    highlights: ["Founding Members Wanted", "Coaching Opportunities", "Coming Soon"],
    image: "/ClinicPictures/AboutUs0.jpg",
  },
];

function Chapters() {
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    chapter: "UCI",
    role: "member",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openSignupPopup = (chapterShortName) => {
    setSignupForm((prev) => ({ ...prev, chapter: chapterShortName }));
    setSubmitStatus(null);
    setShowSignupPopup(true);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupForm.name,
          email: signupForm.email,
          subject: `Chapter Interest - ${signupForm.chapter}`,
          inquiryType: "chapter",
          message: `
Chapter: ${signupForm.chapter}
Phone: ${signupForm.phone}
Interested in: ${signupForm.role}
Message: ${signupForm.message}
          `.trim(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSignupForm({
          name: "",
          email: "",
          phone: "",
          chapter: signupForm.chapter,
          role: "member",
          message: "",
        });
        setTimeout(() => {
          setShowSignupPopup(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting chapter signup form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - Chapters</title>
        <meta
          name="description"
          content="Explore Project Breakpoint's student-run chapters at UC Irvine and UC San Diego, and learn how to join or start a chapter at your own school."
        />
      </Helmet>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-6 tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Chapters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Project Breakpoint is powered by student-run chapters at college campuses.
              Each chapter brings free tennis coaching and mentorship to youth in its local community.
            </p>
          </div>
        </section>

        {/* Chapters Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {chapters.map((chapter) => (
                <div
                  key={chapter.shortName}
                  className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <img
                      src={chapter.image}
                      alt="Project Breakpoint community program collage"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span
                      className={`absolute top-4 right-4 ${chapter.statusColor} text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md`}
                    >
                      {chapter.status}
                    </span>
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-green-700 mb-3">{chapter.school}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{chapter.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {chapter.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-100"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => openSignupPopup(chapter.shortName)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Join the {chapter.shortName} Chapter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start a Chapter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-6">
              Don't See Your School?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for passionate students to help bring Project Breakpoint to new campuses.
              Reach out and let's talk about starting a chapter at your school.
            </p>
            <button
              onClick={() => openSignupPopup("Other")}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start a Chapter
            </button>
          </div>
        </section>

        <SubscribeSection />
      </main>
      <Footer />

      {/* Chapter Signup Popup */}
      {showSignupPopup && (
        <AccessibleDialog label="Chapter interest form" onClose={() => setShowSignupPopup(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chapter Interest Form</h3>
              <p className="text-gray-600 mb-6">
                Tell us a bit about yourself and we'll follow up with next steps.
              </p>

              <form onSubmit={handleSignupSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="signupName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="signupName"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="signupEmail"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signupPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="signupPhone"
                    value={signupForm.phone}
                    onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="signupChapter" className="block text-sm font-medium text-gray-700 mb-1">
                    Chapter
                  </label>
                  <select
                    id="signupChapter"
                    value={signupForm.chapter}
                    onChange={(e) => setSignupForm({ ...signupForm, chapter: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="UCI">UC Irvine</option>
                    <option value="UCSD">UC San Diego</option>
                    <option value="Other">Other / My School Isn't Listed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="signupRole" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm Interested In
                  </label>
                  <select
                    id="signupRole"
                    value={signupForm.role}
                    onChange={(e) => setSignupForm({ ...signupForm, role: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="member">Joining as a Member</option>
                    <option value="coach">Coaching / Volunteering</option>
                    <option value="starting-chapter">Starting a New Chapter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="signupMessage" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell Us More
                  </label>
                  <textarea
                    id="signupMessage"
                    value={signupForm.message}
                    onChange={(e) => setSignupForm({ ...signupForm, message: e.target.value })}
                    placeholder="Anything else we should know?"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSignupPopup(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  ✅ Thank you! We'll be in touch about your chapter soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </AccessibleDialog>
      )}
    </div>
  );
}

export default Chapters;
