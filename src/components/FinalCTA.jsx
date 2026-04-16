import React from 'react';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="cta-glow-bg">
        <div className="glow-orb cta-orb-1"></div>
        <div className="glow-orb cta-orb-2"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">You don't need to have it all figured out.</h2>
          <p className="cta-subtitle">
            Take the first step. We're here with you.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-primary btn-cta">
              Start Talking 
            </button>
            <button className="btn-secondary btn-cta">
              Join Yoga Today 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}