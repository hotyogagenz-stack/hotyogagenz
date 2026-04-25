import React from 'react';
import { Link } from 'react-router-dom';

export default function YogaTips() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="yoga-tips-page">
            <div className="page-header">
              <h1>Yoga Tips</h1>
              <p className="lead">
                Expert guidance to enhance your yoga practice, whether you're a beginner or experienced practitioner.
              </p>
            </div>

            <section className="content-section">
              <h2>Getting Started with Yoga</h2>
              <div className="section-content">
                <p>
                  Beginning a yoga practice can be both exciting and intimidating. These foundational 
                  tips will help you start safely and build a sustainable practice:
                </p>
              </div>
              <div className="tips-list">
                <div className="tip-item">
                  <div className="tip-number">1</div>
                  <div className="tip-content">
                    <h3>Start with Short Sessions</h3>
                    <p>Begin with 15-20 minute sessions to build consistency without overwhelming yourself. Quality matters more than duration.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-number">2</div>
                  <div className="tip-content">
                    <h3>Focus on Breath Awareness</h3>
                    <p>Your breath is your guide. Practice deep, conscious breathing throughout each pose. This connects mind and body.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-number">3</div>
                  <div className="tip-content">
                    <h3>Prioritize Proper Alignment</h3>
                    <p>Correct alignment prevents injury and maximizes benefits. Use mirrors, props, or instructor guidance to ensure proper form.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-number">4</div>
                  <div className="tip-content">
                    <h3>Listen to Your Body</h3>
                    <p>Never push into pain. Distinguish between discomfort (stretching) and pain (injury). Honor your body's limits each day.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-number">5</div>
                  <div className="tip-content">
                    <h3>Practice on an Empty Stomach</h3>
                    <p>Wait 2-3 hours after eating before practicing. This allows for comfortable movement and better digestion during practice.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-number">6</div>
                  <div className="tip-content">
                    <h3>Consistency Over Intensity</h3>
                    <p>10 minutes daily is more beneficial than 90 minutes once a week. Build a habit that fits your lifestyle.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Essential Yoga Poses for Beginners</h2>
              <div className="section-content">
                <p>
                  These foundational poses build strength, flexibility, and body awareness. Master these 
                  before progressing to more advanced asanas:
                </p>
              </div>
              <div className="poses-grid">
                <div className="pose-card">
                  <div className="pose-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Mountain Pose (Tadasana)</h3>
                  <p>The foundation for all standing poses. Improves posture, balance, and body awareness.</p>
                  <div className="pose-instruction">
                    <strong>How to:</strong> Stand tall with feet together, arms at sides, weight evenly distributed. Engage core and breathe deeply.
                  </div>
                </div>
                <div className="pose-card">
                  <div className="pose-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Downward-Facing Dog (Adho Mukha Svanasana)</h3>
                  <p>A full-body stretch that builds strength, improves circulation, and calms the mind.</p>
                  <div className="pose-instruction">
                    <strong>How to:</strong> Start on hands and knees, lift hips up and back, forming an inverted V shape. Press through hands and heels.
                  </div>
                </div>
                <div className="pose-card">
                  <div className="pose-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Warrior II (Virabhadrasana II)</h3>
                  <p>Builds stamina, focus, and lower body strength while opening hips and chest.</p>
                  <div className="pose-instruction">
                    <strong>How to:</strong> Step feet wide, turn right foot out, bend right knee over ankle, extend arms parallel to floor, gaze over right hand.
                  </div>
                </div>
                <div className="pose-card">
                  <div className="pose-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 8C8 8 10 10 12 10C14 10 16 8 16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Child's Pose (Balasana)</h3>
                  <p>A restorative position for rest, recovery, and gentle stretching of the back and hips.</p>
                  <div className="pose-instruction">
                    <strong>How to:</strong> Kneel, sit back on heels, fold forward with forehead to mat, arms extended or by sides. Breathe deeply.
                  </div>
                </div>
                <div className="pose-card">
                  <div className="pose-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Corpse Pose (Savasana)</h3>
                  <p>Final relaxation pose that integrates the benefits of your practice and reduces stress.</p>
                  <div className="pose-instruction">
                    <strong>How to:</strong> Lie flat on back, arms slightly away from body, palms up. Close eyes, relax entire body, breathe naturally.
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Breathing Techniques (Pranayama)</h2>
              <div className="section-content">
                <p>
                  Conscious breathing is central to yoga practice. These techniques enhance focus, 
                  reduce stress, and balance your energy:
                </p>
              </div>
              <div className="techniques-grid">
                <div className="technique-card">
                  <h3>Ujjayi Breath (Ocean Breath)</h3>
                  <p>Constrict the back of your throat to create an ocean-like sound. This breath builds internal heat and focus.</p>
                  <div className="technique-instruction">
                    <strong>Practice:</strong> Inhale and exhale through the nose with a slight constriction in the throat. Use throughout Vinyasa flows.
                  </div>
                </div>
                <div className="technique-card">
                  <h3>Nadi Shodhana (Alternate Nostril)</h3>
                  <p>Balances left and right brain hemispheres, calms the nervous system, and improves respiratory function.</p>
                  <div className="technique-instruction">
                    <strong>Practice:</strong> Use right thumb to close right nostril, inhale left; close both, exhale right; inhale right; close both, exhale left. Continue 5-10 cycles.
                  </div>
                </div>
                <div className="technique-card">
                  <h3>Bhramari (Bee Breath)</h3>
                  <p>Calms the mind, reduces anxiety, and improves concentration. The humming sound has a natural meditative quality.</p>
                  <div className="technique-instruction">
                    <strong>Practice:</strong> Inhale deeply, then exhale while making a humming bee sound. Feel the vibration in your head and chest.
                  </div>
                </div>
                <div className="technique-card">
                  <h3>Kapalabhati (Skull Shining)</h3>
                  <p>Energizing breath that cleanses the respiratory system and increases mental clarity.</p>
                  <div className="technique-instruction">
                    <strong>Practice:</strong> Quick, forceful exhales through the nose with passive inhales. Start with 30 rapid breaths, then normal breathing.
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Yoga Practice Etiquette</h2>
              <div className="section-content">
                <p>
                  Respecting yoga etiquette creates a harmonious environment for all practitioners. 
                  Whether in a class or community setting:
                </p>
              </div>
              <div className="etiquette-list">
                <div className="etiquette-item">
                  <h3>Arrive on Time</h3>
                  <p>Enter quietly if late, and set up without disrupting others. If you must leave early, inform the instructor and exit before final relaxation.</p>
                </div>
                <div className="etiquette-item">
                  <h3>Silence Your Devices</h3>
                  <p>Turn off or silence all electronic devices. Yoga is a time for disconnection and presence.</p>
                </div>
                <div className="etiquette-item">
                  <h3>Stay for Savasana</h3>
                  <p>Final relaxation (Savasana) is a crucial part of practice. If you must leave, do so respectfully after notifying the instructor.</p>
                </div>
                <div className="etiquette-item">
                  <h3>Honor Your Body</h3>
                  <p>Never force a pose. Use modifications and props as needed. Your practice is unique—avoid comparing yourself to others.</p>
                </div>
                <div className="etiquette-item">
                  <h3>Maintain Cleanliness</h3>
                  <p>Keep your practice space clean. Use a towel on mats if you sweat, and clean shared equipment after use.</p>
                </div>
                <div className="etiquette-item">
                  <h3>Respect Personal Space</h3>
                  <p>Be mindful of others' space, especially in crowded classes. Keep voices low and movements mindful.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Building a Consistent Practice</h2>
              <div className="section-content">
                <p>
                  Consistency transforms yoga from an activity into a way of life. Here's how to maintain 
                  a regular practice:
                </p>
              </div>
              <div className="consistency-tips">
                <div className="consistency-item">
                  <h3>Schedule Your Practice</h3>
                  <p>Treat yoga like any important appointment. Block time in your calendar and protect it.</p>
                </div>
                <div className="consistency-item">
                  <h3>Create a Dedicated Space</h3>
                  <p>Designate a quiet, clutter-free area for practice. Having a dedicated space removes friction.</p>
                </div>
                <div className="consistency-item">
                  <h3>Set Realistic Goals</h3>
                  <p>Aim for frequency over duration. 10 minutes daily beats 60 minutes weekly. Build from there.</p>
                </div>
                <div className="consistency-item">
                  <h3>Use Guided Sessions</h3>
                  <p>Follow our expert-led classes to stay motivated and ensure proper technique.</p>
                </div>
                <div className="consistency-item">
                  <h3>Track Your Progress</h3>
                  <p>Journal about your practice, note improvements, and reflect on how you feel. Progress motivates consistency.</p>
                </div>
                <div className="consistency-item">
                  <h3>Be Patient and Kind</h3>
                  <p>Some days will be easier than others. Approach your practice with self-compassion, not judgment.</p>
                </div>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/hot-yoga" className="btn btn-primary">Try Our Yoga Sessions</Link>
              <Link to="/wellness-guide" className="btn btn-secondary">Wellness Guide</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
