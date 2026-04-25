import React from 'react';
import { Link } from 'react-router-dom';

export default function Mindfulness() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="mindfulness-page">
            <div className="page-header">
              <h1>Mindfulness</h1>
              <p className="lead">
                Discover the transformative power of present-moment awareness and cultivate lasting inner peace.
              </p>
            </div>

            <section className="content-section">
              <h2>What is Mindfulness?</h2>
              <div className="section-content">
                <p>
                  Mindfulness is the practice of being fully present and engaged in the current moment, 
                  aware of your thoughts, feelings, and sensations without distraction or judgment. 
                  It's about experiencing life as it happens, rather than dwelling on the past or 
                  worrying about the future.
                </p>
                <p>
                  At its core, mindfulness is a simple yet profound skill that can be developed through 
                  regular practice. It involves paying deliberate attention to your present-moment 
                  experience with curiosity and acceptance.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>The Science of Mindfulness</h2>
              <div className="section-content">
                <p>
                  Extensive research demonstrates that regular mindfulness practice produces measurable 
                  changes in the brain and body:
                </p>
              </div>
              <div className="benefits-scientific">
                <div className="benefit-sci">
                  <h3>Reduced Stress</h3>
                  <p>Lowers cortisol levels and activates the parasympathetic nervous system, promoting relaxation.</p>
                </div>
                <div className="benefit-sci">
                  <h3>Improved Focus</h3>
                  <p>Strengthens prefrontal cortex function, enhancing concentration and cognitive performance.</p>
                </div>
                <div className="benefit-sci">
                  <h3>Emotional Regulation</h3>
                  <p>Increases gray matter density in areas associated with emotional processing and regulation.</p>
                </div>
                <div className="benefit-sci">
                  <h3>Better Sleep</h3>
                  <p>Calms racing thoughts and reduces insomnia through relaxation techniques.</p>
                </div>
                <div className="benefit-sci">
                  <h3>Enhanced Self-Awareness</h3>
                  <p>Develops insight into thought patterns and emotional triggers.</p>
                </div>
                <div className="benefit-sci">
                  <h3>Improved Relationships</h3>
                  <p>Fosters empathy, patience, and present-moment listening skills.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Core Mindfulness Practices</h2>
              <div className="section-content">
                <p>
                  These foundational practices can be incorporated into your daily life. Start with 
                  just 5 minutes daily and gradually increase as you become comfortable.
                </p>
              </div>
              <div className="practices-detailed">
                <div className="practice-detailed">
                  <div className="practice-header">
                    <div className="practice-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3>1. Mindful Breathing</h3>
                      <span className="practice-duration">5-10 minutes daily</span>
                    </div>
                  </div>
                  <div className="practice-body">
                    <p>
                      The foundation of all mindfulness practices. This simple technique anchors your 
                      attention to the present moment through awareness of your breath.
                    </p>
                    <h4>How to Practice:</h4>
                    <ol>
                      <li>Find a comfortable seated position with your spine straight</li>
                      <li>Close your eyes or soften your gaze</li>
                      <li>Bring attention to your natural breath without changing it</li>
                      <li>Notice the sensation of air entering and leaving your body</li>
                      <li>When your mind wanders, gently return focus to your breath</li>
                      <li>Continue for 5-10 minutes, gradually increasing duration</li>
                    </ol>
                    <div className="practice-tip">
                      <strong>Tip:</strong> Count breaths if helpful—inhale "one," exhale "two," up to ten, then restart.
                    </div>
                  </div>
                </div>

                <div className="practice-detailed">
                  <div className="practice-header">
                    <div className="practice-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3>2. Body Scan Meditation</h3>
                      <span className="practice-duration">10-20 minutes</span>
                    </div>
                  </div>
                  <div className="practice-body">
                    <p>
                      A systematic practice of bringing awareness to different parts of the body, 
                      promoting deep relaxation and body-mind connection.
                    </p>
                    <h4>How to Practice:</h4>
                    <ol>
                      <li>Lie flat on your back with arms at your sides, palms up</li>
                      <li>Close your eyes and bring attention to your breath for a few moments</li>
                      <li>Slowly move your attention from your toes upward through your body</li>
                      <li>Notice sensations in each area—warmth, tingling, pressure, or neutrality</li>
                      <li>Don't judge sensations; simply observe them without reaction</li>
                      <li>Continue to the top of your head, then rest in whole-body awareness</li>
                    </ol>
                    <div className="practice-tip">
                      <strong>Tip:</strong> If you fall asleep, that's okay—your body needed rest. Practice at a different time if needed.
                    </div>
                  </div>
                </div>

                <div className="practice-detailed">
                  <div className="practice-header">
                    <div className="practice-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                        <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h3>3. Mindful Walking</h3>
                      <span className="practice-duration">5-15 minutes</span>
                    </div>
                  </div>
                  <div className="practice-body">
                    <p>
                      Transform everyday walking into a moving meditation. This practice grounds you in 
                      the present moment through physical sensation.
                    </p>
                    <h4>How to Practice:</h4>
                    <ol>
                      <li>Find a quiet path, 10-20 steps long, where you can walk back and forth</li>
                      <li>Stand at one end, take a few deep breaths, and bring awareness to your body</li>
                      <li>Walk slowly, paying attention to each movement</li>
                      <li>Notice the lifting, moving, and placing of each foot</li>
                      <li>Feel the ground beneath you, the sway of your arms, your breath</li>
                      <li>When your mind wanders, gently return to the sensations of walking</li>
                    </ol>
                    <div className="practice-tip">
                      <strong>Tip:</strong> You can practice mindful walking anywhere—even during short breaks at work.
                    </div>
                  </div>
                </div>

                <div className="practice-detailed">
                  <div className="practice-header">
                    <div className="practice-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3>4. 5-4-3-2-1 Grounding Technique</h3>
                      <span className="practice-duration">2-5 minutes</span>
                    </div>
                  </div>
                  <div className="practice-body">
                    <p>
                      A quick, powerful technique to bring you into the present moment during anxiety 
                      or stress. Engages all five senses to ground you in reality.
                    </p>
                    <h4>How to Practice:</h4>
                    <ol>
                      <li>Take a few deep breaths to begin</li>
                      <li><strong>5:</strong> Name five things you can see around you</li>
                      <li><strong>4:</strong> Name four things you can physically touch</li>
                      <li><strong>3:</strong> Name three things you can hear</li>
                      <li><strong>2:</strong> Name two things you can smell</li>
                      <li><strong>1:</strong> Name one thing you can taste</li>
                    </ol>
                    <div className="practice-tip">
                      <strong>Tip:</strong> Keep this technique in your toolkit for moments of overwhelm or anxiety.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Integrating Mindfulness into Daily Life</h2>
              <div className="section-content">
                <p>
                  Mindfulness isn't limited to formal practice—it can be woven into everyday activities. 
                  Here's how to make it a sustainable habit:
                </p>
              </div>
              <div className="integration-grid">
                <div className="integration-item">
                  <h3>Start Small</h3>
                  <p>Begin with just 5 minutes daily. Consistency matters more than duration. Build gradually as it becomes habitual.</p>
                </div>
                <div className="integration-item">
                  <h3>Use Triggers</h3>
                  <p>Link practice to existing habits—after brushing teeth, before meals, or during your commute.</p>
                </div>
                <div className="integration-item">
                  <h3>Be Patient</h3>
                  <p>Mindfulness is a skill that develops over time. Don't judge your practice—just show up consistently.</p>
                </div>
                <div className="integration-item">
                  <h3>Use Guided Meditations</h3>
                  <p>Our guided sessions provide structure and instruction, especially helpful when starting out.</p>
                </div>
                <div className="integration-item">
                  <h3>Practice Non-Judgment</h3>
                  <p>Notice thoughts and sensations without labeling them "good" or "bad." Simply observe and let be.</p>
                </div>
                <div className="integration-item">
                  <h3>Bring Mindfulness to Routine Activities</h3>
                  <p>Practice while eating, walking, or washing dishes. Pay full attention to whatever you're doing.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Common Challenges & Solutions</h2>
              <div className="challenges-grid">
                <div className="challenge-card">
                  <h3>"My mind won't stop wandering."</h3>
                  <p>This is completely normal! The practice is noticing when your mind wanders and gently returning focus. Each return is a "rep" that strengthens your mindfulness muscle.</p>
                </div>
                <div className="challenge-card">
                  <h3>"I don't have time."</h3>
                  <p>Start with just 1-2 minutes. Even brief moments of mindfulness reduce stress. You can integrate it into existing activities like commuting or eating.</p>
                </div>
                <div className="challenge-card">
                  <h3>"I'm not sure if I'm doing it right."</h3>
                  <p>There's no "perfect" way. If you're bringing awareness to the present moment, you're doing it correctly. Guided sessions can provide structure.</p>
                </div>
                <div className="challenge-card">
                  <h3>"I fall asleep during practice."</h3>
                  <p>That's okay—your body may need rest. Try practicing at a different time of day, or sit upright instead of lying down.</p>
                </div>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/healing" className="btn btn-primary">Explore Healing Practices</Link>
              <Link to="/wellness-guide" className="btn btn-secondary">Wellness Guide</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
