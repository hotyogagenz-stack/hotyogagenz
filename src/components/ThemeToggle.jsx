import React from 'react';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="label">{isDark ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}