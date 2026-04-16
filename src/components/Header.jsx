import React from 'react'

export default function Header(){
  return (
    <header className="site-header transparent-header">
      <div className="container">
        <div className="logo">
          {/* Placeholder for logo image */}
          <div className="logo-icon"></div>
          <span>JUNE FLINT</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#hot-yoga">Hot Yoga</a>
          <a href="#talk-space">Talk Space</a>
          <a href="#healing">Healing</a>
          <a href="#imotti-guide">Imotti Guide</a>
          <a href="#blog">Blog</a>
          <a href="#login" className="login-btn">Login / Join</a>
        </nav>
      </div>
    </header>
  )
}
