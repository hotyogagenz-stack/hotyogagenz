import React, { useState } from 'react';

const moodData = {
  '😔': {
    mood: 'Sad',
    quote: '"This too shall pass. You are stronger than you know."',
    exercise: '4-7-8 Breathing: Inhale 4s, Hold 7s, Exhale 8s',
    pose: 'Child\'s Pose - Kneel and stretch arms forward',
    suggestion: 'Talk to a listener about what\'s weighing on you'
  },
  '😰': {
    mood: 'Anxious',
    quote: '"Feel the fear and do it anyway."',
    exercise: 'Box Breathing: 4s in, 4s hold, 4s out, 4s hold',
    pose: 'Cat-Cow - Flow through gentle spinal movements',
    suggestion: 'Try a calming meditation session'
  },
  '😡': {
    mood: 'Angry',
    quote: '"Anger is a gift. Use it to fuel your growth."',
    exercise: 'Release Breathing: Short sharp exhales',
    pose: 'Standing Forward Fold - Let gravity release tension',
    suggestion: 'Write down what\'s making you angry'
  },
  '😴': {
    mood: 'Tired',
    quote: '"Rest is not laziness. It\'s necessary."',
    exercise: 'Restorative Breathing: Long slow deep breaths',
    pose: 'Legs Up The Wall - Elevate your legs',
    suggestion: 'Take a power nap or rest your eyes'
  },
  '😊': {
    mood: 'Happy',
    quote: '"Joy is the seed of all growth."',
    exercise: 'Gratitude Breathing: Breathe in joy, exhale gratitude',
    pose: 'Sun Salutation - Celebrate your energy',
    suggestion: 'Share your good vibes with someone'
  }
};

const emojis = ['sad', 'anxious', 'angry', 'tired', 'neutral'];

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
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🔥 How are you feeling today?</h2>
          <p className="section-subtitle">Select your mood and get personalized support</p>
        </div>

        <div className="mood-selector">
          {emojis.map((emoji) => (
            <button
              key={emoji}
              className={`mood-btn ${selectedMood === emoji ? 'selected' : ''}`}
              onClick={() => handleMoodSelect(emoji)}
            >
              <span className="mood-emoji">{emoji}</span>
            </button>
          ))}
        </div>

        {showContent && selectedMood && (
          <div className="mood-content glass-card">
            <div className="mood-response">
              <div className="response-item breathing-exercise">
                <h4>🫁 Breathing Exercise</h4>
                <p>{moodData[selectedMood].exercise}</p>
              </div>
              
              <div className="response-item quote">
                <h4>💭 Wise Words</h4>
                <p>{moodData[selectedMood].quote}</p>
              </div>
              
              <div className="response-item suggestion">
                <h4>💡 Suggestion</h4>
                <p>{moodData[selectedMood].suggestion}</p>
              </div>
              
              <div className="response-item pose">
                <h4>🧘 Yoga Pose</h4>
                <p>{moodData[selectedMood].pose}</p>
              </div>
            </div>
            
            <button className="btn-talk" onClick={resetMood}>
              Let's Talk
            </button>
          </div>
        )}

        {!selectedMood && (
          <div className="mood-prompt">
            <p>Tap an emoji above to get your personalized wellness toolkit</p>
          </div>
        )}
      </div>
    </section>
  );
}