import React from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

const testimonials = [
  {
    quote: '"Hot yoga at June Flint transformed my flexibility and stress levels. The instructors are incredibly supportive!"',
    author: 'Priya Sharma',
    avatar: 'P',
    role: 'Software Engineer'
  },
  {
    quote: '"The heated studio creates the perfect environment for deep practice. I look forward to every session."',
    author: 'Rahul Mehta',
    avatar: 'R',
    role: 'Marketing Director'
  },
  {
    quote: '"Best investment in my wellness journey. The community and instructors make every class special."',
    author: 'Anjali Patel',
    avatar: 'A',
    role: 'Entrepreneur'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <FadeInFromLeft>
            <h2 className="section-title">Real Stories</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <p className="section-subtitle">Hear from people who found their path to wellness</p>
          </FadeInFromLeft>
        </div>

        <StaggerContainer className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <HoverLift className="testimonial-card">
                <div className="testimonial-card-inner">
                  <span className="testimonial-avatar">{testimonial.avatar}</span>
                  <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
                  <div className="testimonial-author-info">
                    <cite className="testimonial-author">{testimonial.author}</cite>
                    <span className="testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}