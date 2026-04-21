import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Join({ theme, onThemeToggle }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
    if (formData.password === formData.confirmPassword) {
      // Proceed with registration
      navigate('/login');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
  {/* Minimal Background (no decorations) */}
  <div className="auth-background"></div>

      {/* Header */}
      <header className="auth-header">
        <div className="auth-logo">
          <div className="auth-logo-icon"></div>
          <span>JUNE FLINT</span>
        </div>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </header>

      {/* Main Content */}
      <main className="auth-main">
        <motion.div
          className="auth-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Branding */}
          <motion.div className="auth-branding" variants={itemVariants}>
            <div className="auth-brand-content">
              <h1 className="auth-brand-title">Join Our Community</h1>
              <p className="auth-brand-text">
                Begin your transformative wellness journey with June Flint
              </p>
              <div className="auth-features">
                <div className="auth-feature-item">
                  <span>Free first class</span>
                </div>
                <div className="auth-feature-item">
                  <span>Personalized plans</span>
                </div>
                <div className="auth-feature-item">
                  <span>Community support</span>
                </div>
              </div>
            </div>
            {/* no decorative shapes */}
          </motion.div>

          {/* Right Side - Form Card */}
          <motion.div className="auth-card" variants={itemVariants}>
            <div className="auth-card-header">
              <h2 className="auth-card-title">Create Account</h2>
              <p className="auth-card-subtitle">Start your wellness journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="auth-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="auth-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="auth-input"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="auth-input"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-options">
                <label className="auth-checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="auth-checkbox"
                    required
                  />
                  <span>I agree to the <a href="#terms" className="auth-link-inline">Terms of Service</a> and <a href="#privacy" className="auth-link-inline">Privacy Policy</a></span>
                </label>
              </div>

              <button type="submit" className="auth-btn auth-btn-primary">
                <span>Create Account</span>
                <svg className="auth-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            {/* social sign-up removed for minimal professional UI */}

            <p className="auth-footer-text">
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="auth-footer">
        <p>&copy; 2024 June Flint. All rights reserved.</p>
      </footer>
    </div>
  );
}
