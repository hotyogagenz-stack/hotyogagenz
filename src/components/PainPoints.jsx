import React from 'react';

const painPoints = [
  { emoji: '💔', title: 'Heartbreak', desc: 'Heal from the pain' },
  { emoji: '😵', title: 'Anxiety', desc: 'Find your calm' },
  { emoji: '😮‍💨', title: 'Stress', desc: 'Release the tension' },
  { emoji: '😔', title: 'Loneliness', desc: 'Connect with others' },
  { emoji: '💼', title: 'Career Pressure', desc: 'Navigate your path' },
  { emoji: '🌀', title: 'Overthinking', desc: 'Find clarity' }
];

export default function PainPoints() {
  return (
    <section className="pain-points-section" id="healing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">💪 What We Help With</h2>
          <p className="section-subtitle">Whatever you're carrying, don't carry it alone.</p>
        </div>

        <div className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-point-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="pain-emoji">{point.emoji}</span>
              <h3 className="pain-title">{point.title}</h3>
              <p className="pain-desc">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}