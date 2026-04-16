import React from 'react';

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-container">
        <div className="trust-items">
          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <span className="trust-text">10,000+ healing moments started</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <span className="trust-text">Anonymous safe space</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 4.69l-1.06-.08a5.5 5.5 0 0 0-7.78 7.78l1.06.08L12 19.33l8.72-.98a5.5 5.5 0 0 0 7.78-7.78L12 4.61z"/>
              </svg>
            </div>
            <span className="trust-text">Made for Gen Z minds</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <span className="trust-text">Judgment-free support</span>
          </div>
        </div>
      </div>
    </section>
  );
}