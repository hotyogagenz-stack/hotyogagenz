import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CursorTrail from './components/CursorTrail';
import ScrollToTop from './components/ScrollToTop';
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
import ImottiGuide from './components/ImottiGuide';
import About from './components/About';
import Mission from './components/Mission';
import Careers from './components/Careers';
import Press from './components/Press';
import HelpCenter from './components/HelpCenter';
import FAQ from './components/FAQ';
import SafetyPrivacy from './components/SafetyPrivacy';
import Community from './components/Community';
import Contact from './components/Contact';
import WellnessGuide from './components/WellnessGuide';
import YogaTips from './components/YogaTips';
import Mindfulness from './components/Mindfulness';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
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

// About Page Component
function AboutPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <About theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Mission Page Component
function MissionPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Mission theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Careers Page Component
function CareersPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Careers theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Press Page Component
function PressPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Press theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Help Center Page Component
function HelpCenterPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <HelpCenter theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// FAQ Page Component
function FAQPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <FAQ theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Safety & Privacy Page Component
function SafetyPrivacyPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <SafetyPrivacy theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Community Page Component
function CommunityPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Community theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Contact Page Component
function ContactPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Contact theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Wellness Guide Page Component
function WellnessGuidePage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <WellnessGuide theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Yoga Tips Page Component
function YogaTipsPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <YogaTips theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Mindfulness Page Component
function MindfulnessPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Mindfulness theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Terms Page Component
function TermsPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <Terms theme={theme} onThemeToggle={onThemeToggle} />
      <Footer />
    </div>
  );
}

// Privacy Policy Page Component
function PrivacyPolicyPage({ theme, onThemeToggle }) {
  return (
    <div className="app-root">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <PrivacyPolicy theme={theme} onThemeToggle={onThemeToggle} />
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
  <ScrollToTop />
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
          path="/about"
          element={<AboutPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/mission"
          element={<MissionPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/careers"
          element={<CareersPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/press"
          element={<PressPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/help"
          element={<HelpCenterPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/faq"
          element={<FAQPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/safety"
          element={<SafetyPrivacyPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/community"
          element={<CommunityPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/contact"
          element={<ContactPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/wellness-guide"
          element={<WellnessGuidePage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/yoga-tips"
          element={<YogaTipsPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/mindfulness"
          element={<MindfulnessPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/terms"
          element={<TermsPage theme={theme} onThemeToggle={handleThemeToggle} />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicyPage theme={theme} onThemeToggle={handleThemeToggle} />}
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
