import React, { useState } from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem } from './animations';
import Tilt3DCard from './Tilt3DCard';
import GlassCard from './GlassCard';

const testimonials = [
  {
    quote: 'June Flint has redefined what therapeutic yoga means for professionals. After six months of consistent practice, my chronic lower back pain has resolved completely, and my stress management has transformed.',
    author: 'Dr. Sarah Chen',
    credentials: 'MD, Internal Medicine',
    role: 'Senior Physician, Metropolitan Health',
    rating: 5,
    location: 'New York, NY',
    duration: '6 months'
  },
  {
    quote: 'The precision of instruction and attention to anatomical detail is exceptional. As someone who travels frequently for work, the flexibility of their hybrid program has been invaluable to maintaining my practice.',
    author: 'Michael Torres',
    credentials: 'CFA, MBA',
    role: 'Managing Director',
    rating: 5,
    location: 'Chicago, IL',
    duration: '12 months'
  },
  {
    quote: 'What sets June Flint apart is their evidence-based approach combined with genuine care. My flexibility improved by 40% and I\'ve never felt more centered in both my personal and professional life.',
    author: 'Emily Richardson',
    credentials: 'PhD, Clinical Psychology',
    role: 'Director of Research',
    rating: 5,
    location: 'Boston, MA',
    duration: '9 months'
  }
];

const StarRating = ({ rating }) => (
  <div className="testimonial-rating" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const VerificationBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function Testimonials() {
  const [verifiedCount] = useState(2847);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <FadeInFromLeft>
            <span className="section-tag">
              <VerificationBadge /> Verified Experiences
            </span>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <h2 className="section-title">Professional Testimonials</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.2}>
            <p className="section-subtitle">
              Trusted by industry leaders and healthcare professionals. {verifiedCount.toLocaleString()}+ verified members have transformed their wellness journey.
            </p>
          </FadeInFromLeft>
        </div>

        <StaggerContainer className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Tilt3DCard maxRotation={6} enableGlow={true} glowIntensity={0.3}>
                <GlassCard className="testimonial-card glass-card" hover>
                  <div className="testimonial-card-inner">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
                    <div className="testimonial-author-info">
                      <div className="testimonial-author-group">
                        <cite className="testimonial-author">{testimonial.author}</cite>
                        <span className="testimonial-credentials">{testimonial.credentials}</span>
                      </div>
                      <span className="testimonial-role">{testimonial.role}</span>
                      <div className="testimonial-meta">
                        <span className="testimonial-location">{testimonial.location}</span>
                        <span className="testimonial-divider">•</span>
                        <span className="testimonial-duration">{testimonial.duration}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Tilt3DCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}