import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ theme, onThemeToggle }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { href: '#imotti-guide', label: 'Imotti Guide' },
    { href: '#blog', label: 'Blog' }
  ];

  return (
    <motion.header 
      className={`site-header transparent-header ${mobileMenuOpen ? 'menu-open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo-icon"></div>
          <span>JUNE FLINT</span>
        </motion.div>

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
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.to ? (
                    <Link to={item.to} onClick={closeMobileMenu}>{item.label}</Link>
                  ) : (
                    <a href={item.href} onClick={closeMobileMenu}>{item.label}</a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <a href="#login" className="login-btn" onClick={closeMobileMenu}>Login / Join</a>
              </motion.div>
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            </motion.nav>
          )}
        </AnimatePresence>

        <nav className={`nav desktop-nav`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.to ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.05 }}
          >
            <a href="#login" className="login-btn">Login / Join</a>
          </motion.div>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </nav>
      </div>
    </motion.header>
  )
}
