 import React, { useState } from 'react';
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, HoverLift, ParallaxCard } from './animations';
import { motion } from 'framer-motion';

const allBlogPosts = [
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
    readTime: '5 min read',
    featured: true
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
    readTime: '7 min read',
    featured: true
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
    readTime: '3 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Finding Balance in Busy Times',
    excerpt: 'Discover effective strategies to maintain equilibrium between work, personal life, and self-care in our fast-paced world.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80',
    category: 'Lifestyle',
    categoryColor: '#f59e0b',
    author: 'Ravi Kumar',
    authorTitle: 'Life Coach',
    date: 'Mar 22, 2025',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 5,
    title: 'The Power of Morning Routines',
    excerpt: 'Transform your life by establishing a mindful morning routine that sets the tone for success and inner peace throughout the day.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    category: 'Mindfulness',
    categoryColor: '#8b5cf6',
    author: 'Dr. Maya Singh',
    authorTitle: 'Wellness Expert',
    date: 'Mar 15, 2025',
    readTime: '4 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Understanding Your Emotions',
    excerpt: 'A comprehensive guide to identifying, understanding, and healthily processing your emotions for better mental health.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    category: 'Emotional Healing',
    categoryColor: '#f472b6',
    author: 'Ananya Rao',
    authorTitle: 'Therapist',
    date: 'Mar 10, 2025',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 7,
    title: 'Breathwork for Beginners',
    excerpt: 'Learn the fundamentals of breathwork and how conscious breathing can transform your physical and mental well-being.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    category: 'Wellness',
    categoryColor: '#34d399',
    author: 'Priya Sharma',
    authorTitle: 'Yoga Instructor',
    date: 'Mar 5, 2025',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 8,
    title: 'Digital Detox: Reclaiming Your Peace',
    excerpt: 'Practical steps to reduce screen time and reconnect with the present moment and the people around you.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80',
    category: 'Lifestyle',
    categoryColor: '#f59e0b',
    author: 'Ravi Kumar',
    authorTitle: 'Life Coach',
    date: 'Feb 28, 2025',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 9,
    title: 'Meditation for Sleep',
    excerpt: 'Drift into peaceful sleep with these guided meditation techniques designed specifically for better rest and recovery.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    category: 'Mindfulness',
    categoryColor: '#8b5cf6',
    author: 'Dr. Maya Singh',
    authorTitle: 'Wellness Expert',
    date: 'Feb 20, 2025',
    readTime: '4 min read',
    featured: false
  }
];

const categories = ['All', 'Mindfulness', 'Emotional Healing', 'Wellness', 'Lifestyle'];

