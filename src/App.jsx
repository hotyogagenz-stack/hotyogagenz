import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import YogaSlider from './components/YogaSlider';
import YogaCollage from './components/YogaCollage';
import HotYoga from './components/HotYoga';
import WhatWeHelpWith from './components/WhatWeHelpWith';
import ServicesGrid from './components/ServicesGrid';
import MoodChecker from './components/MoodChecker';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TalkSpace from './components/TalkSpace';
import Healing from './components/Healing';

// Home Page Component
function HomePage({ theme, onThemeToggle }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/hot-yoga');
  };

  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Hero onExplore={handleExplore} />
      <TrustStrip />
      <YogaSlider />
      <YogaCollage />
      <WhatWeHelpWith />
      <ServicesGrid />
      <MoodChecker />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// Hot Yoga Page Component
function HotYogaPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <HotYoga />
      <Footer />
    </div>
  );
}

// Talk Space Page Component
function TalkSpacePage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <TalkSpace />
      <Footer />
    </div>
  );
}

// Healing Page Component
function HealingPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Healing />
      <Footer />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage theme={theme} onThemeToggle={handleThemeToggle} />} 
        />
        <Route 
          path="/hot-yoga" 
          element={<HotYogaPage theme={theme} onThemeToggle={handleThemeToggle} />} 
        />
        <Route 
          path="/talk-space" 
          element={<TalkSpacePage theme={theme} onThemeToggle={handleThemeToggle} />} 
        />
        <Route 
          path="/healing" 
          element={<HealingPage theme={theme} onThemeToggle={handleThemeToggle} />} 
        />
      </Routes>
    </Router>
  );
}
