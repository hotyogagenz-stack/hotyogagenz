import React from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem } from './animations';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container container">
        <StaggerContainer className="footer-grid">
          <StaggerItem>
            <div className="footer-brand">
              <FadeUp>
                <div className="footer-logo">
                  <span className="logo-icon"></span>
                  <span className="logo-text">JUNE FLINT</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="footer-tagline">Your safe Gen Z wellness space. Explore mindfulness, healing, and authentic wellness guidance tailored for your journey.</p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                  <a href="#support" className="social-link">Support</a>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
                  <label className="sr-only" htmlFor="footer-email">Subscribe to updates</label>
                  <div className="newsletter-row">
                    <input id="footer-email" type="email" placeholder="Your email" aria-label="Your email" />
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                  </div>
                </form>
              </FadeUp>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="footer-links">
              <FadeInFromLeft delay={0.1}>
                <div className="footer-col">
                  <h4>Company</h4>
                  <a href="#about">About Us</a>
                  <a href="#mission">Our Mission</a>
                  <a href="#careers">Careers</a>
                  <a href="#press">Press</a>
                  <a href="#blog">Blog</a>
                </div>
              </FadeInFromLeft>
              <FadeInFromLeft delay={0.2}>
                <div className="footer-col">
                  <h4>Support</h4>
                  <a href="#help">Help Center</a>
                  <a href="#faq">FAQ</a>
                  <a href="#safety">Safety & Privacy</a>
                  <a href="#community">Community</a>
                  <a href="#contact-us">Contact Us</a>
                </div>
              </FadeInFromLeft>
              <FadeInFromLeft delay={0.3}>
                <div className="footer-col">
                  <h4>Resources</h4>
                  <a href="#wellness-guide">Wellness Guide</a>
                  <a href="#yoga-tips">Yoga Tips</a>
                  <a href="#mindfulness">Mindfulness</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#privacy-policy">Privacy Policy</a>
                </div>
              </FadeInFromLeft>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="footer-bottom">
          <FadeUp>
            <div className="footer-meta">
              <p>© {new Date().getFullYear()} June Flint. All rights reserved.</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </footer>
  );
}