export default function Blog({ theme, onThemeToggle }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = allBlogPosts.filter(post => post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section - New Unique Layout */}
      <section className="blog-hero-new">
        <div className="blog-hero-bg-new">
          <div className="hero-floating-shape shape-1"></div>
          <div className="hero-floating-shape shape-2"></div>
          <div className="hero-floating-shape shape-3"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="hero-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="container-new">
          <div className="blog-hero-content-new">
            <div className="blog-hero-text">
              <motion.div 
                className="blog-hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </span>
                <span>Expert Wellness Insights</span>
              </motion.div>
              
              <motion.h1 
                className="blog-hero-title-new"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                The <span className="title-highlight">Inner Peace</span> Journal
              </motion.h1>
              
              <motion.p 
                className="blog-hero-subtitle-new"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover transformative wisdom through expertly crafted articles on mindfulness, 
                emotional healing, and holistic wellness practices.
              </motion.p>
              
              <motion.div 
                className="blog-hero-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Articles</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">12K</span>
                  <span className="stat-label">Readers</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Rating</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="blog-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-stack">
                <div className="stack-card stack-card-1">
                  <img src={allBlogPosts[0].image} alt="Wellness" />
                  <div className="stack-card-overlay">
                    <span className="stack-category" style={{ backgroundColor: allBlogPosts[0].categoryColor }}>
                      {allBlogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="stack-card stack-card-2">
                  <img src={allBlogPosts[1].image} alt="Healing" />
                  <div className="stack-card-overlay">
                    <span className="stack-category" style={{ backgroundColor: allBlogPosts[1].categoryColor }}>
                      {allBlogPosts[1].category}
                    </span>
                  </div>
                </div>
                <div className="stack-card stack-card-3">
                  <img src={allBlogPosts[2].image} alt="Mindfulness" />
                  <div className="stack-card-overlay">
                    <span className="stack-category" style={{ backgroundColor: allBlogPosts[2].categoryColor }}>
                      {allBlogPosts[2].category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-glow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="blog-quick-categories">
        <div className="container-new">
          <div className="quick-categories-scroll">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`quick-category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="quick-category-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {category === 'All' && <><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></>}
                    {category === 'Mindfulness' && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                    {category === 'Emotional Healing' && <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>}
                    {category === 'Wellness' && <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M7 12s0-5 5-5 5 5 5 5"/></>}
                    {category === 'Lifestyle' && <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>}
                  </svg>
                </span>
                <span>{category}</span>
                <span className="quick-category-count">
                  {category === 'All' ? allBlogPosts.length : allBlogPosts.filter(p => p.category === category).length}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Magazine Style */}
      <section className="blog-featured-new">
        <div className="container-new">
          <div className="featured-section-header">
            <span className="featured-label">Editor's Picks</span>
            <div className="featured-label-line"></div>
          </div>
          
          <div className="featured-magazine-layout">
            {featuredPosts[0] && (
              <ParallaxCard className="featured-main-card">
                <div className="featured-main-image">
                  <img src={featuredPosts[0].image} alt={featuredPosts[0].title} />
                  <div className="featured-main-overlay"></div>
                </div>
                <div className="featured-main-content">
                  <span 
                    className="featured-main-badge"
                    style={{ backgroundColor: featuredPosts[0].categoryColor }}
                  >
                    {featuredPosts[0].category}
                  </span>
                  <div className="featured-main-meta">
                    <span>{featuredPosts[0].date}</span>
                    <span className="meta-dot">•</span>
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                  <h2 className="featured-main-title">{featuredPosts[0].title}</h2>
                  <p className="featured-main-excerpt">{featuredPosts[0].excerpt}</p>
                  <div className="featured-main-author">
                    <div className="author-avatar-lg">
                      {featuredPosts[0].author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <span className="author-name">{featuredPosts[0].author}</span>
                      <span className="author-role">{featuredPosts[0].authorTitle}</span>
                    </div>
                    <button className="btn-featured-read">
                      Read Article
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </ParallaxCard>
            )}
            
            <div className="featured-side-cards">
              {featuredPosts[1] && (
                <ParallaxCard className="featured-side-card">
                  <div className="featured-side-image">
                    <img src={featuredPosts[1].image} alt={featuredPosts[1].title} />
                  </div>
                  <div className="featured-side-content">
                    <span 
                      className="featured-side-badge"
                      style={{ backgroundColor: featuredPosts[1].categoryColor }}
                    >
                      {featuredPosts[1].category}
                    </span>
                    <div className="featured-side-meta">
                      <span>{featuredPosts[1].date}</span>
                      <span className="meta-dot">•</span>
                      <span>{featuredPosts[1].readTime}</span>
                    </div>
                    <h3 className="featured-side-title">{featuredPosts[1].title}</h3>
                    <p className="featured-side-excerpt">{featuredPosts[1].excerpt}</p>
                    <div className="featured-side-author">
                      <div className="author-avatar-sm">
                        {featuredPosts[1].author.charAt(0)}
                      </div>
                      <span>{featuredPosts[1].author}</span>
                    </div>
                  </div>
                </ParallaxCard>
              )}
              
              <div className="featured-newsletter-card">
                <div className="newsletter-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Stay Updated</h3>
                <p>Get weekly insights delivered to your inbox. Join our community of mindful readers.</p>
                <form className="newsletter-form-compact">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="newsletter-input-compact"
                  />
                  <button type="submit" className="btn-newsletter-compact">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="blog-search-section">
        <div className="container-new">
          <div className="search-filter-bar">
            <div className="search-box-new">
              <svg className="search-icon-new" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-new"
              />
              {searchQuery && (
                <button className="search-clear" onClick={() => setSearchQuery('')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
            <div className="results-count">
              Showing <strong>{filteredPosts.length}</strong> articles
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid - Bento Style */}
      <section className="blog-grid-section">
        <div className="container-new">
          {filteredPosts.length > 0 ? (
            <div className="blog-bento-grid">
              {filteredPosts.map((post, index) => (
                <StaggerItem key={post.id}>
                  <ParallaxCard className={`bento-card ${index === 0 ? 'bento-card-large' : ''}`}>
                    <div className="bento-card-image">
                      <img src={post.image} alt={post.title} />
                      <div className="bento-card-overlay"></div>
                      <span className="bento-card-time">{post.readTime}</span>
                    </div>
                    <div className="bento-card-content">
                      <span 
                        className="bento-card-category-inline"
                        style={{ backgroundColor: post.categoryColor }}
                      >
                        {post.category}
                      </span>
                      <div className="bento-card-meta">
                        <span className="bento-date">{post.date}</span>
                        <span className="meta-dot">•</span>
                        <span className="bento-author">{post.author}</span>
                      </div>
                      <h3 className="bento-card-title">{post.title}</h3>
                      <p className="bento-card-excerpt">{post.excerpt}</p>
                      <div className="bento-card-footer">
                        <div className="bento-author-info">
                          <div className="bento-avatar">
                            {post.author.charAt(0)}
                          </div>
                          <div className="bento-author-details">
                            <span className="bento-author-name">{post.author}</span>
                            <span className="bento-author-role">{post.authorTitle}</span>
                          </div>
                        </div>
                        <HoverLift>
                          <button className="btn-bento-read">
                            Read
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </button>
                        </HoverLift>
                      </div>
                    </div>
                  </ParallaxCard>
                </StaggerItem>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="blog-empty-state">
                <div className="empty-state-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <h3>No articles found</h3>
                <p>We couldn't find any articles matching your criteria. Try adjusting your search or filters.</p>
                <button 
                  className="btn-reset-filters"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                  Reset Filters
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="blog-tags-section">
        <div className="container-new">
          <div className="tags-content">
            <h3 className="tags-title">Popular Topics</h3>
            <div className="tags-cloud">
              <span className="tag-item">#mindfulness</span>
              <span className="tag-item">#meditation</span>
              <span className="tag-item">#breathwork</span>
              <span className="tag-item">#selfcare</span>
              <span className="tag-item">#healing</span>
              <span className="tag-item">#anxiety</span>
              <span className="tag-item">#stress</span>
              <span className="tag-item">#yoga</span>
              <span className="tag-item">#mentalhealth</span>
              <span className="tag-item">#wellness</span>
              <span className="tag-item">#innerpeace</span>
              <span className="tag-item">#emotionalhealing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}