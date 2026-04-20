import React, { useState, useEffect } from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

const healingServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="19" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="23" x2="16" y2="23" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sound Bath Meditation',
    description: 'Immerse in therapeutic sound vibrations from singing bowls, gongs, and chimes. Deep relaxation and energy realignment through resonant frequencies.',
    duration: '60 min',
    price: '₹1,200/session',
    benefits: ['Deep relaxation', 'Stress relief', 'Energy clearing']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Reiki Energy Healing',
    description: 'Japanese energy healing technique. Channel universal life force to balance chakras, release blockages, and restore natural flow.',
    duration: '45-60 min',
    price: '₹1,500/session',
    benefits: ['Chakra balancing', 'Energy alignment', 'Deep peace']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Guided Breathwork',
    description: 'Conscious breathing techniques to calm the nervous system, increase oxygen flow, and access meditative states quickly.',
    duration: '30-45 min',
    price: '₹800/session',
    benefits: ['Nervous system regulation', 'Mental clarity', 'Emotional release']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <path d="M19.5 14.25L12 21l-7.5-6.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Crystal Healing',
    description: 'Use of gemstones and crystals to amplify energy, promote healing, and restore balance to body, mind, and spirit.',
    duration: '60 min',
    price: '₹1,300/session',
    benefits: ['Energy amplification', 'Vibrational healing', 'Spiritual connection']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Chakra Balancing',
    description: 'Align and activate your seven energy centers through sound, visualization, and gentle touch for holistic well-being.',
    duration: '75 min',
    price: '₹1,800/session',
    benefits: ['Energy center alignment', 'Holistic balance', 'Inner harmony']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="healing-svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Aromatherapy Session',
    description: 'Therapeutic use of essential oils to enhance physical and emotional health. Custom blends for your specific needs.',
    duration: '45 min',
    price: '₹1,000/session',
    benefits: ['Sensory healing', 'Mood enhancement', 'Natural remedies']
  }
];

const healingTestimonials = [
  {
    name: 'Kavya Nair',
    role: 'Yoga Teacher',
    quote: 'The sound bath sessions transported me to another dimension. I left feeling lighter, clearer, and deeply restored. June Flint\'s healing space is magical.',
    rating: 5,
    service: 'Sound Bath Meditation'
  },
  {
    name: 'Vikram Malhotra',
    role: 'Corporate Executive',
    quote: 'Reiki helped me release years of accumulated stress. My sleep improved dramatically and I feel more centered amidst my busy schedule.',
    rating: 5,
    service: 'Reiki Energy Healing'
  },
  {
    name: 'Ananya Das',
    role: 'Graduate Student',
    quote: 'Breathwork sessions gave me tools to manage anxiety instantly. I use these techniques daily and they\'ve transformed how I handle pressure.',
    rating: 5,
    service: 'Guided Breathwork'
  }
];

