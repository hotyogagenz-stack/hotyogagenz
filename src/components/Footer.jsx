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
            <p className="footer-tagline">Your safe Gen Z wellness space</p>
            <div className="social-links">
              <a href="#instagram" className="social-link">📷 Instagram</a>
              <a href="#support" className="social-link">💜 Support</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#press">Press</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#safety">Safety</a>
              <a href="#community">Community</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} June Flint. All rights reserved.</p>
          <p className="footer-note">Made with 💜 for Gen Z</p>
        </div>
      </div>
    </footer>
  );
}
