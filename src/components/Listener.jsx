import React from 'react'

export default function Listener() {
  return (
    <div className="container split reverse">
      <div className="glass-card text-box">
        <span className="tag">03. Support</span>
        <h2>Just Vent. <br/>No Judgement.</h2>
        <p>Speak to anonymous listeners who understand you. Career stress, relationship drama, or just a bad day—we are here to listen, not to fix.</p>
        <button className="btn-primary">Connect with a Listener</button>
      </div>
      <div className="chat-ui">
        <div className="msg bot">"I'm here. What's on your mind?"</div>
        <div className="msg user">"Everything feels so fast lately..."</div>
      </div>
    </div>
  )
}
