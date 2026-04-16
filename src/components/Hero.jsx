import React from 'react'

export default function Hero({ onScrollTo }) {
  return (
    <div className="hero-glass glass-card">
      <span className="badge">A safe space for you ✨</span>
      <h1>Talk. Heal. Breathe.</h1>
      <p>Your GenZ space for hot yoga, emotional healing, and judgment-free talks.</p>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => onScrollTo('listener')}>Start Talking</button>
        <button className="btn-secondary" onClick={() => onScrollTo('yoga')}>Join Yoga</button>
      </div>
      <div className="scroll-indicator">
        <p>Scroll down to explore</p>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  )
}
