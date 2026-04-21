import React from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';
import GlassCard from './GlassCard';

const blogs = [
  {
    id: 1,
    title: 'How to Stop Overthinking',
    excerpt: 'Practical tips to quiet your mind and find inner peace. Learn simple mindfulness techniques that can help you break free from repetitive thought patterns and embrace the present moment.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    category: 'Mindfulness',
    categoryColor: '#8b5cf6',
    author: 'Dr. Maya Singh',
    authorTitle: 'Wellness Expert',
    date: 'Apr 10, 2025',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Healing After Heartbreak',
    excerpt: 'A gentle guide to moving forward after loss. Discover compassionate practices for emotional recovery and opening your heart again.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    category: 'Emotional Healing',
    categoryColor: '#f472b6',
    author: 'Ananya Rao',
    authorTitle: 'Therapist',
    date: 'Apr 5, 2025',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Anxiety Reset in 5 Minutes',
    excerpt: 'Quick techniques to calm your nervous system. Simple breathing exercises and grounding practices you can use anywhere, anytime.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    category: 'Wellness',
    categoryColor: '#34d399',
    author: 'Priya Sharma',
    authorTitle: 'Yoga Instructor',
    date: 'Mar 28, 2025',
    readTime: '3 min read'
  }
];

export default function BlogPreview() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-bg-elements">
        <div className="blog-orb blog-orb-1"></div>
        <div className="blog-orb blog-orb-2"></div>
        <div className="blog-grid-pattern"></div>
      </div>
      
      <div className="container">
        <div className="blog-header">
          <FadeInFromLeft>
            <div className="blog-label">
              <span className="blog-label-line"></span>
              <span>Wellness Insights</span>
            </div>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <h2 className="blog-title">Latest Articles</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.2}>
            <p className="blog-subtitle">
              Explore expert guidance, mindfulness practices, and holistic approaches 
              to nurture your mental and emotional well-being
            </p>
          </FadeInFromLeft>
        </div>

        <StaggerContainer className="blog-grid">
          {blogs.map((blog) => (
            <StaggerItem key={blog.id}>
              <GlassCard className="blog-card glass-card" hover blur={12}>
                <HoverLift className="blog-card-inner-wrapper">
                  <div className="blog-card-inner">
                    <div className="blog-card-image">
                      <img src={blog.image} alt={blog.title} />
                      <div className="blog-card-overlay"></div>
                      <span 
                        className="blog-category-badge"
                        style={{ backgroundColor: blog.categoryColor }}
                      >
                        {blog.category}
                      </span>
                    </div>
                    
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-date">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          {blog.date}
                        </span>
                        <span className="blog-separator">•</span>
                        <span className="blog-read-time">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {blog.readTime}
                        </span>
                      </div>
                    
                      <h3 className="blog-card-title">{blog.title}</h3>
                      <p className="blog-card-excerpt">{blog.excerpt}</p>
                      
                      <div className="blog-card-footer">
                        <div className="blog-author">
                          <div className="blog-author-avatar">
                            {blog.author.charAt(0)}
                          </div>
                          <div className="blog-author-info">
                            <span className="blog-author-name">{blog.author}</span>
                            <span className="blog-author-title">{blog.authorTitle}</span>
                          </div>
                        </div>
                        <button className="btn-read-more">
                          <span>Read Article</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="blog-bottom">
          <FadeUp delay={0.3}>
            <div className="blog-view-all">
              <button className="btn-view-all">
                <span>View All Articles</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="blog-cta">
              <div className="blog-cta-content">
                <h3>Ready to begin your wellness journey?</h3>
                <p>Subscribe to receive weekly insights and guidance directly to your inbox</p>
              </div>
              <div className="blog-cta-form">
                <input type="email" placeholder="Enter your email" className="blog-email-input" />
                <button className="btn-subscribe">
                  <span>Subscribe</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}