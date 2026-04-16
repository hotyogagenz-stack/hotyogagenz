import React from 'react'

export default function Resources() {
  return (
    <div>
      <h2 className="section-title">Fresh Reads</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1499209974431-9ddd3e6f117a?w=400" alt="Blog" />
          <h3>Navigating Anxiety in 2026</h3>
          <p>Real tips for the modern world...</p>
        </div>
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1512438248406-306bd283677e?w=400" alt="Blog" />
          <h3>Setting Boundaries with Family</h3>
          <p>It's hard, but it's necessary...</p>
        </div>
      </div>
    </div>
  )
}
