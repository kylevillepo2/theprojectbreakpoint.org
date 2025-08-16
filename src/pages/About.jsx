import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SubscribeSection from "../components/shared/SubscribeSection";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <title>Project Breakpoint - About</title>
        <meta name="description" content="Learn about Project Breakpoint, a tennis non-profit providing free tennis coaching, equipment, and a welcoming environment for low-income youth in the Fullerton area. Discover our story, mission, and vision." />
      </Helmet>
      <Navbar />
      <main>
        {/* Welcome Section (matching Home) */}
        <section className="welcome-section" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h1 style={{
            color: '#2e7d32',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            marginBottom: '32px',
            letterSpacing: 1
          }}>
            About Project Breakpoint
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#333',
            maxWidth: 900,
            margin: '0 auto',
            lineHeight: 1.3
          }}>
            Empowering youth through tennis, one serve at a time. Learn about our story, mission, and vision,<br />
            and discover how we're making tennis accessible for all.
          </p>
        </section>

        {/* Our Story Section - Image and Text Side by Side */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#fff'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <img
                src="/ClinicPictures/AboutUs0.jpg"
                alt="Project Breakpoint coaches youth tennis at local schools in Fullerton"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                }}
              />
            </div>
            <div>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '20px', 
                color: '#2e7d32',
                fontWeight: 'bold'
              }}>
                Our Story
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555',
                marginBottom: '20px'
              }}>
              Project Breakpoint was founded by a group of college students passionate about making tennis accessible to all.
              We believe that tennis has the power to build confidence, resilience, and community — and we are committed
              to sharing that experience with youth from every background.
            </p>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555'
              }}>
                What started as a simple idea has grown into a movement to break down barriers and create opportunities
                for young people to discover their potential through the sport we love.
              </p>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555'
              }}>
                We have already coached at multiple elementary schools and are currently coaching weekly at a high school in San Diego, helping students of all ages experience the joy and benefits of tennis.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section - Text and Image Side by Side (Reversed) */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#f8faf8'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '20px', 
                color: '#2e7d32',
                fontWeight: 'bold'
              }}>
                Our Mission
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555',
                marginBottom: '20px'
              }}>
              We aim to break down barriers and share the joy of tennis with youth from all backgrounds.
              Our mission is to create inclusive, fun, and supportive spaces where kids can grow both on and off the court.
            </p>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555'
              }}>
                By providing coaching, equipment, and a welcoming environment, we give low-income kids the opportunity
                to learn tennis and develop life skills that will serve them well beyond the court.
              </p>
            </div>
            <div>
              <img
                src="/ClinicPictures/AboutUs1.JPEG"
                alt="Free tennis coaching for low-income youth in Fullerton"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                }}
              />
            </div>
          </div>
        </section>

        {/* Our Vision Section - Image and Text Side by Side */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#fff'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <img
                src="/ClinicPictures/AboutUs2.JPEG"
                alt="Kids learning tennis through Project Breakpoint's non-profit programs in Fullerton"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                }}
              />
            </div>
            <div>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '20px', 
                color: '#2e7d32',
                fontWeight: 'bold'
              }}>
                Our Vision
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555',
                marginBottom: '20px'
              }}>
              We envision a future where every child—regardless of income, location, or experience—has the opportunity
              to learn, grow, and thrive through tennis. We hope to expand our reach nationally and develop future leaders
              who give back to their communities through sport.
            </p>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#555'
              }}>
                Through tennis, we're building a community of confident, resilient young people who understand the value
                of teamwork, perseverance, and giving back.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section - Centered with Bullet Points */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#263a44',
          color: '#fff',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '40px', 
              color: '#d6f36b',
              fontWeight: 'bold'
            }}>
              What We Do
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '40px'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎾</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d6f36b' }}>Teaching Life Skills</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Through tennis, we teach confidence, resilience, and teamwork</p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌱</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d6f36b' }}>Fostering Inclusivity</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Creating welcoming spaces for youth from all backgrounds</p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🤝</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d6f36b' }}>Building Partnerships</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Working with schools and community centers</p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧠</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d6f36b' }}>Supporting Wellness</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Promoting mental and physical health through sport</p>
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

export default About;