import React from 'react';

const usp = [
  { icon: '✅', title: 'Wellness + Support Together', desc: 'All-in-one healing platform' },
  { icon: '✅', title: 'Gen Z Friendly Tone', desc: 'We speak your language' },
  { icon: '✅', title: 'No Clinical Vibes', desc: 'Warm, welcoming atmosphere' },
  { icon: '✅', title: 'Anonymous Safe Space', desc: 'Your privacy matters' },
  { icon: '✅', title: 'Aesthetic Experience', desc: 'Beautiful visual journey' }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">What makes June Flint different</p>
        </div>

        <div className="usp-grid">
          {usp.map((item, index) => (
            <div key={index} className="usp-card glass-card">
              <span className="usp-icon">{item.icon}</span>
              <h3 className="usp-title">{item.title}</h3>
              <p className="usp-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}