import React from 'react';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="mission-page">
            <div className="page-header">
              <h1>Our Mission & Vision</h1>
              <p className="lead">
                Dedicated to making holistic wellness accessible, inclusive, and transformative for all.
              </p>
            </div>

            <section className="content-section">
              <h2>Our Mission</h2>
              <div className="section-content">
                <p>
                  At June Flint, we are committed to democratizing wellness by breaking down barriers to mental 
                  and physical well-being. We provide high-quality, free, and affordable wellness resources, 
                  evidence-based educational content, and a nurturing community environment where every individual 
                  can thrive.
                </p>
                <p>
                  Our mission extends beyond traditional yoga platforms—we integrate mindfulness practices, 
                  mental health support, and holistic wellness approaches to create a comprehensive pathway 
                  to personal growth and healing.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Vision</h2>
              <div className="section-content">
                <p>
                  We envision a future where mental health support and yoga practice are universally accessible, 
                  irrespective of background, experience level, or financial means. We aspire to create a world 
                  where current and future generations possess the tools, knowledge, and community support 
                  necessary for balanced, mindful, and fulfilling lives.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Guiding Principles</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Excellence</h3>
                  <p>Delivering the highest quality wellness content and experiences</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 3.13C17.7699 3.58268 19.0078 5.17805 19.0078 7.005C19.0078 8.83195 17.7699 10.4273 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Inclusivity</h3>
                  <p>Welcoming individuals of all backgrounds, identities, and abilities</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="9" cy="9" r="1" fill="currentColor"/>
                      <circle cx="15" cy="9" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3>Authenticity</h3>
                  <p>Providing genuine guidance rooted in real wellness practices</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Growth</h3>
                  <p>Fostering continuous personal development and transformation</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Commitment</h2>
              <div className="section-content">
                <ul className="feature-list">
                  <li>
                    <strong>Evidence-Based Practices</strong>
                    <span>All content is grounded in research and expert knowledge</span>
                  </li>
                  <li>
                    <strong>Community First Approach</strong>
                    <span>Building supportive connections that enhance wellness journeys</span>
                  </li>
                  <li>
                    <strong>Continuous Innovation</strong>
                    <span>Evolving our platform with the latest wellness insights</span>
                  </li>
                  <li>
                    <strong>Accessible Education</strong>
                    <span>Making wellness knowledge available to all, free of charge</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/join" className="btn btn-primary">Join Our Community</Link>
              <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
