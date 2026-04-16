import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'How to stop overthinking',
    excerpt: 'Practical tips to quiet your mind and find peace',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    category: 'Mindfulness'
  },
  {
    id: 2,
    title: 'Healing after heartbreak',
    excerpt: 'A gentle guide to moving forward after loss',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    category: ' healing'
  },
  {
    id: 3,
    title: 'Anxiety reset in 5 mins',
    excerpt: 'Quick techniques to calm your nervous system',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    category: 'Wellness'
  }
];

export default function BlogPreview() {
  return (
    <section className="blog-preview-section" id="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">📝 Latest on the Blog</h2>
          <p className="section-subtitle">Healing insights & wellness tips</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card glass-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category">{blog.category}</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="btn-read-more">Read More →</button>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-container">
          <button className="btn-view-all">View All Posts →</button>
        </div>
      </div>
    </section>
  );
}