import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import YogaSlider from './components/YogaSlider';
import YogaCollage from './components/YogaCollage';
import WhatWeHelpWith from './components/WhatWeHelpWith';
import ServicesGrid from './components/ServicesGrid';
import MoodChecker from './components/MoodChecker';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const handleExplore = () => {
    const element = document.getElementById('hot-yoga');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Header />
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
