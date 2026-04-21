import React from 'react';

/**
 * GlassCard - A glassmorphism card component with frosted glass effect
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {number} props.blur - Backdrop blur intensity in pixels (default: 12)
 * @param {number} props.opacity - Background opacity (default: 0.1 for dark, 0.15 for light)
 * @param {string} props.border - Border color and width (default: rgba(255,255,255,0.1))
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card variant: 'dark' | 'light' (default: 'dark')
 * @param {boolean} props.hover - Enable hover effect
 * @param {string} props.radius - Border radius (default: '16px')
 * @param {string} props.shadow - Box shadow value (default: '0 8px 32px rgba(0, 0, 0, 0.3)')
 */
const GlassCard = ({
  children,
  blur = 12,
  opacity = 0.1,
  border = 'rgba(255, 255, 255, 0.1)',
  className = '',
  variant = 'dark',
  hover = false,
  radius = '16px',
  shadow = '0 8px 32px rgba(0, 0, 0, 0.3)',
  style = {},
  ...props
}) => {
  // Build dynamic class names
  const baseClass = 'glass-card';
  const variantClass = variant === 'light' ? 'glass-card-light' : 'glass-card-dark';
  const hoverClass = hover ? 'glass-card-hover' : '';
  
  const combinedClassName = [baseClass, variantClass, hoverClass, className]
    .filter(Boolean)
    .join(' ');

  // Dynamic styles based on props
  const dynamicStyles = {
    '--glass-blur': `${blur}px`,
    '--glass-opacity': opacity,
    '--glass-border': border,
    '--glass-radius': radius,
    '--glass-shadow': shadow,
  };

  return (
    <div 
      className={combinedClassName} 
      style={{ ...dynamicStyles, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * GlassModal - A glassmorphism modal overlay component
 */
export const GlassModal = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`glass-modal ${className}`} 
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * GlassNav - A glassmorphism navigation component
 */
export const GlassNav = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <nav 
      className={`glass-nav ${className}`} 
      style={style}
      {...props}
    >
      {children}
    </nav>
  );
};

export default GlassCard;