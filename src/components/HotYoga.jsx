import React, { useState, useEffect } from 'react';
import { FadeUp, FadeLeft, FadeRight, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

// ProcessedPoster: loads the poster image, removes near-white background pixels
// using an offscreen canvas, and renders a transparent PNG data URL.
function ProcessedPoster() {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const img = new Image();
    // image is in the built assets folder per project state
  img.crossOrigin = 'anonymous';
  img.src = '/assets/vecteezy_young-woman-practicing-yoga-in-lotus-pose-wellness-and_57190024.png';

    const handleLoad = () => {
      try {
        const canvas = document.createElement('canvas');
        const w = img.naturalWidth || img.width || 1200;
        const h = img.naturalHeight || img.height || 1200;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;

        // Threshold: treat near-white pixels as background and make them transparent
        const threshold = 245; // 0-255
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          if (r >= threshold && g >= threshold && b >= threshold) {
            // make pixel fully transparent
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        setSrc(dataUrl);
      } catch (err) {
        // fallback: use original image if processing fails
        setSrc(img.src);
      }
    };

    const handleError = () => setSrc(img.src);

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, []);

  // Always render an <img/> so there is no extra placeholder div behind the poster.
  const fallback = '/assets/vecteezy_young-woman-practicing-yoga-in-lotus-pose-wellness-and_57190024.png';
  return <img className="hero-poster" src={src || fallback} alt="Hot Yoga Poster" />;
}

const hotYogaFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-svg">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Heated Studio',
    desc: 'Our studio is maintained at 95-105°F for optimal muscle warmth, deep stretching, and natural detoxification.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-svg">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M18 6l-2-4M14 6l2-4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Expert Instructors',
    desc: 'Certified yoga teachers with specialized training in hot yoga methodologies and personal transformation.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-svg">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'Hydration Station',
    desc: 'Complimentary filtered water and electrolyte drinks to keep you hydrated throughout your practice.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feature-svg">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
    title: 'Premium Amenities',
    desc: 'Luxury change rooms, plush towel service, and premium yoga props all provided for your comfort.'
  }
];

const classPackages = [
  {
    name: 'Drop-In',
    price: '₹800',
    period: 'per class',
    description: 'Perfect for trying out hot yoga',
    features: [
      'Single session access',
      'All equipment included',
      'Premium towel service',
      'Valid for 7 days'
    ],
    popular: false,
    cta: 'Book Now'
  },
  {
    name: 'Essential',
    price: '₹6,500',
    period: '10 classes',
    description: 'Best value for regular practitioners',
    features: [
      '10 session pack',
      'All equipment included',
      'Premium towel service',
      '60 days validity',
      'Locker usage'
    ],
    popular: true,
    cta: 'Get Started'
  },
  {
    name: 'Unlimited',
    price: '₹12,000',
    period: 'monthly',
    description: 'For dedicated yoga enthusiasts',
    features: [
      'Unlimited classes',
      'All equipment included',
      'Premium towel service',
      'Priority booking',
      'Locker access',
      '1 guest pass per month'
    ],
    popular: false,
    cta: 'Go Unlimited'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    quote: 'Hot yoga at June Flint transformed my flexibility and stress levels. The instructors are incredibly supportive!',
    rating: 5
  },
  {
    name: 'Rahul Mehta',
    role: 'Marketing Director',
    quote: 'The heated studio creates the perfect environment for deep practice. I look forward to every session.',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'Entrepreneur',
    quote: 'Best investment in my wellness journey. The community and instructors make every class special.',
    rating: 5
  }
];

const stats = [
  { value: '5,000+', label: 'Sessions Completed' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Weekly Classes' },
  { value: '4.9', label: 'Average Rating' }
];

export default function HotYoga() {
  return (
    <section className="hot-yoga-page" id="hot-yoga">
      {/* Hero Section */}
      <div className="hot-yoga-hero">
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <FadeUp>
                <span className="hero-badge">Hot Yoga Program</span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="hero-title">
                  Transform Through
                  <span className="title-gradient"> Heat & Movement</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="hero-description">
                  Experience the power of hot yoga at June Flint. Our signature sessions 
                  combine controlled heat with traditional yoga postures to accelerate 
                  flexibility, build strength, and cleanse your body and mind.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="hero-buttons">
                  <button className="btn-primary btn-lg">
                    Book Your First Class
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="btn-secondary btn-lg">
                    View Pricing
                  </button>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-value">4.9</span>
                    <span className="stat-label">★ 500+ Reviews</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-value">98%</span>
                    <span className="stat-label">Return Rate</span>
                  </div>
                </div>
              </FadeUp>
            </div>
            <FadeRight delay={0.2} className="hero-visual">
              {/* Poster image: process at runtime to remove near-white background */}
              {
                /* client-side background removal via canvas */
              }
              <ProcessedPoster />
            </FadeRight>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-box" key={index}>
                <span className="stat-number">{stat.value}</span>
                <span className="stat-text">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <FadeInFromLeft>
          <div className="hot-yoga-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">The June Flint Difference</h2>
            <p className="section-description">
              We've crafted the perfect environment for your hot yoga practice, 
              combining luxury amenities with expert guidance for transformative results.
            </p>
          </div>
        </FadeInFromLeft>

        {/* Features Grid */}
        <StaggerContainer className="hot-yoga-features">
          {hotYogaFeatures.map((feature, index) => (
            <StaggerItem key={index}>
              <HoverLift className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Class Packages */}
        <FadeInFromLeft>
          <div className="packages-section">
            <span className="section-eyebrow">Investment</span>
            <h3 className="packages-title">Choose Your Plan</h3>
            <p className="packages-subtitle">Flexible options for every practice level</p>
          </div>
        </FadeInFromLeft>
        <StaggerContainer className="packages-grid">
          {classPackages.map((pkg, index) => (
            <StaggerItem key={index}>
              <HoverLift className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <div className="package-header">
                  <h4 className="package-name">{pkg.name}</h4>
                  <p className="package-desc">{pkg.description}</p>
                </div>
                <div className="package-price">
                  <span className="price-amount">{pkg.price}</span>
                  <span className="price-period">/{pkg.period}</span>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`package-btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {pkg.cta}
                </button>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Social Proof / Testimonials */}
        <FadeInFromLeft>
          <div className="hot-yoga-testimonials-section">
            <span className="section-eyebrow">Community Love</span>
            <h3 className="testimonials-title">What Our Students Say</h3>
          </div>
        </FadeInFromLeft>
        <StaggerContainer className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <HoverLift className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-info">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-details">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <div className="hot-yoga-cta">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <h3 className="cta-title">Begin Your Hot Yoga Journey</h3>
            <p className="cta-desc">
              First class free for new students. Experience the transformative power 
              of hot yoga and discover a new version of yourself.
            </p>
            <button className="cta-btn btn-primary btn-lg">
              Book Your First Class
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="cta-note">No commitment required • 60-minute session</p>
          </div>
        </div>
      </div>
    </section>
  );
}
