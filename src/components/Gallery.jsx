import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: '/assets/yoga_gallery_1.png',
    title: 'Serene Hot Yoga',
    category: 'Practice',
    description: 'Finding balance in the heat of the moment.'
  },
  {
    id: 2,
    type: 'image',
    url: '/assets/yoga_gallery_2.png',
    title: 'Zen Meditation',
    category: 'Mindfulness',
    description: 'Quiet moments in our peaceful zen garden.'
  },
  {
    id: 3,
    type: 'image',
    url: '/assets/yoga_gallery_3.png',
    title: 'Group Session',
    category: 'Community',
    description: 'Energy and connection in our modern studio.'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://karmaticyoga.com/wp-content/uploads/2026/03/What-Is-Iyengar-Yoga-1-1024x536.webp',
    title: 'Iyengar Yoga',
    category: 'Practice',
    description: 'Alignment-focused practice inspired by Iyengar Yoga.'
  },
  {
    id: 5,
    type: 'image',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNorKSFpgAqAt_Z4rsDtt7Xj2Q-nD3d3c62A&s',
    title: 'Yoga Inspiration',
    category: 'Mindfulness',
    description: 'A mindful moment to reset and breathe.'
  },
  {
    id: 6,
  type: 'youtube',
  youtubeId: 'GNNg30vnxaU',
  title: 'Morning Flow',
    category: 'Practice',
    description: 'A beautiful start to your day.'
  },
  {
    id: 7,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    title: 'Sun Salutation',
    category: 'Practice',
    description: 'Welcoming the light with open hearts.'
  },
  {
    id: 8,
    type: 'youtube',
    youtubeId: 'tQjuoLAjUPc',
    title: 'Iyengar Yoga Video',
    category: 'Practice',
    description: 'Watch and learn: a guided Iyengar Yoga session.'
  },
  {
    id: 9,
  type: 'youtube',
  youtubeId: 'AnAXJmjVLzs',
  title: 'Breath Work',
    category: 'Mindfulness',
    description: 'Deep diving into the power of breath.'
  }
];

const categories = ['All', 'Practice', 'Mindfulness', 'Community', 'Photos', 'Videos'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Photos') return item.type === 'image';
  if (filter === 'Videos') return item.type === 'video' || item.type === 'youtube';
    return item.category === filter;
  });

  return (
    <section className="gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gallery-label">Visual Journey</span>
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-subtitle">
            Explore moments of peace, strength, and community captured at HotYogaGenz.
          </p>
        </motion.div>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`gallery-item ${item.type}`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="gallery-card">
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.title} />
                  ) : item.type === 'youtube' ? (
                    <div className="video-placeholder">
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="play-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  ) : (
                    <div className="video-placeholder">
                      <video src={item.url} muted loop onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0;}} />
                      <div className="play-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}
                  <div className="gallery-overlay">
                    <span className="item-category">{item.category}</span>
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-desc">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-lightbox" onClick={() => setSelectedItem(null)}>×</button>
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.url} alt={selectedItem.title} />
              ) : selectedItem.type === 'youtube' ? (
                <div className="lightbox-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedItem.youtubeId}?autoplay=1&rel=0`}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video src={selectedItem.url} controls autoPlay />
              )}
              <div className="lightbox-info">
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
