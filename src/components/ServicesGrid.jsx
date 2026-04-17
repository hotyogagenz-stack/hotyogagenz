import React from 'react';

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
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">Your complete toolkit for healing, growth, and self-discovery</p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-item"
              style={{ '--accent-color': service.color }}
            >
              <div className="service-circle"></div>
              <div className="service-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}