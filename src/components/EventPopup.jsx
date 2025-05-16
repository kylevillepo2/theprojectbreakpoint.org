import React, { useEffect, useState } from "react";

const EventPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (!sessionStorage.getItem("eventPopupShown")) {
      setShow(true);
      sessionStorage.setItem("eventPopupShown", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeBtn} onClick={() => setShow(false)}>&times;</button>
        <div style={{fontSize: 48, marginBottom: 12}}>🎾</div>
        <h2 style={{color: '#22343a', marginBottom: 8}}>Exciting Event Coming Up!</h2>
        <p style={{color: '#22343a', fontSize: '1.1em', marginBottom: 24}}>
          Join us for our next tennis event at Fullerton Tennis Center!<br/>
          <strong>May 24th, 12:00 - 1:00 PM</strong>
        </p>
        <a href="/events" style={styles.ctaBtn}>Learn More & RSVP</a>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.45)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    padding: '36px 32px 28px 32px',
    maxWidth: 350,
    width: '90%',
    textAlign: 'center',
    position: 'relative',
    animation: 'popIn 0.4s cubic-bezier(.68,-0.55,.27,1.55)',
  },
  closeBtn: {
    position: 'absolute',
    top: 12,
    right: 16,
    background: 'none',
    border: 'none',
    fontSize: 28,
    color: '#22343a',
    cursor: 'pointer',
  },
  ctaBtn: {
    display: 'inline-block',
    background: '#d6f36b',
    color: '#22343a',
    fontWeight: 700,
    fontSize: '1.1em',
    borderRadius: 10,
    padding: '14px 32px',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    transition: 'background 0.2s, color 0.2s',
  },
};

export default EventPopup;
