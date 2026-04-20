import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

const talkSpaceServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'One-on-One Counseling',
    description: 'Private sessions with certified wellness counselors to discuss your mental and emotional well-being in a safe, confidential space.',
    duration: '45-60 min',
    price: '₹1,500/session'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Group Therapy Circles',
    description: 'Join small groups of like-minded individuals for guided discussions on stress, anxiety, relationships, and personal growth.',
    duration: '90 min',
    price: '₹800/person'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Couples & Family Sessions',
    description: 'Strengthen your relationships with guided conversations and conflict resolution strategies tailored for couples and families.',
    duration: '60-90 min',
    price: '₹2,500/session'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Online Video Sessions',
    description: 'Connect with our experts from the comfort of your home through secure, private video calls. Available across India.',
    duration: 'Flexible',
    price: '₹1,200/session'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Wellness Assessments',
    description: 'Comprehensive mental health and stress assessments with personalized recommendations for your wellness journey.',
    duration: '60 min',
    price: '₹2,000/assessment'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '24/7 Chat Support',
    description: 'Access our AI-assisted chat platform for immediate guidance and resources whenever you need support.',
    duration: 'Anytime',
    price: 'Free with membership'
  }
];

const testimonials = [
  {
    name: 'Meera Kapoor',
    role: 'Yoga Instructor',
    quote: 'The talk space sessions helped me navigate a difficult life transition. My counselor provided tools that I still use daily.',
    rating: 5
  },
  {
    name: 'Arjun Singh',
    role: 'Startup Founder',
    quote: 'As an entrepreneur, stress was constant. The group therapy circles connected me with others who truly understand.',
    rating: 5
  },
  {
    name: 'Sneha Reddy',
    role: 'Marketing Executive',
    quote: 'Couples therapy saved our relationship. We learned to communicate better and understand each other\'s perspectives.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'How do I book a talk space session?',
    answer: 'You can book sessions through our website, mobile app, or by calling our helpline. Online sessions require a stable internet connection and a private space.'
  },
  {
    question: 'Are the sessions confidential?',
    answer: 'Absolutely. All our sessions are strictly confidential. Our counselors follow professional ethics and privacy guidelines. Nothing shared in sessions is disclosed without your explicit consent.'
  },
  {
    question: 'What if I need urgent help?',
    answer: 'For emergencies, please contact emergency services immediately. Our 24/7 chat support is available for immediate guidance, but it is not a substitute for professional crisis intervention.'
  },
  {
    question: 'Can I choose my counselor?',
    answer: 'Yes, you can browse counselor profiles and select one that matches your needs. If you\'re unsure, our team can help match you with the right expert.'
  },
  {
    question: 'Are online sessions as effective as in-person?',
    answer: 'Research shows online therapy can be equally effective. Our video platform is secure, and many clients find the comfort of home enhances openness and comfort.'
  }
];

