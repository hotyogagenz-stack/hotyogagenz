import React from 'react';
import { FadeInFromLeft, FadeRight } from './animations';

const yogaImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    alt: 'Yoga stretch pose'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    alt: 'Meditation session'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    alt: 'Group yoga class'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1575052814086-f385e31199b4?w=800&q=80',
    alt: 'Yoga stretch pose'
  }
];

export default function YogaSlider() {
  return (
    <section className="yoga-slider-section" id="hot-yoga">
      <div className="container">
        <div className="yoga-hero-grid">
          {/* Beautiful Image Gallery on Left */}
          <div className="image-gallery">
            <div className="gallery-main">
              <img src={yogaImages[0].url} alt={yogaImages[0].alt} />
            </div>
            <div className="gallery-stack">
              <img src={yogaImages[1].url} alt={yogaImages[1].alt} />
              <img src={yogaImages[2].url} alt={yogaImages[2].alt} />
            </div>
          </div>

          {/* Content Panel on Right */}
          <FadeInFromLeft className="about-panel">
            <FadeInFromLeft>
              <div className="eyebrow">HOT YOGA</div>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.1}>
              <h2 className="about-title">Heat Your Body. Calm Your Mind.</h2>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.2}>
              <p className="about-copy">
                Our hot yoga sessions blend ancient Indian wisdom with modern wellness practices.
                Through mindful movement in elevated temperatures, we help you unlock your natural
                potential — finding calm, building community, and embracing growth.
              </p>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.3}>
              <div className="about-features">
                <div className="feature-item">Mindful Movement</div>
                <div className="feature-item">Strength & Flexibility</div>
                <div className="feature-item">Mental Clarity</div>
              </div>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.4}>
              <div className="about-cta">
                <button className="btn btn-primary">Book Your Session</button>
              </div>
            </FadeInFromLeft>
          </FadeInFromLeft>
        </div>
      </div>
    </section>
  );
}