import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FounderCard from "../components/FounderCard";
import { founders } from "../data/founders";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        
        {/*} Welcome Section */}
        <section class="welcome-section">
          <h2>Welcome to Project Breakpoint</h2>
          <p>
            We're dedicated to creating inclusive tennis opportunities for all.
            Explore our mission, meet our team, and discover how you can get
            involved in our community programs.
          </p>
        </section>


        {/*} Mission Section */}
        <section
          class="mission-section"
          style={{
            background: `url(${"/photos/img1.jpg"}) center/cover no-repeat`,
          }}
        >
          <div class="mission-content">
            <h2>Our Mission</h2>
            <p>
              Breaking down barriers through tennis, we foster a welcoming
              community that celebrates diversity and empowers individuals of
              all ages, abilities, and backgrounds.
            </p>
          </div>
        </section>


        {/*} Founders Section */}
        <div class="founders-section">
          <div class="founders-title">Our Founders</div>
          <div class="founders-container">
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

        {/*} Subscribe Section */}
        <div class="subscribe-section">
          <h3>Stay Updated on Our Programs</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;