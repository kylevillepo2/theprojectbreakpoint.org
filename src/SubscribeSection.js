import React from 'react';

function SubscribeSection() {
  return (
    <div className="subscribe-section">
      <h3>Stay Updated on Our Programs</h3>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SubscribeSection;