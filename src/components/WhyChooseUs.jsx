import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem, HoverLift, ScaleIn } from './animations';
import Tilt3DCard from './Tilt3DCard';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V12L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Expert Guidance',
    desc: 'Certified wellness coaches with years of experience helping you navigate your personal journey with care and expertise.',
    color: '#a855f7',
    gradient: 'rgba(168, 85, 247, 0.15)'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Personalized Care',
    desc: 'Every journey is unique. Get tailored support and strategies designed specifically for your individual needs and goals.',
    color: '#f472b6',
    gradient: 'rgba(244, 114, 182, 0.15)'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Holistic Approach',
    desc: 'Address mind, body, and spirit together. Integrated practices that work in harmony for complete wellness.',
    color: '#34d399',
    gradient: 'rgba(52, 211, 153, 0.15)'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    title: '100% Private',
    desc: 'Your sanctuary of trust. End-to-end encryption and strict confidentiality protocols protect what matters most.',
    color: '#60a5fa',
    gradient: 'rgba(96, 165, 250, 0.15)'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 21L12 18L6.5 21L7.5 14L3 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
    title: 'Modern Platform',
    desc: 'Seamless digital experience designed for today\'s lifestyle. Access support anytime, anywhere, any device.',
    color: '#fbbf24',
    gradient: 'rgba(251, 191, 36, 0.15)'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20.1 14.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13C17.7699 3.67131 19.0078 5.40585 19 7.13C19 8.85431 17.7619 10.589 16 11.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Community Support',
    desc: 'Join a thriving community of like-minded individuals. Find strength in shared experiences and mutual encouragement.',
    color: '#f87171',
    gradient: 'rgba(248, 113, 113, 0.15)'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-bg-pattern"></div>
      <div className="section-header">
        <FadeUp>
          <span className="section-tag">Our Promise</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="section-title">Why Choose Us</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="section-subtitle">Distinguished by our commitment to exceptional wellness experiences</p>
        </FadeUp>
      </div>

      <StaggerContainer className="features-grid">
        {features.map((item, index) => (
          <StaggerItem key={index}>
            <Tilt3DCard maxRotation={6}>
              <HoverLift>
                <div 
                  className="feature-card" 
                  style={{ 
                    '--accent': item.color,
                    '--accent-gradient': item.gradient
                  }}
                >
                  <div className="feature-card-glow"></div>
                  <div className="feature-card-icon">
                    <ScaleIn delay={0.1}>
                      {item.icon}
                    </ScaleIn>
                  </div>
                  <div className="feature-card-content">
                    <h3 className="feature-card-title">{item.title}</h3>
                    <p className="feature-card-desc">{item.desc}</p>
                  </div>
                  <div className="feature-card-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </HoverLift>
            </Tilt3DCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
