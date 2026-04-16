import React, { useState, useEffect } from 'react';
import Starfield from './Starfield';

export default function Hero({ onExplore }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;
  const [breathScale, setBreathScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Breathing animation effect
  useEffect(() => {
    const breathInterval = setInterval(() => {
      setBreathScale(prev => prev === 1 ? 1.15 : 1);
    }, 4000);
    return () => clearInterval(breathInterval);
  }, []);

  return (
    <section className="hero-section full-screen" id="home">
      
      {/* Background slides */}
      <div className="hero-background">
        <div className={`bg-slide s1 ${activeSlide === 0 ? 'active' : ''}`}></div>
        <div className={`bg-slide s2 ${activeSlide === 1 ? 'active' : ''}`}></div>
        <div className={`bg-slide s3 ${activeSlide === 2 ? 'active' : ''}`}></div>
        <div className={`bg-slide s4 ${activeSlide === 3 ? 'active' : ''}`}></div>
        <div className={`bg-slide s5 ${activeSlide === 4 ? 'active' : ''}`}></div>
        <div className={`bg-slide s6 ${activeSlide === 5 ? 'active' : ''}`}></div>
      </div>

      {/* Starfield component for starry background effect */}
      <Starfield />

      {/* Glowing gradient orb */}
      <div className="glowing-orb">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Breathing circles animation */}
      <div className="breathing-circles">
        <div className="breath-circle" style={{ transform: `scale(${breathScale})` }}></div>
        <div className="breath-circle delay-1" style={{ transform: `scale(${breathScale})` }}></div>
        <div className="breath-circle delay-2" style={{ transform: `scale(${breathScale})` }}></div>
      </div>

      {/* Calm animated waves */}
      <div className="calm-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Floating yoga girl illustration */}
      <div className="floating-yoga">
        <div className="yoga-girl">
          <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yoga pose silhouette */}
            <circle cx="100" cy="60" r="30" fill="url(#gradient1)" opacity="0.9"/>
            <path d="M100 95 L100 150" stroke="url(#gradient1)" strokeWidth="8" strokeLinecap="round"/>
            {/* Body in yoga pose */}
            <path d="M70 130 Q100 180 130 130" stroke="url(#gradient1)" strokeWidth="10" strokeLinecap="round" fill="none"/>
            <path d="M55 170 L100 200 L145 170" stroke="url(#gradient1)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            {/* Arms */}
            <path d="M60 110 L40 80" stroke="url(#gradient1)" strokeWidth="6" strokeLinecap="round"/>
            <path d="M140 110 L160 80" stroke="url(#gradient1)" strokeWidth="6" strokeLinecap="round"/>
            {/* Legs in pose */}
            <path d="M100 200 L70 260" stroke="url(#gradient1)" strokeWidth="8" strokeLinecap="round"/>
            <path d="M100 200 L130 260" stroke="url(#gradient1)" strokeWidth="8" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc"/>
                <stop offset="100%" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="floating-particle p1"></div>
        <div className="floating-particle p2"></div>
        <div className="floating-particle p3"></div>
      </div>

      <div className="hero-content-container">
        <p className="hero-subtitle">A safe Gen Z wellness space</p>
        <h1 className="hero-main-title">
          Talk. Heal. Breathe.<br/>You're not alone.
        </h1>
        <p className="hero-description">
          A safe Gen Z wellness space for stress relief, hot yoga, emotional support, and real conversations.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary">Start Talking</button>
          <button className="btn-secondary" onClick={onExplore}>
            Explore Healing
          </button>
        </div>
      </div>
    </section>
  );
}
