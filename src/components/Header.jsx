import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header({ theme, onThemeToggle }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header transparent-header ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>JUNE FLINT</span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/hot-yoga" onClick={closeMobileMenu}>Hot Yoga</Link>
          <a href="#talk-space" onClick={closeMobileMenu}>Talk Space</a>
          <a href="#healing" onClick={closeMobileMenu}>Healing</a>
          <a href="#imotti-guide" onClick={closeMobileMenu}>Imotti Guide</a>
          <a href="#blog" onClick={closeMobileMenu}>Blog</a>
          <a href="#login" className="login-btn" onClick={closeMobileMenu}>Login / Join</a>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </nav>
      </div>
    </header>
  )
}
