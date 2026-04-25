import React from 'react';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="community-page">
            <div className="page-header">
              <h1>Our Community</h1>
              <p className="lead">
                Connect with like-minded individuals on a shared wellness journey. Find support, 
                share experiences, and grow together in a safe, nurturing environment.
              </p>
            </div>

            <section className="content-section">
              <h2>Welcome to the June Flint Community</h2>
              <div className="section-content">
                <p>
                  The June Flint community is a safe, supportive space where you can share experiences, 
                  ask questions, and support others on their wellness journey. Here, you'll connect with 
                  people who understand your path and share your commitment to holistic well-being.
                </p>
                <p>
                  Our community is built on principles of respect, authenticity, and mutual support. 
                  Whether you're just beginning your wellness journey or have years of experience, 
                  you'll find a welcoming space to learn, share, and grow.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Talk Space</h2>
              <div className="section-content">
                <p>
                  Our dedicated Talk Space feature enables meaningful conversations with community members. 
                  Share your thoughts, seek advice, or simply listen and learn from others' experiences.
                </p>
              </div>
              <div className="feature-highlight">
                <div className="highlight-content">
                  <h3>Join the Conversation</h3>
                  <p>
                    Talk Space is organized into themed discussions including:
                  </p>
                  <ul>
                    <li>Yoga practice and techniques</li>
                    <li>Meditation and mindfulness</li>
                    <li>Mental health and emotional well-being</li>
                    <li>Wellness tips and resources</li>
                    <li>General community support</li>
                  </ul>
                </div>
                <Link to="/talk-space" className="btn btn-primary">Enter Talk Space</Link>
              </div>
            </section>

            <section className="content-section">
              <h2>Community Guidelines</h2>
              <div className="section-content">
                <p>
                  We're committed to maintaining a positive, supportive environment. Our community 
                  operates under these core principles:
                </p>
              </div>
              <div className="guidelines-grid">
                <div className="guideline-card">
                  <div className="guideline-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="9" cy="9" r="1" fill="currentColor"/>
                      <circle cx="15" cy="9" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3>Respect & Kindness</h3>
                  <p>Treat all members with respect, empathy, and kindness</p>
                </div>
                <div className="guideline-card">
                  <div className="guideline-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Share Experiences</h3>
                  <p>Share personal experiences, not medical advice or professional recommendations</p>
                </div>
                <div className="guideline-card">
                  <div className="guideline-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3>Confidentiality</h3>
                  <p>Respect others' privacy—do not share personal stories outside the community</p>
                </div>
                <div className="guideline-card">
                  <div className="guideline-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Non-Judgmental Support</h3>
                  <p>Support others without judgment, criticism, or negativity</p>
                </div>
                <div className="guideline-card">
                  <div className="guideline-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Report Concerns</h3>
                  <p>Report inappropriate behavior to maintain community safety</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Community Benefits</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <h3>Peer Support</h3>
                  <p>Connect with others who understand your wellness journey</p>
                </div>
                <div className="benefit-item">
                  <h3>Shared Learning</h3>
                  <p>Gain insights from diverse perspectives and experiences</p>
                </div>
                <div className="benefit-item">
                  <h3>Accountability</h3>
                  <p>Stay motivated with community encouragement</p>
                </div>
                <div className="benefit-item">
                  <h3>Resource Sharing</h3>
                  <p>Discover new wellness practices and tools</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Get Started Today</h2>
              <div className="section-content">
                <p>
                  Join our growing community of wellness seekers. Create your free account to participate 
                  in discussions, access exclusive content, and connect with others on similar paths.
                </p>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/join" className="btn btn-primary">Join Our Community</Link>
              <Link to="/talk-space" className="btn btn-secondary">Visit Talk Space</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
