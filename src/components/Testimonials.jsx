import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: '"After months of feeling overwhelmed, I finally found a space where I could breathe. The combination of gentle yoga and someone truly listening changed everything for me."',
    author: 'Priya, 26',
    avatar: 'P',
    role: 'Software Developer'
  },
  {
    quote: '"I was skeptical at first, but the practitioners here genuinely care. Each session leaves me feeling more centered and ready to face challenges."',
    author: 'Arjun, 31',
    avatar: 'A',
    role: 'Marketing Lead'
  },
  {
    quote: '"The holistic approach helped me manage my anxiety in ways I never expected. I learned that asking for help is a strength, not a weakness."',
    author: 'Meera, 24',
    avatar: 'M',
    role: 'Graduate Student'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Stories</h2>
          <p className="section-subtitle">Hear from people who found their path to wellness</p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-card-inner glass-card">
              <span className="testimonial-avatar">
                {testimonials[activeIndex].avatar}
              </span>
              <blockquote className="testimonial-quote">
                {testimonials[activeIndex].quote}
              </blockquote>
              <div className="testimonial-author-info">
                <cite className="testimonial-author">
                  {testimonials[activeIndex].author}
                </cite>
                <span className="testimonial-role">
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-static">
              <div className="testimonial-card-inner glass-card">
                <span className="testimonial-avatar">{testimonial.avatar}</span>
                <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
                <div className="testimonial-author-info">
                  <cite className="testimonial-author">{testimonial.author}</cite>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}