const healingJourney = [
  {
    step: 1,
    title: 'Discover',
    description: 'Begin with a consultation to identify your unique needs and intentions for healing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    )
  },
  {
    step: 2,
    title: 'Choose',
    description: 'Select healing modalities that resonate with you from our curated offerings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="8" x2="2" y2="22" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="17.5" y1="15" x2="9" y2="15" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    step: 3,
    title: 'Experience',
    description: 'Immerse in transformative sessions led by certified healing practitioners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    step: 4,
    title: 'Integrate',
    description: 'Take home practices and tools to continue your healing journey daily.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function Healing() {
  const [ripples, setRipples] = useState([]);

  // Create floating ripple effect
  useEffect(() => {
    const createRipple = () => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 200 + 100,
        duration: Math.random() * 10 + 10
      };
      setRipples(prev => [...prev.slice(-4), newRipple]);
    };

    const interval = setInterval(createRipple, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="healing-page" id="healing">
      {/* Hero Section - Water-inspired with ripples */}
      <div className="healing-hero">
        <div className="healing-water-bg">
          {/* Animated water ripples */}
          {ripples.map(ripple => (
            <div
              key={ripple.id}
              className="water-ripple"
              style={{
                left: `${ripple.x}%`,
                width: `${ripple.size}px`,
                height: `${ripple.size}px`,
                animationDuration: `${ripple.duration}s`
              }}
            />
          ))}
          <div className="water-gradient"></div>
          <div className="floating-leaf leaf-1"></div>
          <div className="floating-leaf leaf-2"></div>
          <div className="floating-leaf leaf-3"></div>
        </div>

        <div className="container">
          <div className="healing-hero-content">
            <FadeUp>
              <span className="healing-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Holistic Healing
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="healing-title">
                Restore Your <span className="healing-highlight">Inner Peace</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="healing-description">
                Experience profound restoration through ancient healing practices. 
                Our certified practitioners guide you through sound, energy, and breathwork 
                therapies to release tension, realign your energy, and awaken your body's natural healing abilities.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="healing-ctas">
                <button className="healing-btn-primary">
                  Explore Healing Services
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="healing-btn-secondary">
                  Book a Session
                </button>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="healing-stats">
                <div className="healing-stat">
                  <span className="stat-num">2,500+</span>
                  <span className="stat-label">Healing Sessions</span>
                </div>
                <div className="healing-stat-divider"></div>
                <div className="healing-stat">
                  <span className="stat-num">96%</span>
                  <span className="stat-label">Report Deep Relaxation</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Philosophy Section - Gentle introduction */}
      <div className="healing-philosophy">
        <div className="container">
          <FadeInFromLeft>
            <div className="philosophy-content">
              <div className="philosophy-text">
                <span className="philosophy-eyebrow">Our Philosophy</span>
                <h2 className="philosophy-title">
                  Healing Is a Journey Back to Yourself
                </h2>
                <p className="philosophy-desc">
                  In our fast-paced world, we often forget to pause. Healing isn't about fixing 
                  something broken—it's about remembering your natural state of wholeness. 
                  Our gentle modalities create sacred space for you to release what no longer serves 
                  and reconnect with your innate wisdom.
                </p>
                <div className="philosophy-points">
                  <div className="philosophy-point">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Non-invasive, gentle approaches</span>
                  </div>
                  <div className="philosophy-point">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Certified & compassionate practitioners</span>
                  </div>
                  <div className="philosophy-point">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Personalized healing journeys</span>
                  </div>
                </div>
              </div>
              <div className="philosophy-visual">
                <img 
                  src="/assets/vecteezy_serene-classic-silhouette-of-a-meditating-figure-cutout-with_59433943.png" 
                  alt="Philosophy image placeholder"
                  style={{ width: '300px', height: 'auto' }}
                />
                <div className="healing-orb orb-1"></div>
                <div className="healing-orb orb-2"></div>
              </div>
            </div>
          </FadeInFromLeft>
        </div>
      </div>

      {/* Services Grid - Unique card design */}
      <div className="healing-services">
        <div className="container">
          <FadeInFromLeft>
            <div className="services-header">
              <span className="services-eyebrow">Our Offerings</span>
              <h2 className="services-title">
                Choose Your Path to Restoration
              </h2>
              <p className="services-subtitle">
                Each healing modality offers a unique doorway to balance. 
                Explore what calls to your soul.
              </p>
            </div>
          </FadeInFromLeft>

          <StaggerContainer className="services-grid">
            {healingServices.map((service, index) => (
              <StaggerItem key={index}>
                <HoverLift className="healing-service-card">
                  <div className="service-card-inner">
                    <div className="service-icon-wrapper">
                      <div className="service-glow"></div>
                      {service.icon}
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.description}</p>
                      <div className="service-benefits">
                        {service.benefits.map((benefit, i) => (
                          <span key={i} className="benefit-tag">{benefit}</span>
                        ))}
                      </div>
                      <div className="service-meta">
                        <span className="service-duration">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {service.duration}
                        </span>
                        <span className="service-price">{service.price}</span>
                      </div>
                    </div>
                    <button className="service-book-btn">
                      Book Now
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Journey Section - Step by step */}
      <div className="healing-journey">
        <div className="container">
          <FadeInFromLeft>
            <div className="journey-header">
              <span className="journey-eyebrow">Your Path</span>
              <h2 className="journey-title">
                The Healing Journey
              </h2>
              <p className="journey-subtitle">
                A gentle, guided process from intention to transformation
              </p>
            </div>
          </FadeInFromLeft>

          <div className="journey-steps">
            {healingJourney.map((step, index) => (
              <FadeUp key={index} delay={index * 0.15}>
                <div className="journey-step">
                  <div className="step-number">{String(step.step).padStart(2, '0')}</div>
                  <div className="step-icon-wrapper">
                    {step.icon}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                  {index < healingJourney.length - 1 && <div className="step-connector"></div>}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - Soft, personal stories */}
      <div className="healing-testimonials">
        <div className="container">
          <FadeInFromLeft>
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">Transformation Stories</span>
              <h2 className="testimonials-title">
                Voices of Healing
              </h2>
            </div>
          </FadeInFromLeft>

          <StaggerContainer className="testimonials-grid">
            {healingTestimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="healing-testimonial-card">
                  <div className="testimonial-quote-mark">"</div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <span className="author-name">{testimonial.name}</span>
                      <span className="author-role">{testimonial.role}</span>
                      <span className="author-service">— {testimonial.service}</span>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* CTA Section - Gentle invitation */}
      <div className="healing-cta">
        <div className="cta-bg-pattern"></div>
        <div className="container">
          <FadeUp>
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="cta-desc">
                Your first healing session includes a complimentary 15-minute consultation 
                to ensure we create the perfect experience for you.
              </p>
              <div className="cta-buttons">
                <button className="cta-primary-btn">
                  Book Your First Session
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="cta-secondary-btn">
                  Download Healing Guide
                </button>
              </div>
              <p className="cta-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                No commitment required • All sessions confidential
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
