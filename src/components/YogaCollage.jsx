import React from 'react';

const collagePhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    alt: 'Sunset yoga flow',
    label: 'Sunset Flow',
    rotate: '-3deg',
    zIndex: 3
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    alt: 'Meditation session',
    label: 'Meditation',
    rotate: '2deg',
    zIndex: 2
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    alt: 'Group yoga together',
    label: 'Together',
    rotate: '-1deg',
    zIndex: 1
  }
];

export default function YogaCollage() {
  return (
    <section className="yoga-collage-section">
      <div className="collage-glow-bg"></div>
      <div className="container">
        <div className="collage-header">
          <span className="collage-eyebrow">OUR COMMUNITY</span>
          <h2 className="collage-title">Moments of Serenity</h2>
        </div>
        
        <div className="photo-collage">
          {collagePhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="photo-card"
              style={{
                '--rotate': photo.rotate,
                '--z-index': photo.zIndex,
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="photo-wrapper">
                <img src={photo.url} alt={photo.alt} />
                <div className="overlay">
                  <span className="photo-label">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}