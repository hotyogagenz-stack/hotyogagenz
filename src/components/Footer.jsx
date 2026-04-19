import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon"></span>
              <span className="logo-text">JUNE FLINT</span>
            </div>
            <p className="footer-tagline">Your safe Gen Z wellness space. Explore mindfulness, healing, and authentic wellness guidance tailored for your journey.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="#support" className="social-link">Support</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#mission">Our Mission</a>
              <a href="#careers">Careers</a>
              <a href="#press">Press</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#faq">FAQ</a>
              <a href="#safety">Safety & Privacy</a>
              <a href="#community">Community</a>
              <a href="#contact-us">Contact Us</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#wellness-guide">Wellness Guide</a>
              <a href="#yoga-tips">Yoga Tips</a>
              <a href="#mindfulness">Mindfulness</a>
              <a href="#terms">Terms of Service</a>
              <a href="#privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-meta">
            <p>© {new Date().getFullYear()} June Flint. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
