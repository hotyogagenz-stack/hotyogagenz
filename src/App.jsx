import React, { useEffect, useRef } from 'react'

import Hero from './components/Hero'
import Mood from './components/Mood'
import Yoga from './components/Yoga'
import Healer from './components/Healer'
import Listener from './components/Listener'
import Resources from './components/Resources'

export default function App() {
  // Scroll reveal effect (port of original script)
  useEffect(() => {
    const onScroll = () => {
      const reveals = document.querySelectorAll('.glass-card')
      reveals.forEach(card => {
        const windowHeight = window.innerHeight
        const revealTop = card.getBoundingClientRect().top
        if (revealTop < windowHeight - 150) {
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className="bg-slider">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
        <div className="slide slide4"></div>
        <div className="slide slide5"></div>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
          <li><button onClick={() => scrollToSection('yoga')}>Hot Yoga</button></li>
          <li><button onClick={() => scrollToSection('healer')}>Heart Healer</button></li>
          <li><button onClick={() => scrollToSection('imotti')}>Mood Guide</button></li>
          <li><button onClick={() => scrollToSection('listener')}>Vent Space</button></li>
          <li><button onClick={() => scrollToSection('resources')}>Resources</button></li>
        </ul>
      </nav>

      <main>
        <section id="hero" className="hero full-height">
          <Hero onScrollTo={scrollToSection} />
        </section>

        <section id="imotti" className="section">
          <div className="container">
            <Mood />
          </div>
        </section>

        <section id="yoga" className="section yoga-section">
          <div className="container split">
            <Yoga />
          </div>
        </section>

        <section id="healer" className="section">
          <div className="container">
            <Healer />
          </div>
        </section>

        <section id="listener" className="section">
          <div className="container">
            <Listener />
          </div>
        </section>

        <section id="resources" className="section">
          <div className="container">
            <Resources />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">Wellness Hub</div>
        <p>Talk. Heal. Breathe. | You're not alone.</p>
        <div className="socials">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-discord"></i>
        </div>
      </footer>
    </div>
  )
}
