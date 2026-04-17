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
          <div className="footer-content">
            <p className="footer-description">June Flint is dedicated to creating a safe, inclusive wellness space for Gen Z. We believe in authentic, holistic healing practices combined with modern guidance to support your unique wellness journey.</p>
            <p className="footer-secondary">Our platform connects you with trusted wellness experts, mindfulness resources, and a supportive community. Whether you're exploring yoga, seeking mental wellness support, or building healthy habits, we're here to guide you every step of the way.</p>
          </div>
          <div className="footer-meta">
            <p>© {new Date().getFullYear()} June Flint. All rights reserved.</p>
            <p className="footer-note">Designed with care for Gen Z wellness</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
