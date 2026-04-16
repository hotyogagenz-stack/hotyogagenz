import React, { useState } from 'react'

const messages = {
  sad: "It's okay to not be okay. Try the 'Heart Healing' journaling prompt today. We are with you. ❤️",
  anxious: "Breathe in for 4, hold for 4, release for 4. You are safe here. Our Hot Yoga can help ground you. 🌿",
  tired: "You've been doing a lot. Productivity is not your only worth. Take 20 minutes to just vent. 🥱",
  happy: "We love this for you! Keep that energy. Maybe share a positive thought in our community blog? ✨"
}

export default function Mood() {
  const [result, setResult] = useState('Select your mood for instant guidance...')

  const getGuidance = mood => {
    setResult('')
    setTimeout(() => {
      setResult(messages[mood])
    }, 300)
  }

  return (
    <div className="glass-card big-card">
      <h2>How's your heart feeling?</h2>
      <div className="mood-grid">
        <button className="mood-btn" onClick={() => getGuidance('sad')}>😢 Sad</button>
        <button className="mood-btn" onClick={() => getGuidance('anxious')}>😰 Anxious</button>
        <button className="mood-btn" onClick={() => getGuidance('tired')}>😩 Overwhelmed</button>
        <button className="mood-btn" onClick={() => getGuidance('happy')}>✨ Good</button>
      </div>
      <div id="guidance-result" className="result-box">{result}</div>
    </div>
  )
}
