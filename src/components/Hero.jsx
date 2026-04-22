import React, { useState, useEffect, useRef } from 'react';
import Starfield from './Starfield';
import FloatingCrystals from './FloatingCrystals';
import { FadeLeft, FadeRight, FloatingBlob } from './animations';
import { ParallaxContainer, ParallaxLayer } from './ScrollParallax';

// Mouse Following Glow Orb Component
function MouseGlowOrb() {
  const orbRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    
    const animate = () => {
      // Smooth follow with lerp
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      
      currentRef.current.x += dx * 0.08;
      currentRef.current.y += dy * 0.08;
      
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div 
      ref={orbRef} 
      className="mouse-glow-orb"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: 0,
        top: 0,
      }}
    >
      <div className="orb-glow inner" style={{ background: 'transparent' }}></div>
      <div className="orb-glow middle" style={{ background: 'transparent' }}></div>
      <div className="orb-glow outer" style={{ background: 'transparent' }}></div>
    </div>
  );
}

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
      <MouseGlowOrb />
      <ParallaxContainer style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {/* Floating Crystals for Light Mode */}
        <FloatingCrystals />
        
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

        {/* Parallax background decorations - slower layer */}
        <ParallaxLayer speed={0.3} direction="up" className="parallax-bg-layer">
          {/* Glowing gradient orb */}
          <FloatingBlob className="glowing-orb">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </FloatingBlob>
        </ParallaxLayer>

        {/* Breathing circles - medium parallax */}
        <ParallaxLayer speed={0.2} direction="up" className="parallax-breath-layer">
          <div className="breathing-circles">
            <div className="breath-circle" style={{ transform: `scale(${breathScale})` }}></div>
            <div className="breath-circle delay-1" style={{ transform: `scale(${breathScale})` }}></div>
            <div className="breath-circle delay-2" style={{ transform: `scale(${breathScale})` }}></div>
          </div>
        </ParallaxLayer>

        {/* Calm animated waves - fastest parallax */}
        <ParallaxLayer speed={0.15} direction="up" className="parallax-waves-layer">
          <div className="calm-waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </ParallaxLayer>
      </ParallaxContainer>

      {/* Floating yoga girl illustration */}
      <FadeRight delay={0.2} className="floating-yoga">
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
      </FadeRight>

      <FadeLeft delay={0} className="hero-content-container">
        <p className="hero-subtitle">Transform Your Body & Mind</p>
        <h1 className="hero-main-title">
          Hot Yoga at June Flint<br/>Discover Your Best Self
        </h1>
        <p className="hero-description">
          Experience the transformative power of hot yoga in our heated studio. Build flexibility, reduce stress, and join a supportive community.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary">Book Your First Class</button>
          <button className="btn btn-secondary" onClick={onExplore}>
            Explore Classes
          </button>
        </div>
      </FadeLeft>
    </section>
  );
}
