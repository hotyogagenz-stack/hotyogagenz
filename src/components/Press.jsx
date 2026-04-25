import React from 'react';
import { Link } from 'react-router-dom';

export default function Press() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="press-page">
            <div className="page-header">
              <h1>Press & Media</h1>
              <p className="lead">
                June Flint in the media. For press inquiries, please contact our media team.
              </p>
            </div>

            <section className="content-section">
              <h2>Media Inquiries</h2>
              <div className="section-content">
                <p>
                  For media requests, interviews, speaking opportunities, or any press-related matters, 
                  please contact our media relations team. We're committed to providing timely and 
                  comprehensive support for journalists and content creators.
                </p>
                <div className="contact-highlight">
                  <p className="contact-email">
                    <a href="mailto:press@juneflint.com">press@juneflint.com</a>
                  </p>
                  <p className="contact-note">We respond to all media inquiries within 24 hours</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Media Kit</h2>
              <div className="section-content">
                <p>
                  Download our official media kit containing brand guidelines, high-resolution logos, 
                  company information, and executive bios. All materials are designed to ensure accurate 
                  and consistent representation of June Flint.
                </p>
                <div className="media-kit-actions">
                  <a href="#" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Download Media Kit (PDF)
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View Brand Guidelines
                  </a>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Press Releases</h2>
              <div className="press-releases">
                <article className="press-item">
                  <div className="press-header">
                    <h3>June Flint Launches Comprehensive Wellness Platform for Gen Z</h3>
                    <span className="press-date">March 2024</span>
                  </div>
                  <p>
                    June Flint announces the launch of an innovative wellness platform designed specifically 
                    for Gen Z, combining ancient yoga practices with modern mental health support. The platform 
                    offers free and premium resources to make wellness accessible to all.
                  </p>
                  <a href="#" className="read-more">Read Full Release</a>
                </article>
                <article className="press-item">
                  <div className="press-header">
                    <h3>Strategic Partnership with Leading Mental Health Organizations</h3>
                    <span className="press-date">January 2024</span>
                  </div>
                  <p>
                    June Flint partners with prominent mental health organizations to expand free resources 
                    and support for underserved communities, reinforcing our commitment to accessible wellness.
                  </p>
                  <a href="#" className="read-more">Read Full Release</a>
                </article>
                <article className="press-item">
                  <div className="press-header">
                    <h3>June Flint Reaches 100,000 Users Milestone</h3>
                    <span className="press-date">December 2023</span>
                  </div>
                  <p>
                    Celebrating 100,000 active users worldwide, June Flint continues to grow as a trusted 
                    wellness platform for individuals seeking mindfulness, healing, and community support.
                  </p>
                  <a href="#" className="read-more">Read Full Release</a>
                </article>
              </div>
            </section>

            <section className="content-section">
              <h2>Executive Team</h2>
              <div className="section-content">
                <p>
                  Our leadership team comprises experienced professionals in wellness, technology, and mental health.
                </p>
                <div className="team-grid">
                  <div className="team-member">
                    <div className="member-avatar">MF</div>
                    <h4>Maya Flores</h4>
                    <p className="member-role">Founder & CEO</p>
                    <p>Wellness entrepreneur with 10+ years in holistic health</p>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">JR</div>
                    <h4>James Rodriguez</h4>
                    <p className="member-role">Chief Technology Officer</p>
                    <p>Tech leader focused on accessible digital wellness solutions</p>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">SC</div>
                    <h4>Dr. Sarah Chen</h4>
                    <p className="member-role">Head of Wellness</p>
                    <p>Licensed psychologist and certified yoga instructor</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Speaking Engagements</h2>
              <div className="section-content">
                <p>
                  Our team is available for conferences, podcasts, and corporate wellness events. 
                  We speak on topics including:
                </p>
                <ul>
                  <li>Digital wellness and Gen Z mental health</li>
                  <li>Integrating yoga into modern lifestyle</li>
                  <li>Building supportive online communities</li>
                  <li>Accessible wellness for all</li>
                </ul>
                <p>
                  To request a speaker, please contact our press team with event details.
                </p>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/about" className="btn btn-primary">About June Flint</Link>
              <Link to="/contact" className="btn btn-secondary">General Contact</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
