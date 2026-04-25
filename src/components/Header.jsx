import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../auth/AuthContext'

const MotionLink = motion.create(Link);

export default function Header({ theme, onThemeToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOutUser } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/hot-yoga', label: 'Hot Yoga' },
    { to: '/talk-space', label: 'Talk Space' },
    { to: '/healing', label: 'Healing' },
    { to: '/blog', label: 'Blog' },
    { to: '/imotti-guide', label: 'Imotti Guide' },
    { to: '/gallery', label: 'Gallery' }
  ];

  const authNavItems = user
    ? [{ to: '/dashboard', label: 'Dashboard' }]
    : [
        { to: '/login', label: 'Login' },
        { to: '/join', label: 'Join' }
      ];

  const handleLogout = async () => {
    await signOutUser();
    closeMobileMenu();
    navigate('/');
  };

  const getNavClassName = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <motion.header
      className={`site-header transparent-header ${mobileMenuOpen ? 'menu-open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <MotionLink
          to="/"
          className="logo"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={closeMobileMenu}
        >
          <div className="logo-icon"></div>
          <span>JUNE FLINT</span>
        </MotionLink>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className={`nav mobile-open`}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {[...navItems, ...authNavItems].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={getNavClassName}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a href={item.href} onClick={closeMobileMenu}>{item.label}</a>
                  )}
                </motion.div>
              ))}
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
              {user && (
                <button type="button" className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </motion.nav>
          )}
        </AnimatePresence>

        <nav className={`nav desktop-nav`}>
          {[...navItems, ...authNavItems].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.to ? (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={getNavClassName}
                >
                  {item.label}
                </NavLink>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </motion.div>
          ))}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          {user && (
            <button type="button" className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </motion.header>
  )
}
