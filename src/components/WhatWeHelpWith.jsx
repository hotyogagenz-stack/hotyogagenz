import React, { useState } from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

const helpTopics = [
  {
    category: 'Emotional Healing',
    title: 'Heartbreak',
    description:
      'Navigating the turbulent emotions of a breakup or loss can be overwhelming. We provide a supportive space to process your feelings, build resilience, and find a path toward healing and rediscovering yourself.',
  },
  {
    category: 'Mental Wellness',
    title: 'Anxiety',
    description:
      'Anxiety can feel like a constant storm. Learn practical techniques to calm your mind, manage anxious thoughts, and regain a sense of control, allowing you to find peace in your daily life.',
  },
  {
    category: 'Well-being',
    title: 'Stress',
    description:
      'The pressures of modern life can take a toll. We help you identify stressors, develop healthy coping mechanisms, and learn to release tension, so you can feel more balanced and less overwhelmed.',
  },
  {
    category: 'Community',
    title: 'Loneliness',
    description:
      'Feeling alone is a difficult experience. We offer a community and a safe space to connect with others, share your story, and build meaningful relationships that remind you that you are not alone.',
  },
  {
    category: 'Personal Growth',
    title: 'Career Pressure',
    description:
      'The weight of career expectations can be immense. We help you navigate your professional path, manage work-related stress, and align your career with your personal values for a more fulfilling life.',
  },
  {
    category: 'Mindfulness',
    title: 'Overthinking',
    description:
      'A racing mind can be exhausting. We guide you through mindfulness practices to break the cycle of overthinking, find mental clarity, and focus on the present moment with intention.',
  },
];

const HelpCard = ({ topic, isOpen, onClick }) => {
  return (
    <div className={`help-card ${isOpen ? 'open' : ''}`}>
      <button className="help-card-header" onClick={onClick}>
        <div className="help-card-content">
          <span className="help-card-category">{topic.category}</span>
          <h3 className="help-card-title">{topic.title}</h3>
        </div>
        <div className={`help-card-chevron ${isOpen ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <div className="help-card-description">
        <p>{topic.description}</p>
      </div>
    </div>
  );
};

export default function WhatWeHelpWith() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="what-we-help-with-section">
      <div className="container">
        <div className="section-header">
          <FadeInFromLeft>
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">Support</span>
              <span className="eyebrow-line"></span>
            </div>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <h2 className="section-title">What We Help With</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.2}>
            <p className="section-subtitle">
              Whatever you're carrying, don't carry it alone. 
              Our community is here to walk alongside you.
            </p>
          </FadeInFromLeft>
        </div>
        
        <StaggerContainer className="help-grid">
          {helpTopics.map((topic, index) => (
            <StaggerItem key={index}>
              <HoverLift>
                <HelpCard
                  key={index}
                  topic={topic}
                  isOpen={openIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="cta-row">
          <button className="cta-primary">
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <a href="#" className="cta-ghost">
            Learn about our approach
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
