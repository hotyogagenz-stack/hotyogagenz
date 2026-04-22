import React, { useRef, useMemo, useEffect, useState } from 'react';

export default function Starfield() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Generate star data with varying sizes and depths - enhanced for 3D effect with cursor
  const stars = useMemo(() => {
    const starArray = [];
    const numStars = 500;
    
    for (let i = 0; i < numStars; i++) {
      const depth = Math.random();
      // More dramatic depth variation for stronger 3D effect
      const depthPow = Math.pow(depth, 0.8);
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: depth,
        // Nearer stars appear bigger for 3D depth illusion
        size: 1.5 + depthPow * 3.5,
        depth: depth,
        // Dimmer overall opacity - reduced from 0.5-1.0 to 0.25-0.55
        opacity: 0.25 + depthPow * 0.3,
        twinkleSpeed: Math.random() * 4 + 2,
        twinkleDelay: Math.random() * 4,
        // 3D sphere properties for each star
        sphereSize: 0.5 + depthPow * 1.5,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        rotateZ: Math.random() * 360,
      });
    }
    return starArray;
  }, []);

  // Track mouse movement for enhanced 3D parallax effect following cursor
  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Enhanced range for stronger 3D effect
        targetX = (e.clientX - rect.left - centerX) / centerX;
        targetY = (e.clientY - rect.top - centerY) / centerY;
      }
    };

    const animate = () => {
      // Smooth easing for cursor following effect
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculate star position with enhanced 3D parallax following cursor
  const getStarStyle = (star) => {
    // Stronger depth variation for more dramatic 3D effect
    const depthFactor = Math.pow(star.depth, 1.2);
    // Increased movement range for cursor following - more movement = stronger parallax
    const offsetX = mousePos.x * 80 * depthFactor;
    const offsetY = mousePos.y * 80 * depthFactor;
    
    // 3D perspective transform based on cursor position
    const perspectiveScale = 0.3 + star.depth * 0.7;
    const perspectiveRotateX = mousePos.y * 25 * depthFactor;
    const perspectiveRotateY = mousePos.x * 25 * depthFactor;
    
    return {
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: star.opacity,
      animationDuration: `${star.twinkleSpeed}s`,
      animationDelay: `${star.twinkleDelay}s`,
      // Enhanced 3D transform that follows cursor
      transform: `translate3d(${offsetX}px, ${offsetY}px, 0) perspective(1000px) rotateX(${perspectiveRotateX}deg) rotateY(${perspectiveRotateY}deg) scale(${perspectiveScale})`,
      zIndex: Math.floor(star.depth * 100),
      transformOrigin: 'center center',
    };
  };

  return (
    <div className="starfield-container" ref={containerRef}>
      {/* Nebula glow layers for depth */}
      <div className="starfield-nebula nebula-1"></div>
      <div className="starfield-nebula nebula-2"></div>
      <div className="starfield-nebula nebula-3"></div>
      
      {/* 3D Star layers - Far stars (slowest parallax) */}
      <div className="starfield-layer layer-far">
        {stars.filter(s => s.depth < 0.3).map((star) => (
          <div
            key={`far-${star.id}`}
            className="starfield-star star-far"
            style={getStarStyle(star)}
          />
        ))}
      </div>
      
      {/* Mid stars */}
      <div className="starfield-layer layer-mid">
        {stars.filter(s => s.depth >= 0.3 && s.depth < 0.7).map((star) => (
          <div
            key={`mid-${star.id}`}
            className="starfield-star star-mid"
            style={getStarStyle(star)}
          />
        ))}
      </div>
      
      {/* Near stars (fastest parallax) */}
      <div className="starfield-layer layer-near">
        {stars.filter(s => s.depth >= 0.7).map((star) => (
          <div
            key={`near-${star.id}`}
            className="starfield-star star-near"
            style={getStarStyle(star)}
          />
        ))}
      </div>
      
      {/* Floating dust particles for atmosphere */}
      <div className="starfield-dust">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`dust-${i}`}
            className="dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}