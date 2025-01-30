import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KevinWangImg from "./photos/KevinWang.jpg";
import KyleImg from "./photos/KylePhoto.PNG";
import ian from "./photos/ian.jpg";
import QuyenImg from "./photos/QuyenImg.jpg";
import ChrisImg from "./photos/chrisimg.jpg";
import ArjunImg from "./photos/arjun.png";
import SubscribeSection from "./SubscribeSection";

function Home() {
  return (
    <div>
      <Navbar />
      {/*} Main Content */}
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
        <section class="mission-section">
          <div class="mission-content">
            <h2>Our Mission</h2>
            <p>
              Breaking down barriers through tennis, we foster a welcoming
              community that celebrates diversity and empowers individuals of
              all ages, abilities, and backgrounds.
            </p>
          </div>
        </section>

        {/*} Founders Section (before the Mission Section now) */}
        <div class="founders-section">
          <div class="founders-title">Our Founders</div>
          <div class="founders-container">
            {/*} Founder 1 */}
            <div class="founder-card">
              <img src={KevinWangImg} alt="Photo of Kevin Wang" />
              <div class="founder-name">Kevin Wang</div>
              <div class="founder-role">
                President, Director of Business Development, Coach
              </div>
              <div class="founder-description">
                Kevin Wang is a sophomore at UC Irvine, majoring in
                Neurobiology. His passion for mentorship and community service
                began in high school when he contributed to the development of
                1must, a nonprofit organization dedicated to tutoring refugee
                students. Combining his love for tennis with his experience as a
                youth tennis coach, Kevin is excited to embark on his new
                journey with Project Breakpoint, where he aims to inspire others
                and make a meaningful impact through the sport he loves.
              </div>
            </div>

            {/*} Founder 2 */}
            <div class="founder-card">
              <img src={KyleImg} alt="Photo of Kyle Villeponteau" />
              <div class="founder-name">Kyle Villeponteau</div>
              <div class="founder-role">Vice-President, CTO</div>
              <div class="founder-description">
                Kyle Villeponteau is a sophomore at UC Santa Barbara studying
                Computer Science. His passion for tennis started as a little kid
                and continued throughout high school as he managed to rank top
                250 in his class of graduates. Beyond competition, Kyle's love
                for the sport deepened when he took on the role of a tennis
                instructor at Bay Club summer camp. Through Project Breakpoint,
                he aims to share his enthusiasm for tennis and mentorship,
                inspiring and empowering young children to discover the joy of
                the game.
              </div>
            </div>

            {/*} Founder 3 */}
            <div class="founder-card">
              <img src={ian} alt="Photo of Ian Lucchesi" />
              <div class="founder-name">Ian Lucchesi</div>
              <div class="founder-role">Secretary</div>
              <div class="founder-description">
                Ian Lucchesi is a sophomore at UC Irvine, majoring in
                Neurobiology. His desire for leadership and the opportunity to
                teach stems from his time in high school with the Big Brother
                Program, teaching incoming freshmen the ropes and contributing
                to their transition. Coming from a background of coaching kids
                in gymnastics, Ian is excited to make meaningful differences and
                spread joy through sports and fitness with Project Breakpoint.
              </div>
            </div>
          </div>

          {/*} Additional Founders Row (extra space is added via CSS margin) */}
          <div class="founders-container">
            {/*} Founder 4 */}
            <div class="founder-card">
              <img src={QuyenImg} alt="Photo of Quyen Ho" />
              <div class="founder-name">Quyen Ho</div>
              <div class="founder-role">Director of Outreach</div>
              <div class="founder-description">
                Quyen Ho is a second year at UCI majoring in Biological
                Sciences. Her passion for youth mentorship began in high school
                when she tutored students to help them develop their writing
                skills. Being part of the tennis team in high school provided
                her with a community she hopes other students can experience as
                well, which is why she is excited to join Project Breakpoint.
                She hopes to give youth in her community an opportunity to be
                physically active in a way that’s fun and engaging.
              </div>
            </div>

            {/*} Founder 5 */}
            <div class="founder-card">
              <img src={ArjunImg} alt="Photo of Arjun" />
              <div class="founder-name">Arjun</div>
              <div class="founder-role">Head of Marketing</div>
              <div class="founder-description">
                Arjun is a sophomore at UC Irvine majoring in Applied
                Mathematics. His passion for leadership stems from his
                experience as president of his middle and high school student
                government. With over 10 years of competitive tennis experience,
                four years of assistant coaching at the City of Irvine during
                the summers, and service as varsity tennis captain in high
                school, Arjun is excited to share his love for the sport and
                help others find joy in the game.
              </div>
            </div>

            {/*} Founder 6 */}
            <div class="founder-card">
              <img src={ChrisImg} alt="Photo of Sara Lopez" />
              <div class="founder-name">Chris Li</div>
              <div class="founder-role">
                Director of Fundraising and Development
              </div>
              <div class="founder-description">
                Christopher Li is a sophomore at UC Irvine majoring in
                Informatics with a specialization in Human-Computer Interaction.
                His passion for leadership and youth mentorship stemmed from his
                past coaching experience at numerous summer camps with the City
                of Irvine and volunteering with organizations such as ACEing
                Autism. With a love for the sport and watching bonds form within
                the youth he taught, he felt inspired to join Project
                Breakpoint, where he hopes he can continue giving back to the
                community.
              </div>
            </div>
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
