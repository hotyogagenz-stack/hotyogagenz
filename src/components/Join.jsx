import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import authBg from '../assets/auth-bg.png';

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
    console.log('Registration attempt:', formData);
    if (formData.password === formData.confirmPassword) {
      navigate('/login');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={`auth-page ${theme}`}>
      <div className="auth-background-layer"></div>
      
      {/* Header */}
      <header className="auth-header">
        <Link to="/" className="auth-logo">
          <div className="auth-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2"/>
              <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>JUNE FLINT</span>
        </Link>
        <div className="auth-header-actions">
          <Link to="/" className="back-home-link">
            <span>Back to Home</span>
          </Link>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </header>

      {/* Main Content */}
      <main className="auth-main">
        <motion.div
          className="auth-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Visual Branding */}
          <motion.div className="auth-branding-visual" variants={itemVariants}>
            <div className="auth-visual-overlay"></div>
            <img src={authBg} alt="Yoga Studio" className="auth-visual-img" />
            <div className="auth-visual-content">
              <h1 className="auth-visual-title">Begin Your Journey</h1>
              <p className="auth-visual-text">
                Join our community of mindfulness and discover a more balanced, peaceful you.
              </p>
              <div className="auth-visual-features">
                <div className="v-feature">
                  <span className="v-dot"></span>
                  <span>Premium Guided Classes</span>
                </div>
                <div className="v-feature">
                  <span className="v-dot"></span>
                  <span>Holistic Wellness Plans</span>
                </div>
                <div className="v-feature">
                  <span className="v-dot"></span>
                  <span>Supportive Community</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form Card */}
          <motion.div className="auth-card" variants={itemVariants}>
            <div className="auth-card-header">
              <h2 className="auth-card-title">Create Account</h2>
              <p className="auth-card-subtitle">Start your 14-day free trial today</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="auth-input"
                  placeholder="John Doe"
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
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-row">
                <div className="auth-form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="auth-input"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-form-group">
                  <label htmlFor="confirmPassword">Confirm</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="auth-input"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                  <span>I agree to the <a href="#terms" className="terms-link">Terms</a> and <a href="#privacy" className="terms-link">Privacy</a></span>
                </label>
              </div>

              <button type="submit" className="auth-btn auth-btn-primary">
                <span>Create Account</span>
                <svg className="auth-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <p className="auth-footer-text">
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </main>

      <footer className="auth-page-footer">
        <p>&copy; 2024 June Flint Wellness. All rights reserved.</p>
      </footer>
    </div>
  );
}

