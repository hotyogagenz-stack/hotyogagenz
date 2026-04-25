import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="about-page">
            <div className="page-header">
              <h1>About June Flint</h1>
              <p className="lead">
                A trusted wellness platform dedicated to empowering individuals through mindfulness, 
                healing, and authentic wellness guidance for the modern generation.
              </p>
            </div>

            <section className="content-section">
              <h2>Our Story</h2>
              <div className="section-content">
                <p>
                  June Flint was established with a profound belief: holistic wellness should be accessible, 
                  inclusive, and authentic for everyone. In today's fast-paced world, younger generations face 
                  unique challenges in maintaining balance, mental clarity, and emotional well-being.
                </p>
                <p>
                  Our platform bridges ancient yoga traditions with contemporary mental health practices, 
                  creating a comprehensive wellness experience specifically designed for Gen Z and 
                  individuals of all ages seeking authentic self-improvement.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Mission</h2>
              <div className="section-content">
                <p>
                  To empower individuals on their wellness journey by providing accessible tools, expert guidance, 
                  and a supportive community that fosters mental clarity, physical strength, and emotional resilience.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Vision</h2>
              <div className="section-content">
                <p>
                  We envision a world where mental health support and yoga practice are universally accessible, 
                  regardless of background, experience level, or financial circumstances. A world where current 
                  and future generations thrive with the tools necessary for balanced, mindful living.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Core Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Inclusivity</h3>
                  <p>Welcoming all identities, backgrounds, and abilities without exception</p>
                </div>
                <div className="value-card">
                  <h3>Authenticity</h3>
                  <p>Providing genuine guidance rooted in real wellness practices</p>
                </div>
                <div className="value-card">
                  <h3>Accessibility</h3>
                  <p>Offering free resources and affordable options for everyone</p>
                </div>
                <div className="value-card">
                  <h3>Empowerment</h3>
                  <p>Equipping you with tools to take control of your wellness</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>What We Offer</h2>
              <div className="section-content">
                <ul className="feature-list">
                  <li>
                    <strong>Personalized Yoga & Meditation</strong>
                    <span>Custom sessions tailored to your experience level and goals</span>
                  </li>
                  <li>
                    <strong>Mental Health Resources</strong>
                    <span>Comprehensive support for emotional well-being</span>
                  </li>
                  <li>
                    <strong>Community Connection</strong>
                    <span>Engage through Talk Space and shared wellness journeys</span>
                  </li>
                  <li>
                    <strong>Educational Content</strong>
                    <span>In-depth guides and articles on wellness topics</span>
                  </li>
                  <li>
                    <strong>Progress Tracking</strong>
                    <span>Personalized dashboards to monitor your growth</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/join" className="btn btn-primary">Join Our Community</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
