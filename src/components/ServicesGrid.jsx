import React from 'react';
import { FadeInFromLeft, StaggerContainer, StaggerItem } from './animations';
import GlassCard from './GlassCard';

const services = [
  { 
    id: 'listener',
    title: 'Life Listener', 
    desc: 'Just vent. No judgement. A safe space to share what\'s on your mind without fear.',
    color: '#c084fc'
  },
  { 
    id: 'healing',
    title: 'Heart Healing', 
    desc: 'Emotional reset through guided journaling and personalized reflections.',
    color: '#f472b6'
  },
  { 
    id: 'yoga',
    title: 'Hot Yoga', 
    desc: 'Move stuck energy through mindful movement in our heated studio.',
    color: '#fb923c'
  },
  { 
    id: 'imotti',
    title: 'Imotti Guide', 
    desc: 'Mood-based support that adapts to how you\'re feeling right now.',
    color: '#60a5fa'
  },
  { 
    id: 'resources',
    title: 'Growth Resources', 
    desc: 'Curated blogs, meditations, and healing content for your journey.',
    color: '#34d399'
  },
  { 
    id: 'chat',
    title: 'Anonymous Chat', 
    desc: 'Connect with listeners privately. Your identity stays protected.',
    color: '#a78bfa'
  }
];

export default function ServicesGrid() {
  return (
    <section className="services-section" id="talk-space">
      <div className="container">
        <div className="section-header">
          <FadeInFromLeft>
            <h2 className="section-title">Core Services</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <p className="section-subtitle">Your complete toolkit for healing, growth, and self-discovery</p>
          </FadeInFromLeft>
        </div>

        <StaggerContainer className="services-list" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <GlassCard className="service-item glass-card" hover blur={8}>
                <div 
                  className="service-item-inner"
                  style={{ '--accent-color': service.color }}
                >
                  <div className="service-circle"></div>
                  <div className="service-text">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
