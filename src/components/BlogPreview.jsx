import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'How to Stop Overthinking',
    excerpt: 'Practical tips to quiet your mind and find inner peace. Learn simple mindfulness techniques that can help you break free from repetitive thought patterns and embrace the present moment.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    category: 'Mindfulness',
    date: 'Apr 10, 2025',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Healing After Heartbreak',
    excerpt: 'A gentle guide to moving forward after loss. Discover compassionate practices for emotional recovery and opening your heart again.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    category: 'Emotional Healing',
    date: 'Apr 5, 2025',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Anxiety Reset in 5 Minutes',
    excerpt: 'Quick techniques to calm your nervous system. Simple breathing exercises and grounding practices you can use anywhere, anytime.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    category: 'Wellness',
    date: 'Mar 28, 2025',
    readTime: '3 min read'
  }
];

export default function BlogPreview() {
  return (
    <section className="blog-preview-section" id="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Insights and guidance for your wellness journey</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card glass-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category">
                  {blog.category}
                </span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="btn-read-more">
                  <span>Read More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-container">
          <button className="btn-view-all">
            <span>View All Posts</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}