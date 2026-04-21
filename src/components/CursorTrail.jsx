import React, { useRef, useEffect, useCallback, useState } from 'react';

/**
 * Cursor Glow Trail Effect Component
 * 
 * Creates magical glowing particles that follow the cursor in dark mode,
 * providing an immersive, premium feel for the yoga website.
 */
export default function CursorTrail({
  color = 'rgba(167, 139, 250, 0.8)', // Purple theme to match yoga branding
  particleCount = 30,
  particleSize = { min: 4, max: 8 },
  trailLength = 30,
  enableInDarkOnly = true
}) {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const isDarkModeRef = useRef(false);
  const [isActive, setIsActive] = useState(false);

  // Check if dark mode is enabled
  const checkDarkMode = useCallback(() => {
    if (!enableInDarkOnly) return true;
    return document.documentElement.classList.contains('dark') ||
           document.body.classList.contains('dark') ||
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, [enableInDarkOnly]);

  // Get random size within range
  const getRandomSize = useCallback(() => {
    if (typeof particleSize === 'number') return particleSize;
    return Math.random() * (particleSize.max - particleSize.min) + particleSize.min;
  }, [particleSize]);

  // Create a new particle at given position
  const createParticle = useCallback((x, y, index) => {
    const size = getRandomSize();
    // Random slight offset for organic feel
    const offsetX = (Math.random() - 0.5) * 2;
    const offsetY = (Math.random() - 0.5) * 2;
    
    return {
      id: index,
      x,
      y,
      offsetX,
      offsetY,
      size,
      opacity: 1,
      life: 0,
      element: null
    };
  }, [getRandomSize]);

  // Initialize particles pool
  const initParticles = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle(0, 0, i);
      particle.element = document.createElement('div');
      particle.element.className = 'cursor-trail-particle';
      particle.element.style.cssText = `
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        background: ${color};
        box-shadow: 
          0 0 ${particle.size * 2}px ${particle.size}px ${color},
          0 0 ${particle.size * 4}px ${color},
          0 0 ${particle.size * 6}px rgba(167, 139, 250, 0.5);
        transform: translate(${particle.x}px, ${particle.y}px);
        opacity: 0;
        mix-blend-mode: screen;
        z-index: 9999;
        transition: transform 0.1s ease-out, opacity 0.1s ease-out;
      `;
      particle.element.style.width = `${particle.size}px`;
      particle.element.style.height = `${particle.size}px`;
      container.appendChild(particle.element);
      particlesRef.current.push(particle);
    }
  }, [particleCount, color, createParticle]);

  // Update particle trail animation
  const animateTrail = useCallback(() => {
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const lastMouse = lastMouseRef.current;
    
    // Calculate distance from last mouse position
    const dx = mouse.x - lastMouse.x;
    const dy = mouse.y - lastMouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Only create particles if mouse has moved enough
    if (distance > 5) {
      // Find oldest particle or cycle through
      let oldestParticle = particles[0];
      let maxLife = -1;
      
      for (const particle of particles) {
        if (particle.life > maxLife) {
          maxLife = particle.life;
          oldestParticle = particle;
        }
      }
      
      // Recycle the oldest particle
      if (oldestParticle && maxLife > 0) {
        oldestParticle.x = mouse.x - oldestParticle.offsetX;
        oldestParticle.y = mouse.y - oldestParticle.offsetY;
        oldestParticle.life = trailLength;
        oldestParticle.opacity = 1;
        oldestParticle.size = getRandomSize();
      }
      
      // Update last mouse position
      lastMouseRef.current = { x: mouse.x, y: mouse.y };
    }
    
    // Update all particles
    for (const particle of particles) {
      if (particle.life > 0) {
        // Decay life and opacity
        particle.life--;
        particle.opacity = particle.life / trailLength;
        
        // Apply CSS for transform and opacity with easing
        if (particle.element) {
          const scale = 0.5 + (particle.opacity * 0.5);
          const blur = (1 - particle.opacity) * 4;
          
          particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px) scale(${scale})`;
          particle.element.style.opacity = particle.opacity;
          particle.element.style.filter = `blur(${blur}px)`;
        }
      }
    }
    
    // Continue animation loop
    if (isActive && isDarkModeRef.current) {
      animationRef.current = requestAnimationFrame(animateTrail);
    }
  }, [trailLength, isActive, getRandomSize]);

  // Handle mouse move
  const handleMouseMove = useCallback((e) => {
    if (!isActive || !isDarkModeRef.current) return;
    
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  }, [isActive]);

  // Handle visibility change (tab switching)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // Pause animation when tab is hidden
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    } else if (isDarkModeRef.current) {
      // Resume animation when tab becomes visible
      animationRef.current = requestAnimationFrame(animateTrail);
    }
  }, [animateTrail]);

  // Cleanup particles
  const cleanupParticles = useCallback(() => {
    const particles = particlesRef.current;
    const container = containerRef.current;
    
    if (container) {
      for (const particle of particles) {
        if (particle.element) {
          container.removeChild(particle.element);
        }
      }
    }
    particlesRef.current = [];
  }, []);

  // Initialize and set up effects
  useEffect(() => {
    // Initial dark mode check
    isDarkModeRef.current = checkDarkMode();
    setIsActive(isDarkModeRef.current);

    if (!isDarkModeRef.current) return;

    // Initialize particles
    initParticles();

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateTrail);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Watch for dark mode changes
    const darkModeObserver = new MutationObserver(() => {
      isDarkModeRef.current = checkDarkMode();
      setIsActive(isDarkModeRef.current);

      if (isDarkModeRef.current && !animationRef.current) {
        animationRef.current = requestAnimationFrame(animateTrail);
      } else if (!isDarkModeRef.current && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    });

    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      darkModeObserver.disconnect();
      cleanupParticles();
    };
  }, [
    checkDarkMode,
    initParticles,
    animateTrail,
    handleMouseMove,
    handleVisibilityChange,
    cleanupParticles
  ]);

  // Don't render container if not in dark mode and enableInDarkOnly is true
  if (!isActive && enableInDarkOnly) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className="cursor-trail-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
}