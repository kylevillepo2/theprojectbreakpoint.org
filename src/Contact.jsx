import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SubscribeSection from './SubscribeSection';
import { Helmet } from 'react-helmet'; // for the web browser tab to update

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet> 
        <title>Project Breakpoint - Contact</title>
      </Helmet>

      <Navbar />
      
      <main>
        <section className="contact-section">
          <h2>We'd Love to Hear from You!</h2>
          <div className="contact-info">
            Have questions, suggestions, or want to learn more about our programs?
            Reach out at:
            <br />
            <a className="email-link" href="mailto:proj.breakpoint@gmail.com">
              proj.breakpoint@gmail.com
            </a>
            <br />
            or message us at:
            <br />
            <span className="contact-phone">(858)-295-5270</span>
            <br />
            <span style={{ fontSize: '0.98em', color: '#666', display: 'block', marginTop: '8px' }}>
              <em>Please specify you are texting about Project Breakpoint in your message!</em>
            </span>
          </div>
        </section>

        <SubscribeSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;