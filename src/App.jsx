import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CursorTrail from './components/CursorTrail';
import TrustStrip from './components/TrustStrip';
import YogaSlider from './components/YogaSlider';
import YogaCollage from './components/YogaCollage';
import HotYoga from './components/HotYoga';
import WhatWeHelpWith from './components/WhatWeHelpWith';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TalkSpace from './components/TalkSpace';
import Healing from './components/Healing';
import Blog from './components/Blog';
import Login from './components/Login';
import Join from './components/Join';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';
import RequireAuth from './auth/RequireAuth';

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
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
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

// Blog Page Component
function BlogPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Blog theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Imotti Guide Page Component
function ImottiGuidePage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <ImottiGuide isPage={true} />
      <Footer />
    </div>
  );
}

// Login Page Component
function LoginPage({ theme, onThemeToggle }) {
  return (
    <Login theme={theme} onThemeToggle={onThemeToggle} />
  );
}

// Join Page Component
function JoinPage({ theme, onThemeToggle }) {
  return (
    <Join theme={theme} onThemeToggle={onThemeToggle} />
  );
}

// Gallery Page Component
function GalleryPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Gallery />
      <Footer />
    </div>
  );
}

// Dashboard Page Component (Protected)
function DashboardPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <div className="dashboard-page">
        <div className="container">
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <CursorTrail />
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
        <Route
          path="/blog"
          element={<BlogPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/imotti-guide"
          element={<ImottiGuidePage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/login"
          element={<LoginPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/join"
          element={<JoinPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/gallery"
          element={<GalleryPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage theme={theme} onThemeToggle={handleThemeToggle} />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}
