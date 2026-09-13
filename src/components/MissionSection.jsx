import React from "react";
import { Link } from "react-router-dom";
export function MissionSection() {
  return (
    <section className="bp-hero" aria-labelledby="hero-title">
      <div className="bp-container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Breaking Barriers
            <br />
            Through <em>Tennis.</em>
          </h1>
          <p className="hero-description">
            University students bringing free tennis coaching, equipment, and
            mentorship to underserved youth through local campus chapters.
          </p>
          <div className="button-row">
            <a className="bp-button" href="#programs">
              Join a Program <span aria-hidden="true">↗</span>
            </a>
            <Link className="bp-button button-outline" to="/donate">
              Support Our Mission
            </Link>
          </div>
          <Link className="text-link hero-volunteer" to="/chapters">
            College student? Get involved <span aria-hidden="true">→</span>
          </Link>
          <div className="hero-chapters">
            <span>
              <b>UC Irvine</b> · Active
            </span>
            <span>
              <b>UC San Diego</b> · Launching soon
            </span>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src="/images/clinic-1400.jpg"
            srcSet="/images/clinic-700.jpg 700w, /images/clinic-1400.jpg 1400w"
            sizes="(max-width: 800px) 100vw, 50vw"
            width="1050"
            height="1400"
            fetchPriority="high"
            alt="A young player practices a forehand with a volunteer coach as children wait with their rackets."
          />
          <figcaption>
            <span>ON THE COURT</span> A little encouragement. A new possibility.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
