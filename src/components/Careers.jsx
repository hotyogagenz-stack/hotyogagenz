import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="careers-page">
            <div className="page-header">
              <h1>Careers at June Flint</h1>
              <p className="lead">
                Join our dedicated team in making holistic wellness accessible to individuals worldwide. 
                Explore meaningful career opportunities where your work directly impacts lives.
              </p>
            </div>

            <section className="content-section">
              <h2>Why Choose June Flint?</h2>
              <div className="section-content">
                <p>
                  At June Flint, we're committed to creating positive change in the wellness industry. 
                  We offer a supportive, flexible, and innovative work environment where every team member's 
                  contributions directly enhance the well-being of our community.
                </p>
              </div>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Remote-First Culture</h3>
                  <p>Work from anywhere with flexible hours that suit your lifestyle</p>
                </div>
                <div className="benefit-card">
                  <h3>Health & Wellness Benefits</h3>
                  <p>Comprehensive health coverage and wellness allowances</p>
                </div>
                <div className="benefit-card">
                  <h3>Professional Development</h3>
                  <p>Continuous learning opportunities and career growth support</p>
                </div>
                <div className="benefit-card">
                  <h3>Collaborative Environment</h3>
                  <p>Join an inclusive, supportive team passionate about making a difference</p>
                </div>
                <div className="benefit-card">
                  <h3>Meaningful Impact</h3>
                  <p>Contribute to work that genuinely improves people's lives</p>
                </div>
                <div className="benefit-card">
                  <h3>Work-Life Balance</h3>
                  <p>Respect for personal time and sustainable work practices</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Current Opportunities</h2>
              <div className="section-content">
                <p>
                  We continuously seek talented individuals who share our passion for wellness. 
                  While we don't have specific openings at this moment, we're always interested in 
                  connecting with potential team members.
                </p>
              </div>
              <div className="positions-list">
                <h3>Roles We're Interested In:</h3>
                <ul className="positions-grid">
                  <li className="position-item">
                    <strong>Wellness Content Creators</strong>
                    <span>Develop engaging wellness content and educational materials</span>
                  </li>
                  <li className="position-item">
                    <strong>Certified Yoga Instructors</strong>
                    <span>Lead virtual and in-person yoga sessions</span>
                  </li>
                  <li className="position-item">
                    <strong>Mental Health Writers</strong>
                    <span>Create evidence-based mental health content</span>
                  </li>
                  <li className="position-item">
                    <strong>Community Managers</strong>
                    <span>Foster supportive online community engagement</span>
                  </li>
                  <li className="position-item">
                    <strong>Full-Stack Developers</strong>
                    <span>Build and maintain our wellness platform</span>
                  </li>
                  <li className="position-item">
                    <strong>UX/UI Designers</strong>
                    <span>Design intuitive, accessible user experiences</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Hiring Process</h2>
              <div className="section-content">
                <ol className="process-steps">
                  <li>
                    <strong>Application Review</strong>
                    <span>Submit your resume and a brief introduction about your passion for wellness</span>
                  </li>
                  <li>
                    <strong>Initial Conversation</strong>
                    <span>Meet with our team to discuss your experience and aspirations</span>
                  </li>
                  <li>
                    <strong>Skills Assessment</strong>
                    <span>Role-specific tasks or presentations to evaluate your abilities</span>
                  </li>
                  <li>
                    <strong>Team Interview</strong>
                    <span>Connect with future colleagues to ensure cultural fit</span>
                  </li>
                  <li>
                    <strong>Welcome Aboard</strong>
                    <span>Join our team and begin making a difference</span>
                  </li>
                </ol>
              </div>
            </section>

            <section className="content-section">
              <h2>How to Apply</h2>
              <div className="section-content">
                <p>
                  We welcome applications from passionate individuals who want to contribute to our mission. 
                  Even if there are no current openings, we encourage you to reach out—we're always looking 
                  for exceptional talent to join our team.
                </p>
                <p>
                  Please send your resume, portfolio (if applicable), and a brief introduction to:
                </p>
                <div className="contact-email">
                  <a href="mailto:careers@juneflint.com">careers@juneflint.com</a>
                </div>
                <p className="application-tip">
                  In your introduction, tell us why you're passionate about wellness and how you can 
                  contribute to our mission of making wellness accessible to all.
                </p>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
              <Link to="/about" className="btn btn-secondary">Learn About Our Mission</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
