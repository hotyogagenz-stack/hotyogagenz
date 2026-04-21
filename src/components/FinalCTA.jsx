import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="final-cta-section">
      <div className="cta-glow-bg">
        <div className="glow-orb cta-orb-1"></div>
        <div className="glow-orb cta-orb-2"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-badge"
          >
            <span className="cta-badge-text">First Class FREE</span>
          </motion.div>

          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Begin Your <span className="cta-title-accent">Hot Yoga Journey</span>
          </motion.h2>

          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the transformative power of hot yoga and discover a new version of yourself.
            <span className="cta-highlight"> 60-minute heated session awaits you.</span>
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn-primary btn-cta btn-cta-primary" onClick={() => navigate('/hot-yoga')}>
              <span className="btn-text">Book Your First Class</span>
              <span className="btn-badge">FREE</span>
            </button>
            <button className="btn-secondary btn-cta" onClick={() => navigate('/hot-yoga')}>
              View Class Schedule
            </button>
          </motion.div>

          <motion.p
            className="cta-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ✓ No commitment required  •  ✓ 60-minute session  •  ✓ All levels welcome
          </motion.p>
        </div>
      </div>
    </section>
  );
}