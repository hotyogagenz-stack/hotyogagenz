import { motion } from 'framer-motion';

// Snappy deceleration easing - exact "snappy" curve
const EASE = [0.22, 1, 0.36, 1];

// FadeUp - Elements fade + slide up as you scroll down
export const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

// FadeLeft - Hero text slides from left
export const FadeLeft = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

// FadeRight - Hero image slides from right
export const FadeRight = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

// ScaleUp - Elements scale up on reveal
export const ScaleUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

// FadeInFromLeft - Elements slide in from left while scrolling
export const FadeInFromLeft = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

// StaggerContainer - Cards appear one after another with stagger
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.12 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={{
      visible: { transition: { staggerChildren: staggerDelay } },
      hidden: {},
    }}
  >
    {children}
  </motion.div>
);

// StaggerItem - Individual item in stagger container
export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    className={className}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      hidden: { opacity: 0, y: 30 },
    }}
  >
    {children}
  </motion.div>
);

// FloatingBlob - Glowing orb that floats up/down in infinite loop
export const FloatingBlob = ({ children, className = '' }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

// HoverLift - Cards rise 6px on hover with slight scale
export const HoverLift = ({ children, className = '' }) => (
  <motion.div
    className={className}
    whileHover={{
      y: -6,
      scale: 1.02,
      transition: { duration: 0.3, ease: EASE },
    }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);