export default function TalkSpace() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="talk-space-page" id="talk-space">
      {/* Hero Section - Formal Professional Layout */}
      <div className="ts-hero-section">
        <div className="ts-hero-bg">
          <div className="ts-hero-pattern"></div>
        </div>
        <div className="ts-container">
          <div className="ts-hero-grid">
            <div className="ts-hero-content">
              <FadeUp>
                <div className="ts-badge-wrapper">
                  <span className="ts-badge">Professional Mental Health Services</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="ts-hero-title">
                  Your Safe Space for <span className="ts-highlight">Mental Wellness</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="ts-hero-desc">
                  Connect with certified counselors, join supportive group circles, and access professional mental health care—all within the June Flint community. Your journey to emotional balance starts here.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="ts-hero-actions">
                  <button className="ts-btn-primary">
                    Book a Session
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ts-btn-icon">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="ts-btn-outline">
                    Explore Services
                  </button>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="ts-hero-stats">
                  <div className="ts-stat-item">
                    <span className="ts-stat-number">4.9/5</span>
                    <span className="ts-stat-label">Client Rating</span>
                  </div>
                  <div className="ts-stat-divider"></div>
                  <div className="ts-stat-item">
                    <span className="ts-stat-number">50+</span>
                    <span className="ts-stat-label">Certified Professionals</span>
                  </div>
                  <div className="ts-stat-divider"></div>
                  <div className="ts-stat-item">
                    <span className="ts-stat-number">10K+</span>
                    <span className="ts-stat-label">Sessions Completed</span>
                  </div>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.2} className="ts-hero-card">
              <div className="ts-card-header">
                <span className="ts-card-title">Quick Book</span>
                <span className="ts-card-subtitle">Schedule your first session</span>
              </div>
              <div className="ts-card-body">
                <div className="ts-form-group">
                  <label>Service Type</label>
                  <select className="ts-select">
                    <option>One-on-One Counseling</option>
                    <option>Group Therapy Circle</option>
                    <option>Couples Session</option>
                    <option>Wellness Assessment</option>
                  </select>
                </div>
                <div className="ts-form-group">
                  <label>Preferred Mode</label>
                  <select className="ts-select">
                    <option>Video Call</option>
                    <option>Phone Call</option>
                    <option>In-Person</option>
                  </select>
                </div>
                <div className="ts-form-group">
                  <label>Your Name</label>
                  <input type="text" className="ts-input" placeholder="Enter your name" />
                </div>
                <div className="ts-form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="ts-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <button className="ts-btn-submit">Schedule Now</button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Services Section - Professional Cards */}
      <div className="ts-services-section">
        <div className="ts-container">
          <div className="ts-section-header">
            <FadeInFromLeft>
              <span className="ts-eyebrow">Our Services</span>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.1}>
              <h2 className="ts-section-title">Choose Your Path to Wellness</h2>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.2}>
              <p className="ts-section-desc">
                From one-on-one counseling to group circles, we offer multiple ways to support your mental health journey.
              </p>
            </FadeInFromLeft>
          </div>

          <StaggerContainer className="ts-services-list" staggerDelay={0.1}>
            {talkSpaceServices.map((service, index) => (
              <StaggerItem key={index}>
                <HoverLift>
                  <div className="ts-service-card">
                    <div className="ts-service-icon">{service.icon}</div>
                    <div className="ts-service-content">
                      <h3 className="ts-service-title">{service.title}</h3>
                      <p className="ts-service-desc">{service.description}</p>
                      <div className="ts-service-meta">
                        <span className="ts-service-duration">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ts-meta-icon">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {service.duration}
                        </span>
                        <span className="ts-service-price">{service.price}</span>
                      </div>
                    </div>
                    <button className="ts-service-btn">Book Now</button>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* How It Works - Process Steps */}
      <div className="ts-process-section">
        <div className="ts-container">
          <div className="ts-section-header">
            <FadeInFromLeft>
              <span className="ts-eyebrow">Process</span>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.1}>
              <h2 className="ts-section-title">How It Works</h2>
            </FadeInFromLeft>
          </div>

          <div className="ts-process-steps">
            <FadeUp delay={0.1}>
              <div className="ts-process-step">
                <div className="ts-step-number">01</div>
                <div className="ts-step-content">
                  <h3>Choose Your Service</h3>
                  <p>Browse our range of counseling options and select what fits your needs best.</p>
                </div>
              </div>
            </FadeUp>
            <div className="ts-step-connector"></div>
            <FadeUp delay={0.2}>
              <div className="ts-process-step">
                <div className="ts-step-number">02</div>
                <div className="ts-step-content">
                  <h3>Book a Slot</h3>
                  <p>Pick a convenient time from our calendar. Same-day appointments available.</p>
                </div>
              </div>
            </FadeUp>
            <div className="ts-step-connector"></div>
            <FadeUp delay={0.3}>
              <div className="ts-process-step">
                <div className="ts-step-number">03</div>
                <div className="ts-step-content">
                  <h3>Connect & Heal</h3>
                  <p>Meet your counselor via video, phone, or in-person. Begin your transformation.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Testimonials - Professional Quotes */}
      <div className="ts-testimonials-section">
        <div className="ts-container">
          <div className="ts-section-header">
            <FadeInFromLeft>
              <span className="ts-eyebrow">Stories</span>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.1}>
              <h2 className="ts-section-title">Healing Voices</h2>
            </FadeInFromLeft>
          </div>

          <StaggerContainer className="ts-testimonials-grid" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <HoverLift>
                  <div className="ts-testimonial-card">
                    <div className="ts-quote-icon">"</div>
                    <p className="ts-testimonial-quote">{testimonial.quote}</p>
                    <div className="ts-testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="ts-star">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </span>
                      ))}
                    </div>
                    <div className="ts-testimonial-author">
                      <div className="ts-author-avatar">{testimonial.name.charAt(0)}</div>
                      <div className="ts-author-info">
                        <span className="ts-author-name">{testimonial.name}</span>
                        <span className="ts-author-role">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* FAQ Section - Clean Accordion */}
      <div className="ts-faq-section">
        <div className="ts-container">
          <div className="ts-section-header">
            <FadeInFromLeft>
              <span className="ts-eyebrow">FAQ</span>
            </FadeInFromLeft>
            <FadeInFromLeft delay={0.1}>
              <h2 className="ts-section-title">Common Questions</h2>
            </FadeInFromLeft>
          </div>

          <StaggerContainer className="ts-faq-list" staggerDelay={0.1}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className={`ts-faq-item ${openFaq === index ? 'open' : ''}`}
                  layout
                >
                  <motion.button 
                    className="ts-faq-question" 
                    onClick={() => toggleFaq(index)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{faq.question}</span>
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="ts-faq-icon"
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        className="ts-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* CTA Section - Professional Call to Action */}
      <div className="ts-cta-section">
        <div className="ts-container">
          <motion.div 
            className="ts-cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ts-cta-content">
              <FadeUp>
                <h3 className="ts-cta-title">Ready to Begin Your Journey?</h3>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="ts-cta-desc">
                  Book your first session today and experience the June Flint difference. First-time users get 20% off their first counseling session.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="ts-cta-actions">
                <button className="ts-btn-primary ts-btn-large">
                  Book Your First Session
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ts-btn-icon">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="ts-btn-outline ts-btn-large">
                  Call Us: +91 98765 43210
                </button>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="ts-cta-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ts-note-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>No commitment required | Confidential & secure</span>
              </div>
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
