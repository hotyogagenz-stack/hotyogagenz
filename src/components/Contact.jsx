import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="contact-page">
            <div className="page-header">
              <h1>Contact Us</h1>
              <p className="lead">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you. 
                Our team is here to assist you.
              </p>
            </div>

            <section className="content-section">
              <h2>Get in Touch</h2>
              <div className="section-content">
                <p>
                  We value your communication and strive to provide prompt, helpful responses. 
                  Please reach out using the appropriate contact method below.
                </p>
              </div>
              <div className="contact-methods">
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>General Inquiries</h3>
                  <p><a href="mailto:hello@juneflint.com">hello@juneflint.com</a></p>
                  <span className="contact-description">Questions about our platform, features, or services</span>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Press & Media</h3>
                  <p><a href="mailto:press@juneflint.com">press@juneflint.com</a></p>
                  <span className="contact-description">Media inquiries, interviews, and press requests</span>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Careers</h3>
                  <p><a href="mailto:careers@juneflint.com">careers@juneflint.com</a></p>
                  <span className="contact-description">Job opportunities and professional collaborations</span>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Support</h3>
                  <p><a href="mailto:support@juneflint.com">support@juneflint.com</a></p>
                  <span className="contact-description">Technical assistance and account support</span>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Response Time</h2>
              <div className="section-content">
                <div className="response-info">
                  <div className="response-item">
                    <h3>General Inquiries</h3>
                    <p>Within 24-48 business hours</p>
                  </div>
                  <div className="response-item">
                    <h3>Technical Support</h3>
                    <p>Within 12-24 hours</p>
                  </div>
                  <div className="response-item">
                    <h3>Press & Media</h3>
                    <p>Within 24 hours</p>
                  </div>
                  <div className="response-item">
                    <h3>Urgent Matters</h3>
                    <p>Indicate urgency in subject line for priority handling</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Connect With Us</h2>
              <div className="section-content">
                <p>
                  Stay connected with us on social media for daily wellness inspiration, 
                  community updates, and exclusive content.
                </p>
              </div>
              <div className="social-links-professional">
                <a href="https://instagram.com/juneflint" target="_blank" rel="noopener noreferrer" className="social-platform">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://twitter.com/juneflint" target="_blank" rel="noopener noreferrer" className="social-platform">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01c-.77.35-1.6.58-2.47.69.88-.55 1.57-1.41 1.89-2.44-.83.5-1.75.86-2.72 1.06-.78-.84-1.89-1.37-3.12-1.37-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.98-.84-.04-1.63-.44-2.15-1.08-.55.92-.86 1.99-.86 3.13 0 1.49.76 2.81 1.91 3.58-.71-.02-1.37-.22-1.95-.53v.05c0 2.08 1.48 3.81 3.44 4.2-.36.1-.74.14-1.13.14-.28 0-.54-.03-.8-.08.55 1.71 2.14 2.96 4.02 2.99-1.47 1.16-3.33 1.85-5.34 1.85-.35 0-.69-.02-1.03-.07 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19-.01-.37-.01-.56.84-.61 1.56-1.36 2.14-2.23z" fill="currentColor"/>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="https://youtube.com/@juneflint" target="_blank" rel="noopener noreferrer" className="social-platform">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.54 6.42a2.268 2.268 0 0 0-1.52-1.71C19.4 4 12 4 12 4s-7.4 0-9.02.68A2.268 2.268 0 0 0 1.46 6.42C1.2 7.21 1 8.67 1 12s.2 4.79.46 5.58a2.268 2.268 0 0 0 1.52 1.71c1.62.68 9.02.68 9.02.68s7.4 0 9.02-.68a2.268 2.268 0 0 0 1.52-1.71c.26-.79.46-2.36.46-5.58s-.2-4.79-.46-5.58z" fill="currentColor"/>
                    <path d="M9.55 15.57l5.94-3.39-5.94-3.39v6.78z" fill="var(--bg-primary)"/>
                  </svg>
                  <span>YouTube</span>
                </a>
                <a href="https://tiktok.com/@juneflint" target="_blank" rel="noopener noreferrer" className="social-platform">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c.55-.03 1.11.04 1.63.15.51.11 1.03.25 1.48.42.47.18.91.39 1.28.65l.08.14c.37.26.7.56 1.01.91.31.34.57.73.77 1.17.19.42.29.88.28 1.36v.08c-.03 1.43-.46 2.76-1.22 3.84-.79 1.13-1.91 1.96-3.19 2.38-.52.17-1.07.27-1.62.29-.55.02-1.1-.04-1.62-.15-.51-.11-1.03-.25-1.48-.42-.47-.18-.91-.39-1.28-.65l-.08-.14c-.37-.26-.7-.56-1.01-.91-.31-.34-.57-.73-.77-1.17-.19-.42-.29-.88-.28-1.36v-.08c.03-1.43.46-2.76 1.22-3.84.79-1.13 1.91-1.96 3.19-2.38.52-.17 1.07-.27 1.62-.29.45-.02.9.03 1.34.14.43.1.82.29 1.15.54.32.25.6.53.82.88.21.34.38.7.49 1.08.11.37.16.75.15 1.13v.13c-.01.52-.09 1.03-.25 1.51-.16.48-.41.91-.74 1.28-.33.36-.73.65-1.18.86-.45.21-.94.35-1.44.38-.5.03-1-.04-1.48-.21-.48-.16-.92-.4-1.31-.71-.39-.31-.74-.68-1.03-1.1-.29-.42-.53-.88-.73-1.37-.19-.48-.34-.99-.43-1.51-.08-.51-.1-1.03-.05-1.54.05-.51.17-1.01.35-1.48.18-.47.43-.91.73-1.31.3-.4.67-.75 1.08-1.04.41-.29.87-.51 1.35-.67.48-.16.98-.27 1.49-.32z" fill="currentColor"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/help" className="btn btn-primary">Visit Help Center</Link>
              <Link to="/about" className="btn btn-secondary">About Us</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
