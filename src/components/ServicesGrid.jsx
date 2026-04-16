import React from 'react';

const services = [
  { 
    title: 'Life Listener', 
    desc: 'Just vent. No judgement.',
    color: '#c084fc'
  },
  { 
    title: 'Heart Healing', 
    desc: 'Emotional reset + journaling.',
    color: '#f472b6'
  },
  { 
    title: 'Hot Yoga', 
    desc: 'Move stuck energy.',
    color: '#fb923c'
  },
  { 
    title: 'Imotti Guide', 
    desc: 'Mood-based support.',
    color: '#60a5fa'
  },
  { 
    title: 'Growth Resources', 
    desc: 'Blogs + healing content.',
    color: '#34d399'
  },
  { 
    title: 'Anonymous Chat', 
    desc: 'Safe & private.',
    color: '#a78bfa'
  }
];

export default function ServicesGrid() {
  return (
    <section className="services-section" id="talk-space">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🛠️ Core Services</h2>
          <p className="section-subtitle">Your toolkit for healing and growth</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass-card"
              style={{ '--accent-color': service.color }}
            >
              <span className="service-emoji">{service.emoji}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}