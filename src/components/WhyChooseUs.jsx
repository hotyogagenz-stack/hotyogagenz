import React from 'react';

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Comprehensive Wellness Support',
    desc: 'An integrated platform combining holistic healing practices with modern wellness guidance tailored to your unique journey.',
    color: '#a855f7'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Gen Z Centric Approach',
    desc: 'Contemporary communication style that resonates with younger generations through authentic, relatable content.',
    color: '#c4b5fd'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Welcoming Environment',
    desc: 'A warm, non-clinical atmosphere designed for comfort and openness where you can truly be yourself.',
    color: '#fdba74'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Complete Confidentiality',
    desc: 'Your privacy and security are our paramount priorities, ensuring a safe space for honest exploration.',
    color: '#60a5fa'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 21L12 18L6.5 21L7.5 14L3 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Curated Aesthetic Experience',
    desc: 'A visually immersive journey designed to inspire calmness and tranquillity through mindful design.',
    color: '#d8b4fe'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <header className="section-header">
        <span className="section-tag">Our Promise</span>
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Distinguished by our commitment to exceptional wellness experiences</p>
      </header>

      <div className="features-timeline">
        <div className="timeline-line"></div>
        {features.map((item, index) => (
          <div 
            key={index} 
            className={`feature-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ '--accent': item.color }}
          >
            <div className="feature-dot">
              <span className="dot-inner">{item.icon}</span>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
