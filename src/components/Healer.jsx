import React from 'react'

export default function Healer() {
  return (
    <div className="glass-card text-center">
      <span className="tag">02. Healing</span>
      <h2>Mend Your Heart</h2>
      <p>Guided sessions and journaling prompts for when life feels heavy. We help you navigate heartbreak, family stress, and self-doubt.</p>
      <div className="journal-prompt">
        <p><strong>Today's Prompt:</strong> "What is one thing you're ready to let go of?"</p>
        <textarea placeholder="Start writing here..."></textarea>
      </div>
    </div>
  )
}
