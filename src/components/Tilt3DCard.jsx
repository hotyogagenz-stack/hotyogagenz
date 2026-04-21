import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Tilt3DCard - A reusable 3D card component with tilt effect on hover
 * 
 * Features:
 * - Tracks mouse position relative to card center
 * - Applies CSS 3D transforms (rotateX, rotateY) based on cursor position
 * - Adds perspective depth effect (1000px)
 * - Includes subtle glow/shadow that follows the tilt
 * - Supports children prop for card content
 * - Smooth transition easing
 * - Touch device fallback (disables tilt on touch)
 * 
 * @param {React.ReactNode} children - Card content
 * @param {number} maxRotation - Maximum rotation in degrees (default: 10)
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @param {boolean} enableGlow - Enable glow effect (default: true)
 * @param {number} glowIntensity - Glow intensity 0-1 (default: 0.5)
 */
const Tilt3DCard = ({
  children,
  maxRotation = 10,
  className = '',
  style = {},
  enableGlow = true,
  glowIntensity = 0.5,
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const animationRef = useRef(null);

  // Check for touch device on mount
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  // Calculate tilt based on mouse position
  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current || isTouchDevice) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      // Get center of the card
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center (normalized -1 to 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Calculate rotation (inverted for natural feel)
      // When mouse moves right, card tilts right (positive rotateY)
      // When mouse moves down, card tilts toward viewer (positive rotateX)
      const rotateY = mouseX * maxRotation;
      const rotateX = -mouseY * maxRotation; // Invert for natural 3D feel

      setTransform({ rotateX, rotateY });
    },
    [maxRotation, isTouchDevice]
  );

  // Reset transform on mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  // Handle mouse enter
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Handle touch events - disable tilt on touch devices
  const handleTouchStart = useCallback(() => {
    if (isTouchDevice) return;
  }, [isTouchDevice]);

  const handleTouchMove = useCallback(() => {
    if (isTouchDevice) return;
  }, [isTouchDevice]);

  // Dynamic shadow/glow based on tilt
  const getShadowStyle = () => {
    if (!isHovered || !enableGlow) return {};

    const { rotateX, rotateY } = transform;
    
    // Calculate shadow offset based on tilt direction
    const shadowX = rotateY * 2;
    const shadowY = -rotateX * 2;
    
    // Calculate shadow blur and spread
    const blurRadius = 20 + Math.abs(rotateX) + Math.abs(rotateY);
    const spreadRadius = Math.max(0, (Math.abs(rotateX) + Math.abs(rotateY)) * 0.5);

    // Get appropriate color based on intensity
    const alpha = glowIntensity * 0.4;
    const color = `rgba(139, 92, 246, ${alpha})`; // Purple glow

    return {
      boxShadow: `
        ${shadowX}px ${shadowY}px ${blurRadius}px ${spreadRadius}px ${color},
        0 10px 40px rgba(0, 0, 0, 0.15)
      `,
    };
  };

  // Get glow overlay style
  const getGlowStyle = () => {
    if (!isHovered || !enableGlow) return { opacity: 0 };

    const { rotateX, rotateY } = transform;
    
    // Position glow based on tilt
    const glowX = 50 + rotateY * 2;
    const glowY = 50 - rotateX * 2;

    return {
      opacity: glowIntensity * 0.3,
      background: `radial-gradient(
        circle at ${glowX}% ${glowY}%,
        rgba(139, 92, 246, 0.3) 0%,
        transparent 50%
      )`,
    };
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-card ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Card Inner Container - applies the 3D transform */}
      <div
        className="tilt-3d-card-inner"
        style={{
          transform: isTouchDevice 
            ? 'none' 
            : `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: isHovered 
            ? 'transform 0.1s ease-out' 
            : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          ...getShadowStyle(),
        }}
      >
        {/* Glow Overlay */}
        {enableGlow && (
          <div
            className="tilt-3d-card-glow"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              transition: isHovered 
                ? 'opacity 0.15s ease-out' 
                : 'opacity 0.3s ease-in',
              zIndex: 1,
              ...getGlowStyle(),
            }}
          />
        )}
        
        {/* Card Content */}
        <div
          className="tilt-3d-card-content"
          style={{
            position: 'relative',
            zIndex: 2,
            transform: 'translateZ(0)', // GPU acceleration
          }}
        >
          {children}
        </div>
      </div>

      {/* Add component styles */}
      <style>{`
        .tilt-3d-card {
          display: inline-block;
          width: 100%;
          border-radius: 16px;
        }
        
        .tilt-3d-card-inner {
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* Dark mode adjustments handled via CSS variables */
        @media (prefers-color-scheme: dark) {
          .tilt-3d-card-inner {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.02) 100%
            );
          }
        }
      `}</style>
    </div>
  );
};

/**
 * HOC Wrapper - Add 3D tilt effect to any component
 * 
 * @param {React.ComponentType} WrappedComponent - Component to wrap
 * @param {object} options - Tilt configuration options
 * @returns {React.ComponentType} Wrapped component with tilt effect
 */
const withTilt3D = (WrappedComponent, options = {}) => {
  const TiltWrapper = ({ children, ...props }) => {
    return (
      <Tilt3DCard {...options} {...props}>
        {children || <WrappedComponent {...props} />}
      </Tilt3DCard>
    );
  };

  // Preserve display name for debugging
  TiltWrapper.displayName = `withTilt3D(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return TiltWrapper;
};

// Export for direct use
export { Tilt3DCard };

// Export HOC wrapper
export { withTilt3D };

// Default export
export default Tilt3DCard;
