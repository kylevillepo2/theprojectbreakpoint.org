import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { MissionSection } from "../components/MissionSection";
import FounderCard from "../components/FounderCard";
import { founders } from "../data/founders";
import SubscribeSection from "../components/shared/SubscribeSection";

export default function Home() {
  return (
    <div className="bp-home">
      <Helmet>
        <title>Project Breakpoint | Free Youth Tennis &amp; Mentorship</title>
        <meta
          name="description"
          content="Student-led university chapters bringing free tennis coaching, equipment, and mentorship to youth. UC Irvine is active; UC San Diego is launching soon."
        />
      </Helmet>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <MissionSection />
        <section className="impact-band" id="impact" aria-label="Our impact">
          <div className="bp-container impact-grid">
            <div>
              <strong>200+</strong>
              <span>kids served</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>free programs</span>
            </div>
            <p>
              More chances to play.
              <br />
              <b>Fewer barriers to getting started.</b>
            </p>
          </div>
        </section>
        <section id="mission" className="bp-section bp-container mission-grid">
          <div>
            <p className="eyebrow">OUR MISSION</p>
            <h2>
              A place on the court.
              <br />A community in your corner.
            </h2>
          </div>
          <div>
            <p className="section-intro">
              Every child deserves the chance to discover tennis, regardless of
              family income.
            </p>
            <p>
              Project Breakpoint brings university students and local families
              together through free tennis programs. Our volunteers teach the
              game, encourage young players, and help make equipment accessible.
            </p>
            <Link className="text-link" to="/about">
              Get to know Project Breakpoint <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <section id="programs" className="program-section bp-section">
          <div className="bp-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FOR CHILDREN &amp; FAMILIES</p>
                <h2>Room to learn. Space to grow.</h2>
              </div>
              <p>
                From learning a swing to finding someone who believes in you,
                the experience goes beyond the score.
              </p>
            </div>
            <div className="program-grid">
              {[
                [
                  "01",
                  "Learn the game",
                  "Free tennis instruction and practice with student volunteers who share their love of the sport.",
                ],
                [
                  "02",
                  "Get the support",
                  "Access to tennis equipment, encouragement, and mentorship to help young players build confidence.",
                ],
                [
                  "03",
                  "Find your community",
                  "Healthy activity and a welcoming place to learn new skills, play together, and belong.",
                ],
              ].map(([n, title, copy]) => (
                <article key={n}>
                  <span className="program-number">{n}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="clinic-notice">
              <div>
                <h3>Ready to join a program?</h3>
                <p>
                  New clinic dates are coming soon. Contact us about local
                  opportunities and what your child will need.
                </p>
              </div>
              <Link className="bp-button" to="/contact">
                Ask About a Program <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
        <section id="chapters" className="bp-section bp-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR CHAPTERS</p>
              <h2>
                Campus energy.
                <br />
                Local connections.
              </h2>
            </div>
            <p>
              University students organize local programs, mentor young players,
              coordinate equipment, and build relationships with nearby
              communities.
            </p>
          </div>
          <div className="chapter-grid">
            <article className="chapter-card" id="uci">
              <div className="chapter-top">
                <span className="campus-mark">UCI</span>
                <span className="status-label">Active Chapter</span>
              </div>
              <h3>UC Irvine</h3>
              <p>
                Our established student chapter brings free tennis coaching and
                volunteer mentorship to local youth in Orange County.
              </p>
              <Link className="text-link" to="/contact">
                Ask About UCI Programs <span aria-hidden="true">↗</span>
              </Link>
            </article>
            <article className="chapter-card chapter-coming" id="ucsd">
              <div className="chapter-top">
                <span className="campus-mark">UCSD</span>
                <span className="status-label">Launching Soon</span>
              </div>
              <h3>UC San Diego</h3>
              <p>
                A UCSD student team is forming to bring Project Breakpoint to
                the San Diego community. Help shape the chapter from the start.
              </p>
              <Link className="text-link" to="/chapters">
                Join the Launch Team <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
          <div className="chapter-invite">
            <p>Your campus could be part of the story.</p>
            <Link className="text-link" to="/chapters">
              Bring Project Breakpoint to Your Campus{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <section className="community-section">
          <div className="bp-container community-grid">
            <figure>
              <img
                src="/images/community.jpg"
                width="1000"
                height="1000"
                loading="lazy"
                alt="Project Breakpoint collage showing a coach helping a child hold a racket and guiding group practice."
              />
            </figure>
            <div>
              <p className="eyebrow">MOMENTS THAT MATTER</p>
              <h2>
                It starts with
                <br />
                showing up.
              </h2>
              <p className="section-intro">
                A coach beside you. A racket in your hand. A chance to try
                again.
              </p>
              <p>
                These moments from Project Breakpoint programs show what our
                work looks like: students sharing their time, children
                practicing new skills, and tennis bringing people together.
              </p>
              <Link className="text-link" to="/chapters">
                Be part of the next chapter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
        <section id="support" className="bp-section bp-container">
          <div className="support-panel">
            <div>
              <p className="eyebrow">HELP KEEP TENNIS ACCESSIBLE</p>
              <h2>
                Give more children
                <br />a chance to play.
              </h2>
              <p>
                Your support helps provide tennis equipment, free programs, and
                mentorship. Together, we can make it easier for children to get
                on the court.
              </p>
            </div>
            <div className="support-actions">
              <Link className="bp-button button-lime" to="/donate">
                Support Our Mission <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/contact">
                Talk to us about equipment or partnerships →
              </Link>
            </div>
          </div>
        </section>
        <section id="team" className="bp-section bp-container team-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PEOPLE BEHIND THE PROGRAM</p>
              <h2>Students who give back.</h2>
            </div>
            <p>
              Meet the leaders bringing their experience in tennis, coaching,
              and mentorship to Project Breakpoint.
            </p>
          </div>
          <div className="team-grid">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </section>
        <section className="closing-section">
          <div className="bp-container">
            <p className="eyebrow">LET’S GET ON THE COURT</p>
            <h2>There’s a place for you here.</h2>
            <div className="button-row">
              <a className="bp-button" href="#programs">
                Find a Program <span aria-hidden="true">↗</span>
              </a>
              <Link className="text-link" to="/chapters">
                Volunteer with a chapter →
              </Link>
              <Link className="text-link" to="/donate">
                Support the mission →
              </Link>
            </div>
          </div>
        </section>
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}
