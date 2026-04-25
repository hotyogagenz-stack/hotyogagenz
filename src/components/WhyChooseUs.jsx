import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './animations';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certified Expertise',
    desc: 'IAYT-certified instructors with 10+ years average experience in therapeutic yoga.',
    stat: '10+'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
    title: 'Personalized Programs',
    desc: 'Custom wellness roadmaps tailored to your body type and goals.',
    stat: '5K+'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Holistic Integration',
    desc: 'Breathwork, asana, and meditation unified for complete transformation.',
    stat: '360°'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Enterprise Privacy',
    desc: 'HIPAA-compliant, zero-knowledge encryption. SOC 2 Type II certified.',
    stat: '100%'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Omnichannel Sync',
    desc: 'Seamless progress across web, iOS, and Android devices.',
    stat: '99.9%'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Professional Network',
    desc: '15,000+ practitioners in exclusive circles and mastermind groups.',
    stat: '15K+'
  }
];

const trustBadges = [
  { label: 'IAYT Certified', desc: 'International Association of Yoga Therapists' },
  { label: 'SOC 2 Type II', desc: 'Security & compliance audited' },
  { label: 'HIPAA Compliant', desc: 'Healthcare privacy standards' },
  { label: '4.9/5 Rating', desc: '2,847 verified members' }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-bg-pattern"></div>
      
      <FadeUp>
        <div className="trust-badge-bar">
          <div className="trust-badge-container">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="trust-badge-item">
                <div className="trust-badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="trust-badge-content">
                  <span className="trust-badge-label">{badge.label}</span>
                  <span className="trust-badge-desc">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="section-header">
        <FadeUp>
          <span className="section-tag">Our Commitment</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="section-title">Why Choose Us</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="section-subtitle">Expert-led wellness with uncompromising standards and measurable results.</p>
        </FadeUp>
      </div>

      <StaggerContainer className="features-grid">
        {features.map((item, index) => (
          <StaggerItem key={index}>
            <div className="feature-card-sharp">
              <div className="feature-card-sharp-inner">
                <div className="feature-card-sharp-stat">{item.stat}</div>
                <div className="feature-card-sharp-icon">{item.icon}</div>
                <div className="feature-card-sharp-content">
                  <h3 className="feature-card-sharp-title">{item.title}</h3>
                  <p className="feature-card-sharp-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      
      <FadeUp delay={0.3}>
        <div className="guarantee-bar">
          <div className="guarantee-content">
            <div className="guarantee-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p className="guarantee-text">30-Day Transformation Guarantee — Full refund if you don't feel stronger and more centered.</p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
