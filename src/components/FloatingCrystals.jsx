import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Floating 3D Crystal Shapes for Light Mode
 * Professional magic-like geometric elements with glass effect
 */

// Individual Crystal Shape Component
function Crystal({ className, delay, size, shape }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for mouse follow
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // 3D rotation based on mouse position
  const rotateX = useTransform(springY, [-200, 200], [-15, 15]);
  const rotateY = useTransform(springX, [-200, 200], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.parentElement.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        mouseX.set(e.clientX - rect.left - centerX);
        mouseY.set(e.clientY - rect.top - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      animate={{
        y: [0, -30, 0],
        rotateZ: [0, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay * 2,
      }}
    >
      <div className={`crystal-inner shape-${shape}`} style={{ width: size, height: size }}>
        <div className="crystal-face front"></div>
        <div className="crystal-face back"></div>
        <div className="crystal-face left"></div>
        <div className="crystal-face right"></div>
        <div className="crystal-face top"></div>
        <div className="crystal-face bottom"></div>
      </div>
    </motion.div>
  );
}

// Floating Diamond Shape (CSS based)
function FloatingDiamond({ className, delay, size }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -40, 0],
        rotate: [45, 55, 45],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8 + delay * 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      <div className="diamond-shape" style={{ width: size, height: size }}>
        <div className="diamond-shine"></div>
      </div>
    </motion.div>
  );
}

// Floating Hexagon Shape
function FloatingHexagon({ className, delay, size }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -35, 0],
        rotate: [0, 30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 7 + delay * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay * 1.5,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" className="hexagon-svg">
        <defs>
          <linearGradient id={`hexGrad${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
        </defs>
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke={`url(#hexGrad${delay})`}
          strokeWidth="2"
        />
        <polygon
          points="50,20 80,35 80,65 50,80 20,65 20,35"
          fill="rgba(139, 92, 246, 0.1)"
        />
      </svg>
    </motion.div>
  );
}

// Floating Ring/Donut Shape
function FloatingRing({ className, delay, size }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -25, 0],
        rotate: [0, 20, 0],
        rotateX: [0, 180, 360],
      }}
      transition={{
        duration: 10 + delay * 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay * 0.8,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" className="ring-svg">
        <defs>
          <linearGradient id={`ringGrad${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={`url(#ringGrad${delay})`}
          strokeWidth="8"
          strokeDasharray="10 5"
        />
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke={`url(#ringGrad${delay})`}
          strokeWidth="4"
          strokeDasharray="5 10"
        />
      </svg>
    </motion.div>
  );
}

// Orb with 3D depth effect
function FloatingOrb({ className, delay, size }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -45, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 9 + delay * 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay * 1.2,
      }}
    >
      <div className="orb-3d" style={{ width: size, height: size }}>
        <div className="orb-inner-glow"></div>
        <div className="orb-surface"></div>
        <div className="orb-highlight"></div>
      </div>
    </motion.div>
  );
}

// Main FloatingCrystals Component
export default function FloatingCrystals() {
  return (
    <div className="floating-crystals-container">
      {/* Large 3D Orb */}
      <FloatingOrb className="crystal-orb crystal-1" delay={0} size="180px" />
      
      {/* Medium Diamond */}
      <FloatingDiamond className="crystal-diamond crystal-2" delay={0.5} size="80px" />
      
      {/* Small Crystal Cube */}
      <Crystal className="crystal-cube crystal-3" delay={1} size="60px" shape="cube" />
      
      {/* Hexagon */}
      <FloatingHexagon className="crystal-hexagon crystal-4" delay={0.8} size="100px" />
      
      {/* Small Diamond */}
      <FloatingDiamond className="crystal-diamond crystal-5" delay={1.5} size="40px" />
      
      {/* Ring */}
      <FloatingRing className="crystal-ring crystal-6" delay={0.3} size="90px" />
      
      {/* Small 3D Orb */}
      <FloatingOrb className="crystal-orb crystal-7" delay={1.2} size="60px" />
      
      {/* Tiny Cube */}
      <Crystal className="crystal-cube crystal-8" delay={0.7} size="35px" shape="cube" />
      
      {/* Medium Hexagon */}
      <FloatingHexagon className="crystal-hexagon crystal-9" delay={1.8} size="50px" />
      
      {/* Small Ring */}
      <FloatingRing className="crystal-ring crystal-10" delay={2} size="45px" />
      
      {/* Floating particles/dots */}
      <div className="crystal-particle particle-1"></div>
      <div className="crystal-particle particle-2"></div>
      <div className="crystal-particle particle-3"></div>
      <div className="crystal-particle particle-4"></div>
      <div className="crystal-particle particle-5"></div>
    </div>
  );
}