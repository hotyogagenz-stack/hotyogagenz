import { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll Parallax Layers Component
 * Creates depth illusion with multiple layers moving at different speeds during scroll
 * Provides an immersive, premium scrolling experience
 */

// Create context for scroll position sharing
const ScrollParallaxContext = createContext({
  scrollY: 0,
  registerLayer: () => {},
  unregisterLayer: () => {},
});

// Throttle function for performance optimization (60fps = ~16ms)
const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Custom hook to access scroll parallax context
export const useScrollParallax = () => {
  const context = useContext(ScrollParallaxContext);
  return {
    scrollY: context.scrollY,
  };
};

// Helper function to calculate parallax offset
export const calculateParallaxOffset = (scrollY, speed, direction, elementTop = 0) => {
  const baseOffset = scrollY * speed;
  const calculatedOffset = direction === 'down' ? baseOffset : -baseOffset;
  return elementTop + calculatedOffset;
};

/**
 * ParallaxContainer
 * Wrapper component that manages scroll position and provides context to child layers
 */
export const ParallaxContainer = ({ 
  children, 
  className = '', 
  style = {},
  throttleMs = 16,
  disabled = false,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef(null);

  // Handle scroll with requestAnimationFrame for smooth performance
  const handleScroll = useCallback(() => {
    if (disabled) return;
    
    const currentScrollY = window.scrollY;
    
    // Use RAF for smooth updates
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
      setIsScrolling(true);
      
      // Clear scrolling state after scroll ends
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    });
  }, [disabled]);

  // Throttled scroll handler for performance
  const throttledHandleScroll = useMemo(
    () => throttle(handleScroll, throttleMs),
    [handleScroll, throttleMs]
  );

  useEffect(() => {
    // Initial scroll position
    setScrollY(window.scrollY);
    
    // Add scroll listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Handle resize to recalculate
    const handleResize = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      // Cleanup
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [throttledHandleScroll]);

  const contextValue = useMemo(
    () => ({
      scrollY,
      isScrolling,
      registerLayer: () => {},
      unregisterLayer: () => {},
    }),
    [scrollY, isScrolling]
  );

  return (
    <ScrollParallaxContext.Provider value={contextValue}>
      <div 
        className={`parallax-container ${className}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        {children}
      </div>
    </ScrollParallaxContext.Provider>
  );
};

/**
 * ParallaxLayer
 * Individual moving layer component
 * Moves based on scroll position multiplied by speed factor
 */
export const ParallaxLayer = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  style = {},
  enabled = true,
  transformTemplate,
  useMotion = false,
}) => {
  const context = useContext(ScrollParallaxContext);
  const layerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementTopRef = useRef(0);

  // Calculate parallax offset based on scroll position
  useEffect(() => {
    if (!enabled) return;

    // Get element's initial position relative to viewport
    const updateElementTop = () => {
      if (layerRef.current) {
        const rect = layerRef.current.getBoundingClientRect();
        elementTopRef.current = rect.top + window.scrollY;
      }
    };

    updateElementTop();
    window.addEventListener('resize', updateElementTop);

    return () => {
      window.removeEventListener('resize', updateElementTop);
    };
  }, [enabled]);

  // Animate based on scroll
  useEffect(() => {
    if (!enabled) return;

    const calculateOffset = () => {
      const scrollY = context.scrollY;
      const elementTop = elementTopRef.current;
      const relativeScrollY = scrollY - elementTop;
      
      let newOffsetY;
      
      if (direction === 'down') {
        newOffsetY = relativeScrollY * speed;
      } else {
        newOffsetY = -relativeScrollY * speed;
      }
      
      setOffsetY(newOffsetY);
    };

    // Use RAF for smooth animations
    const animate = () => {
      calculateOffset();
      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [context.scrollY, speed, direction, enabled]);

  // Check if element is in viewport for optimization
  useEffect(() => {
    if (!enabled || !layerRef.current) return;

    const checkVisibility = () => {
      if (layerRef.current) {
        const rect = layerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [enabled]);

  const layerStyle = {
    willChange: enabled ? 'transform' : 'auto',
    transform: enabled 
      ? `translate3d(0, ${offsetY}px, 0)` 
      : 'none',
    ...style,
  };

  // Use Framer Motion for entrance animations if enabled
  if (useMotion) {
    return (
      <motion.div
        ref={layerRef}
        className={`parallax-layer ${className}`}
        style={layerStyle}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      ref={layerRef}
      className={`parallax-layer ${className}`}
      style={layerStyle}
    >
      {children}
    </div>
  );
};

/**
 * ParallaxImage
 * Specialized parallax component for images
 * Includes scale effect on scroll for zoom illusion
 */
export const ParallaxImage = ({
  src,
  alt = '',
  speed = 0.5,
  scale = 1.0,
  direction = 'up',
  className = '',
  style = {},
  enabled = true,
  loading = 'lazy',
  aspectRatio = '16/9',
  useMotion = false,
  motionVariants,
}) => {
  const context = useContext(ScrollParallaxContext);
  const imageRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [imageScale, setImageScale] = useState(1);
  const elementTopRef = useRef(0);

  // Calculate parallax and scale based on scroll
  useEffect(() => {
    if (!enabled) {
      setImageScale(scale);
      return;
    }

    const calculateEffects = () => {
      const scrollY = context.scrollY;
      
      // Get element position
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        elementTopRef.current = rect.top + window.scrollY;
      }

      const elementTop = elementTopRef.current;
      const relativeScrollY = scrollY - elementTop;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset
      let newOffsetY;
      if (direction === 'down') {
        newOffsetY = relativeScrollY * speed;
      } else {
        newOffsetY = -relativeScrollY * speed;
      }
      
      // Calculate scale based on scroll progress through the element
      const scrollProgress = relativeScrollY / windowHeight;
      const scaleFactor = 1 + (scrollProgress * (scale - 1));
      const newScale = Math.max(1, Math.min(scale, scaleFactor));
      
      setOffsetY(newOffsetY);
      setImageScale(newScale);
    };

    const rafId = requestAnimationFrame(calculateEffects);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [context.scrollY, speed, scale, direction, enabled]);

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: aspectRatio,
    ...style,
  };

  const imageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    willChange: enabled ? 'transform' : 'auto',
    transform: enabled 
      ? `translate3d(-50%, calc(-50% + ${offsetY}px), 0) scale(${imageScale})`
      : 'translate3d(-50%, -50%, 0) scale(1)',
    transition: 'transform 0.1s linear',
    ...style,
  };

  const defaultMotionVariants = {
    initial: { opacity: 0, scale: 1.2 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const combinedVariants = motionVariants 
    ? { ...defaultMotionVariants, ...motionVariants }
    : defaultMotionVariants;

  // Use Framer Motion for entrance animations if enabled
  if (useMotion) {
    return (
      <motion.div
        ref={imageRef}
        className={`parallax-image-container ${className}`}
        style={imageContainerStyle}
        {...combinedVariants}
      >
        <img
          src={src}
          alt={alt}
          className="parallax-image"
          style={imageStyle}
          loading={loading}
        />
      </motion.div>
    );
  }

  return (
    <div
      ref={imageRef}
      className={`parallax-image-container ${className}`}
      style={imageContainerStyle}
    >
      <img
        src={src}
        alt={alt}
        className="parallax-image"
        style={imageStyle}
        loading={loading}
      />
    </div>
  );
};

/**
 * ParallaxText
 * Specialized parallax component for text with depth effect
 */
export const ParallaxText = ({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
  style = {},
  enabled = true,
  stagger = true,
}) => {
  const context = useContext(ScrollParallaxContext);
  const textRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const elementTopRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const calculateEffects = () => {
      const scrollY = context.scrollY;
      
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        elementTopRef.current = rect.top + window.scrollY;
      }

      const elementTop = elementTopRef.current;
      const relativeScrollY = scrollY - elementTop;
      const windowHeight = window.innerHeight;
      
      let newOffsetY;
      if (direction === 'down') {
        newOffsetY = relativeScrollY * speed;
      } else {
        newOffsetY = -relativeScrollY * speed;
      }
      
      // Fade based on scroll position
      const fadeStart = windowHeight * 0.5;
      const fadeProgress = Math.abs(relativeScrollY) / fadeStart;
      const newOpacity = Math.max(0.3, Math.min(1, 1 - fadeProgress * 0.5));
      
      setOffsetY(newOffsetY);
      setOpacity(newOpacity);
    };

    const rafId = requestAnimationFrame(calculateEffects);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [context.scrollY, speed, direction, enabled]);

  return (
    <div
      ref={textRef}
      className={`parallax-text ${className}`}
      style={{
        willChange: enabled ? 'transform, opacity' : 'auto',
        transform: enabled ? `translate3d(0, ${offsetY}px, 0)` : 'none',
        opacity: opacity,
        ...style,
      }}
    >
      {stagger ? (
        <span className="parallax-text-stagger">
          {children}
        </span>
      ) : children}
    </div>
  );
};

/**
 * ParallaxBackground
 * Full-width background with parallax effect
 * Perfect for hero sections
 */
export const ParallaxBackground = ({
  children,
  src,
  speed = 0.3,
  direction = 'up',
  overlay = true,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  className = '',
  style = {},
  enabled = true,
}) => {
  const context = useContext(ScrollParallaxContext);
  const backgroundRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    if (!enabled) return;

    const calculateOffset = () => {
      const scrollY = context.scrollY;
      let newOffsetY;
      
      if (direction === 'down') {
        newOffsetY = scrollY * speed;
      } else {
        newOffsetY = -scrollY * speed;
      }
      
      setOffsetY(newOffsetY);
      
      // Set minimum height to viewport
      if (backgroundRef.current) {
        const minHeight = window.innerHeight;
        const currentHeight = backgroundRef.current.offsetHeight;
        if (currentHeight < minHeight) {
          setHeight(`${minHeight}px`);
        }
      }
    };

    const rafId = requestAnimationFrame(calculateOffset);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [context.scrollY, speed, direction, enabled]);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: height,
    overflow: 'hidden',
    ...style,
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '120%', // Extra height for parallax movement
    objectFit: 'cover',
    willChange: enabled ? 'transform' : 'auto',
    transform: enabled 
      ? `translate3d(0, ${offsetY}px, 0)`
      : 'none',
    ...style,
  };

  return (
    <div
      ref={backgroundRef}
      className={`parallax-background ${className}`}
      style={containerStyle}
    >
      {src && (
        <img
          src={src}
          alt=""
          className="parallax-background-image"
          style={backgroundImageStyle}
          aria-hidden="true"
        />
      )}
      {overlay && (
        <div 
          className="parallax-background-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: overlayColor,
            pointerEvents: 'none',
          }}
        />
      )}
      <div 
        className="parallax-background-content"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * ScrollProgress
 * Component that shows scroll progress with parallax effect
 */
export const ScrollProgress = ({
  className = '',
  height = 4,
  color = 'var(--color-primary, #FF6B35)',
  backgroundColor = 'var(--color-surface-light, #f0f0f0)',
  style = {},
  enabled = true,
}) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const calculateProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    const throttledProgress = throttle(calculateProgress, 16);
    window.addEventListener('scroll', throttledProgress, { passive: true });
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', throttledProgress);
    };
  }, [enabled]);

  return (
    <div
      ref={progressRef}
      className={`scroll-progress ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: `${height}px`,
        backgroundColor: backgroundColor,
        zIndex: 9999,
        ...style,
      }}
    >
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: color,
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
};

export default {
  ParallaxContainer,
  ParallaxLayer,
  ParallaxImage,
  ParallaxText,
  ParallaxBackground,
  ScrollProgress,
  useScrollParallax,
  calculateParallaxOffset,
};