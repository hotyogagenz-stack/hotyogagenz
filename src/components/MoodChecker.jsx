import React, { useState } from 'react';
import { FadeUp, FadeInFromLeft, StaggerContainer, StaggerItem, HoverLift } from './animations';

const moodData = {
  'Sad': {
    quote: '"This too shall pass. You are stronger than you know."',
    exercise: '4-7-8 Breathing: Inhale 4s, Hold 7s, Exhale 8s',
    pose: 'Child\'s Pose - Kneel and stretch arms forward',
    suggestion: 'Talk to a listener about what\'s weighing on you'
  },
  'Anxious': {
    quote: '"Feel the fear and do it anyway."',
    exercise: 'Box Breathing: 4s in, 4s hold, 4s out, 4s hold',
    pose: 'Cat-Cow - Flow through gentle spinal movements',
    suggestion: 'Try a calming meditation session'
  },
  'Angry': {
    quote: '"Anger is a gift. Use it to fuel your growth."',
    exercise: 'Release Breathing: Short sharp exhales',
    pose: 'Standing Forward Fold - Let gravity release tension',
    suggestion: 'Write down what\'s making you angry'
  },
  'Tired': {
    quote: '"Rest is not laziness. It\'s necessary."',
    exercise: 'Restorative Breathing: Long slow deep breaths',
    pose: 'Legs Up The Wall - Elevate your legs',
    suggestion: 'Take a power nap or rest your eyes'
  },
  'Happy': {
    quote: '"Joy is the seed of all growth."',
    exercise: 'Gratitude Breathing: Breathe in joy, exhale gratitude',
    pose: 'Sun Salutation - Celebrate your energy',
    suggestion: 'Share your good vibes with someone'
  }
};

const moods = [
  { key: 'Sad', label: 'Feeling Low', description: 'When melancholy weighs you down' },
  { key: 'Anxious', label: 'Restless', description: 'When worry clouds your mind' },
  { key: 'Angry', label: 'Frustrated', description: 'When tension builds inside' },
  { key: 'Tired', label: 'Exhausted', description: 'When energy is depleted' },
  { key: 'Happy', label: 'Content', description: 'When joy fills your heart' }
];

export default function MoodChecker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowContent(true);
  };

  const resetMood = () => {
    setSelectedMood(null);
    setShowContent(false);
  };

  return (
    <section className="mood-checker-section">
      <div className="mood-checker-container">
        <div className="mood-checker-header">
          <FadeInFromLeft>
            <span className="mood-checker-label">Emotional Wellness Assessment</span>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.1}>
            <h2 className="mood-checker-title">How Are You Feeling Today?</h2>
          </FadeInFromLeft>
          <FadeInFromLeft delay={0.2}>
            <p className="mood-checker-subtitle">Select your current emotional state to receive personalized guidance and support tailored to your needs.</p>
          </FadeInFromLeft>
        </div>

        <StaggerContainer className="mood-grid" staggerDelay={0.1}>
          {moods.map((mood) => (
            <StaggerItem key={mood.key}>
              <HoverLift>
                <button
                  className={`mood-option ${selectedMood === mood.key ? 'selected' : ''}`}
                  onClick={() => handleMoodSelect(mood.key)}
                >
                  <span className="mood-option-label">{mood.label}</span>
                  <span className="mood-option-desc">{mood.description}</span>
                </button>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showContent && selectedMood && (
          <div className="mood-results">
            <div className="mood-results-header">
              <h3>Your Personalized Wellness Plan</h3>
              <p>Based on your selection: <strong>{moods.find(m => m.key === selectedMood)?.label}</strong></p>
            </div>
            
            <div className="mood-cards">
              <div className="mood-card">
                <div className="mood-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  <h4>Breathing Exercise</h4>
                </div>
                <p>{moodData[selectedMood].exercise}</p>
              </div>
              
              <div className="mood-card">
                <div className="mood-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"/>
                  </svg>
                  <h4>Words of Wisdom</h4>
                </div>
                <p className="mood-quote">{moodData[selectedMood].quote}</p>
              </div>
              
              <div className="mood-card">
                <div className="mood-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <h4>Recommendation</h4>
                </div>
                <p>{moodData[selectedMood].suggestion}</p>
              </div>
              
              <div className="mood-card">
                <div className="mood-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="5" r="3"/>
                    <path d="M12 8v4M9 20l3-6 3 6M6 20h12"/>
                  </svg>
                  <h4>Recommended Yoga Pose</h4>
                </div>
                <p>{moodData[selectedMood].pose}</p>
              </div>
            </div>
            
            <div className="mood-result-actions">
              <button className="mood-reset-btn" onClick={resetMood}>
                Select Different Mood
              </button>
            </div>
          </div>
        )}

        {!selectedMood && (
          <div className="mood-prompt">
            <p>Please select an option above to receive your personalized wellness recommendations</p>
          </div>
        )}
      </div>
    </section>
  );
}