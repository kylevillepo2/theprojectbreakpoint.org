import React, { useState } from "react";

function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Thank you for subscribing! You’re on our updates list.");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="subscribe-section">
      <h2>Stay Updated on Our Programs</h2>
      <form onSubmit={handleSubmit}>
        <div className="subscribe-field"><label htmlFor="subscribe-email">Email address</label><input
          id="subscribe-email" autoComplete="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        /></div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && (
        <p role="status" style={{
          marginTop: '10px',
          color: status.includes('Thank you') ? '#245641' : '#b42318',
          fontSize: '0.9rem'
        }}>
          {status}
        </p>
      )}
    </div>
  );
}

export default SubscribeSection;
