import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="help-center-page">
            <div className="page-header">
              <h1>Help Center</h1>
              <p className="lead">
                Comprehensive support resources to assist you on your wellness journey.
              </p>
            </div>

            <section className="content-section">
              <h2>How Can We Assist You?</h2>
              <div className="section-content">
                <p>
                  We're committed to providing exceptional support. Browse our resources below or 
                  contact our team directly for personalized assistance.
                </p>
              </div>
              <div className="help-categories">
                <Link to="/faq" className="help-card">
                  <div className="help-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2158 8.06353C14.6728 8.60553 14.9216 9.29152 14.92 10C14.92 12 12 13 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3>Frequently Asked Questions</h3>
                  <p>Quick answers to common questions about our platform and services</p>
                  <span className="help-link">Browse FAQs</span>
                </Link>
                <Link to="/contact" className="help-card">
                  <div className="help-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Contact Support</h3>
                  <p>Reach out to our dedicated support team for personalized assistance</p>
                  <span className="help-link">Get in Touch</span>
                </Link>
                <Link to="/community" className="help-card">
                  <div className="help-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 3.13C17.7699 3.58268 19.0078 5.17805 19.0078 7.005C19.0078 8.83195 17.7699 10.4273 16 10.88" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Community Support</h3>
                  <p>Connect with fellow wellness seekers in our supportive community</p>
                  <span className="help-link">Join Community</span>
                </Link>
              </div>
            </section>

            <section className="content-section">
              <h2>Getting Started with June Flint</h2>
              <div className="section-content">
                <p>Follow these simple steps to begin your wellness journey:</p>
              </div>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <h3>Create Your Account</h3>
                  <p>Sign up for free to access personalized wellness features</p>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <h3>Complete Your Profile</h3>
                  <p>Tell us about your wellness goals and preferences</p>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <h3>Explore Resources</h3>
                  <p>Discover yoga sessions, meditations, and wellness guides</p>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <h3>Join the Community</h3>
                  <p>Connect with others in Talk Space and share experiences</p>
                </div>
                <div className="step-item">
                  <div className="step-number">5</div>
                  <h3>Track Your Progress</h3>
                  <p>Monitor your growth with personalized dashboard insights</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Common Topics</h2>
              <div className="topic-cards">
                <Link to="/yoga-tips" className="topic-card">
                  <h3>Yoga Practice</h3>
                  <p>Tips for beginners and advanced practitioners</p>
                </Link>
                <Link to="/mindfulness" className="topic-card">
                  <h3>Mindfulness</h3>
                  <p>Techniques for staying present and focused</p>
                </Link>
                <Link to="/wellness-guide" className="topic-card">
                  <h3>Wellness Basics</h3>
                  <p>Fundamentals of holistic health</p>
                </Link>
                <Link to="/safety" className="topic-card">
                  <h3>Privacy & Safety</h3>
                  <p>How we protect your information</p>
                </Link>
              </div>
            </section>

            <section className="content-section">
              <h2>Still Need Assistance?</h2>
              <div className="section-content">
                <p>
                  Can't find what you're looking for? Our customer support team is available to help. 
                  We typically respond within 24 hours during business days.
                </p>
                <div className="support-contact-box">
                  <h3>Contact Support</h3>
                  <p>Email us at <a href="mailto:support@juneflint.com">support@juneflint.com</a></p>
                  <p className="response-time">Average response time: 24 hours</p>
                </div>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/faq" className="btn btn-primary">View All FAQs</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Support</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
