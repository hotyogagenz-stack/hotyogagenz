import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import authBg from '../assets/auth-bg.png';
import { useAuth } from '../auth/AuthContext';
import { getFirebaseErrorMessage } from '../firebase/errors';

export default function Login({ theme, onThemeToggle }) {
  const navigate = useNavigate();
  const { signIn, resetPassword, user, isConfigured } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setSubmitting(true);
    try {
      await signIn({ email: formData.email, password: formData.password, remember });
      navigate('/dashboard');
    } catch (err) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!formData.email) {
      setError('Enter your email first, then click Forgot.');
      return;
    }
    setSubmitting(true);
    try {
      await resetPassword(formData.email);
      setInfo('Password reset email sent. Check your inbox.');
    } catch (err) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setSubmitting(false);
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
              <h1 className="auth-visual-title">Elevate Your Practice</h1>
              <p className="auth-visual-text">
                Your journey to mindfulness continues here. Welcome back to June Flint.
              </p>
              <div className="auth-visual-quote">
                "Yoga is the journey of the self, through the self, to the self."
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form Card */}
          <motion.div className="auth-card" variants={itemVariants}>
            <div className="auth-card-header">
              <h2 className="auth-card-title">Welcome Back</h2>
              <p className="auth-card-subtitle">Please enter your details to sign in</p>
            </div>

            {!isConfigured && (
              <div className="auth-alert auth-alert-warn">
                Firebase isn’t configured yet. Add env vars in <code>hotyogagenz/.env</code> (see{' '}
                <code>hotyogagenz/.env.example</code>).
              </div>
            )}
            {error && <div className="auth-alert auth-alert-error">{error}</div>}
            {info && <div className="auth-alert auth-alert-ok">{info}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
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

              <div className="auth-form-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <a href="#forgot" className="forgot-link" onClick={handleForgot}>
                    Forgot?
                  </a>
                </div>
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

              <div className="auth-form-options">
                <label className="auth-checkbox-label">
                  <input
                    type="checkbox"
                    className="auth-checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Keep me signed in</span>
                </label>
              </div>

              <button type="submit" className="auth-btn auth-btn-primary" disabled={submitting}>
                <span>Sign In</span>
                <svg className="auth-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <p className="auth-footer-text">
              New to June Flint?{' '}
              <Link to="/join" className="auth-link">
                Create an account
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
