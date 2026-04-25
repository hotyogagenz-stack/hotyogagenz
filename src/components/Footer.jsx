import React from 'react';
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from './animations';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-wave"></div>
      <div className="footer-container container">
        {/* Main Footer Content */}
        <StaggerContainer className="footer-grid">
          {/* Brand Column */}
          <StaggerItem>
            <div className="footer-brand">
              <FadeUp>
                <div className="footer-logo">
                  <span className="logo-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="logo-text">June Flint</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="footer-tagline">
                  Your trusted partner in holistic wellness. Empowering generations through 
                  mindfulness, healing, and authentic wellness guidance.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="footer-contact">
                  <a href="mailto:hello@juneflint.com" className="contact-link">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C15.3951 13.5963 18 11.2684 18 8V6C18 5.44772 18.4477 5 19 5C19.5523 5 20 5.44772 20 6V8C20 11.597 16.418 15.596 12 15.596C7.582 15.596 4 11.597 4 8V6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6V8L12 12.75L18 8V6C18 5.44772 18.4477 5 19 5C19.5523 5 20 5.44772 20 6V8C20 11.2684 17.3951 13.5963 14 13.5963C13.6049 13.5963 13.2187 13.4793 12.89 13.26L3 8Z" fill="currentColor"/>
                    </svg>
                    hello@juneflint.com
                  </a>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="footer-social">
                  <h4>Connect With Us</h4>
                  <div className="social-links">
                    <a href="https://instagram.com/juneflint" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Instagram">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                      </svg>
                      <span className="social-label">Instagram</span>
                    </a>
                    <a href="https://twitter.com/juneflint" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Twitter">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M22 4.01c-.77.35-1.6.58-2.47.69.88-.55 1.57-1.41 1.89-2.44-.83.5-1.75.86-2.72 1.06-.78-.84-1.89-1.37-3.12-1.37-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.98-.84-.04-1.63-.44-2.15-1.08-.55.92-.86 1.99-.86 3.13 0 1.49.76 2.81 1.91 3.58-.71-.02-1.37-.22-1.95-.53v.05c0 2.08 1.48 3.81 3.44 4.2-.36.1-.74.14-1.13.14-.28 0-.54-.03-.8-.08.55 1.71 2.14 2.96 4.02 2.99-1.47 1.16-3.33 1.85-5.34 1.85-.35 0-.69-.02-1.03-.07 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19-.01-.37-.01-.56.84-.61 1.56-1.36 2.14-2.23z" fill="currentColor"/>
                      </svg>
                      <span className="social-label">Twitter</span>
                    </a>
                    <a href="https://youtube.com/@juneflint" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Subscribe to our YouTube channel">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M22.54 6.42a2.268 2.268 0 0 0-1.52-1.71C19.4 4 12 4 12 4s-7.4 0-9.02.68A2.268 2.268 0 0 0 1.46 6.42C1.2 7.21 1 8.67 1 12s.2 4.79.46 5.58a2.268 2.268 0 0 0 1.52 1.71c1.62.68 9.02.68 9.02.68s7.4 0 9.02-.68a2.268 2.268 0 0 0 1.52-1.71c.26-.79.46-2.36.46-5.58s-.2-4.79-.46-5.58z" fill="currentColor"/>
                        <path d="M9.55 15.57l5.94-3.39-5.94-3.39v6.78z" fill="var(--bg-primary)"/>
                      </svg>
                      <span className="social-label">YouTube</span>
                    </a>
                    <a href="https://tiktok.com/@juneflint" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on TikTok">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12.525.02c.55-.03 1.11.04 1.63.15.51.11 1.03.25 1.48.42.47.18.91.39 1.28.65l.08.14c.37.26.7.56 1.01.91.31.34.57.73.77 1.17.19.42.29.88.28 1.36v.08c-.03 1.43-.46 2.76-1.22 3.84-.79 1.13-1.91 1.96-3.19 2.38-.52.17-1.07.27-1.62.29-.55.02-1.1-.04-1.62-.15-.51-.11-1.03-.25-1.48-.42-.47-.18-.91-.39-1.28-.65l-.08-.14c-.37-.26-.7-.56-1.01-.91-.31-.34-.57-.73-.77-1.17-.19-.42-.29-.88-.28-1.36v-.08c.03-1.43.46-2.76 1.22-3.84.79-1.13 1.91-1.96 3.19-2.38.52-.17 1.07-.27 1.62-.29.45-.02.9.03 1.34.14.43.1.82.29 1.15.54.32.25.6.53.82.88.21.34.38.7.49 1.08.11.37.16.75.15 1.13v.13c-.01.52-.09 1.03-.25 1.51-.16.48-.41.91-.74 1.28-.33.36-.73.65-1.18.86-.45.21-.94.35-1.44.38-.5.03-1-.04-1.48-.21-.48-.16-.92-.4-1.31-.71-.39-.31-.74-.68-1.03-1.1-.29-.42-.53-.88-.73-1.37-.19-.48-.34-.99-.43-1.51-.08-.51-.1-1.03-.05-1.54.05-.51.17-1.01.35-1.48.18-.47.43-.91.73-1.31.3-.4.67-.75 1.08-1.04.41-.29.87-.51 1.35-.67.48-.16.98-.27 1.49-.32z" fill="currentColor"/>
                      </svg>
                      <span className="social-label">TikTok</span>
                    </a>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="footer-newsletter">
                  <h4>Stay Informed</h4>
                  <p>Subscribe to our newsletter for wellness insights, exclusive content, and community updates.</p>
                  <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                    <div className="newsletter-input-group">
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        aria-label="Email address for newsletter subscription"
                        required
                      />
                      <button type="submit" className="btn btn-primary">
                        <span>Subscribe</span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="2" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </FadeUp>
            </div>
          </StaggerItem>

          {/* Links Column */}
          <StaggerItem>
            <div className="footer-links">
              <FadeIn delay={0.15}>
                <div className="footer-col">
                  <h4>Company</h4>
                  <nav aria-label="Company information">
                    <Link to="/about">About Us</Link>
                    <Link to="/mission">Our Mission</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/press">Press & Media</Link>
                    <Link to="/blog">Blog</Link>
                  </nav>
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="footer-col">
                  <h4>Support</h4>
                  <nav aria-label="Support resources">
                    <Link to="/help">Help Center</Link>
                    <Link to="/faq">Frequently Asked Questions</Link>
                    <Link to="/safety">Safety & Privacy</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/contact">Contact Us</Link>
                  </nav>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="footer-col">
                  <h4>Resources</h4>
                  <nav aria-label="Wellness resources">
                    <Link to="/wellness-guide">Wellness Guide</Link>
                    <Link to="/yoga-tips">Yoga Tips</Link>
                    <Link to="/mindfulness">Mindfulness</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </nav>
                </div>
              </FadeIn>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Footer */}
        <FadeUp>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <p className="copyright">© {currentYear} June Flint. All rights reserved.</p>
                <div className="footer-legal-links">
                  <Link to="/terms">Terms of Service</Link>
                  <span className="separator">|</span>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
              <p className="footer-tagline-small">
                Empowering wellness journeys with mindfulness and authenticity
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
