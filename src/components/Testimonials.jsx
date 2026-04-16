import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: '"This site felt like a warm hug."',
    author: 'Sarah, 22',
    avatar: '👩‍🦰'
  },
  {
    quote: '"Better than scrolling alone at 2AM."',
    author: 'Mike, 24',
    avatar: '👨‍🦱'
  },
  {
    quote: '"Yoga + talking helped me reset."',
    author: 'Jamie, 21',
    avatar: '👩'
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
          <p className="section-subtitle">Hear from our community</p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card glass-card">
            <span className="testimonial-avatar">
              {testimonials[activeIndex].avatar}
            </span>
            <blockquote className="testimonial-quote">
              {testimonials[activeIndex].quote}
            </blockquote>
            <cite className="testimonial-author">
              — {testimonials[activeIndex].author}
            </cite>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-static glass-card">
              <span className="testimonial-avatar">{testimonial.avatar}</span>
              <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
              <cite className="testimonial-author">— {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}