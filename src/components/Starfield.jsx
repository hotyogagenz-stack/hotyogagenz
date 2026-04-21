import React, { useRef, useMemo, useEffect, useState } from 'react';

export default function Starfield() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Generate star data with varying sizes and depths
  const stars = useMemo(() => {
    const starArray = [];
    const numStars = 300;
    
    for (let i = 0; i < numStars; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5, // Bigger stars: 1.5-4.5px
        depth: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 - affects parallax intensity
        opacity: Math.random() * 0.3 + 0.85, // Brighter: 0.85-1.0
        twinkleSpeed: Math.random() * 2 + 1,
        twinkleDelay: Math.random() * 2,
      });
    }
    return starArray;
  }, []);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        
        setMousePos({ x: mouseX, y: mouseY });
      }
    };

    // Attach to window to bypass pointer-events: none on container
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate star position with parallax offset
  const getStarStyle = (star) => {
    const offsetX = mousePos.x * star.depth * 0.5;
    const offsetY = mousePos.y * star.depth * 0.5;
    
    return {
      left: `${star.x + offsetX / 10}%`,
      top: `${star.y + offsetY / 10}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: star.opacity,
      animationDuration: `${star.twinkleSpeed}s`,
      animationDelay: `${star.twinkleDelay}s`,
    };
  };

  return (
    <div className="starfield-container" ref={containerRef}>
      {/* Nebula glow layer */}
      <div className="starfield-nebula"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="starfield-star"
          style={getStarStyle(star)}
        />
      ))}
      
      {/* Distant tiny stars (more numerous, creates depth) */}
      {stars.slice(0, 100).map((star) => (
        <div
          key={`tiny-${star.id}`}
          className="starfield-star tiny"
          style={{
            ...getStarStyle(star),
            left: `${star.x + 20 + mousePos.x * star.depth * 0.3}%`,
            top: `${star.y + 20 + mousePos.y * star.depth * 0.3}%`,
            width: '1px',
            height: '1px',
            opacity: star.opacity * 0.7,
          }}
        />
      ))}
    </div>
  );
}