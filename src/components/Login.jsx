import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Login({ theme, onThemeToggle }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
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
              <h1 className="auth-brand-title">Welcome Back</h1>
              <p className="auth-brand-text">
                Reconnect with your inner peace and continue your wellness journey
              </p>
              <div className="auth-features">
                <div className="auth-feature-item">
                  <span>Access all classes</span>
                </div>
                <div className="auth-feature-item">
                  <span>Book sessions</span>
                </div>
                <div className="auth-feature-item">
                  <span>Talk space access</span>
                </div>
              </div>
            </div>
            {/* no decorative shapes */}
          </motion.div>

          {/* Right Side - Form Card */}
          <motion.div className="auth-card" variants={itemVariants}>
            <div className="auth-card-header">
              <h2 className="auth-card-title">Login</h2>
              <p className="auth-card-subtitle">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-form-options">
                <label className="auth-checkbox-label">
                  <input type="checkbox" className="auth-checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="auth-link">Forgot password?</a>
              </div>

              <button type="submit" className="auth-btn auth-btn-primary">
                <span>Sign In</span>
                <svg className="auth-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            {/* social sign-in removed for minimal professional UI */}

            <p className="auth-footer-text">
              Don't have an account?{' '}
              <Link to="/join" className="auth-link">
                Join now
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
