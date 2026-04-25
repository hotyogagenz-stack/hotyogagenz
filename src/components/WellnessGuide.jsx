import React from 'react';
import { Link } from 'react-router-dom';

export default function WellnessGuide() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="wellness-guide-page">
            <div className="page-header">
              <h1>Wellness Guide</h1>
              <p className="lead">
                Comprehensive resources and practical guidance to support your holistic wellness journey.
              </p>
            </div>

            <section className="content-section">
              <h2>Understanding Holistic Wellness</h2>
              <div className="section-content">
                <p>
                  Wellness is an active, conscious process of becoming aware of and making choices 
                  toward a healthy and fulfilling life. It extends beyond the absence of illness—it's 
                  a dynamic, ongoing journey of growth, self-discovery, and balanced living.
                </p>
                <p>
                  At June Flint, we believe in treating wellness as a whole—integrating mind, body, 
                  and spirit. Our approach combines evidence-based practices with ancient wisdom to 
                  create a comprehensive path to well-being.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>The Eight Dimensions of Wellness</h2>
              <div className="section-content">
                <p>
                  True wellness encompasses multiple interconnected dimensions. Nurturing each area 
                  creates a balanced, fulfilling life:
                </p>
              </div>
              <div className="dimensions-grid">
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Emotional Wellness</h3>
                  <p>Coping effectively with life's challenges and creating satisfying, meaningful relationships</p>
                  <ul>
                    <li>Practice self-awareness and emotional regulation</li>
                    <li>Develop healthy coping mechanisms</li>
                    <li>Seek support when needed</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Environmental Wellness</h3>
                  <p>Good health through occupying pleasant, stimulating, and supportive environments</p>
                  <ul>
                    <li>Create spaces that promote well-being</li>
                    <li>Practice environmental stewardship</li>
                    <li>Surround yourself with positive influences</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V22" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10C10.8807 10 12 8.88071 12 7.5C12 6.11929 10.8807 5 9.5 5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17 5C18.3284 5 19.5 6.17157 19.5 7.5C19.5 8.82843 18.3284 10 17 10C15.6716 10 14.5 8.82843 14.5 7.5C14.5 6.17157 15.6716 5 17 5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17 19H9.5C8.11929 19 7 20.1193 7 21.5C7 22.8807 8.11929 24 9.5 24C10.8807 24 12 22.8807 12 21.5C12 20.1193 10.8807 19 9.5 19" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17 19C18.3284 19 19.5 20.1716 19.5 21.5C19.5 22.8284 18.3284 24 17 24C15.6716 24 14.5 22.8284 14.5 21.5C14.5 20.1716 15.6716 19 17 19Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Financial Wellness</h3>
                  <p>Satisfaction with current and future financial situations through responsible management</p>
                  <ul>
                    <li>Create and maintain a budget</li>
                    <li>Save for short and long-term goals</li>
                    <li>Develop financial literacy</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7L12 2L22 7V17L12 22L2 17V7Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 22V12" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 12L2 7" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 12L22 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Intellectual Wellness</h3>
                  <p>Recognizing creative abilities and finding ways to expand knowledge and skills</p>
                  <ul>
                    <li>Engage in lifelong learning</li>
                    <li>Explore new hobbies and interests</li>
                    <li>Challenge your thinking</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="currentColor" strokeWidth="2"/>
                      <path d="M6 21V19C6 17.8954 6.89543 17 8 17H16C17.1046 17 18 17.8954 18 19V21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Occupational Wellness</h3>
                  <p>Personal satisfaction and enrichment from one's work and contributions</p>
                  <ul>
                    <li>Find meaningful, fulfilling work</li>
                    <li>Maintain work-life balance</li>
                    <li>Set career goals and pursue growth</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Physical Wellness</h3>
                  <p>Recognizing the need for physical activity, proper nutrition, and adequate sleep</p>
                  <ul>
                    <li>Regular exercise and movement</li>
                    <li>Balanced, nutritious diet</li>
                    <li>Prioritize quality sleep</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 3.13C17.7699 3.58268 19.0078 5.17805 19.0078 7.005C19.0078 8.83195 17.7699 10.4273 16 10.88" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Social Wellness</h3>
                  <p>Developing a sense of connection, belonging, and a well-developed support system</p>
                  <ul>
                    <li>Build and maintain healthy relationships</li>
                    <li>Contribute to your community</li>
                    <li>Practice effective communication</li>
                  </ul>
                </div>
                <div className="dimension-card">
                  <div className="dimension-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 14C12.825 14 13.5 13.325 13.5 12.5C13.5 11.675 12.825 11 12 11C11.175 11 10.5 11.675 10.5 12.5C10.5 13.325 11.175 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Spiritual Wellness</h3>
                  <p>Expanding a sense of purpose, meaning, and inner peace in life</p>
                  <ul>
                    <li>Explore personal values and beliefs</li>
                    <li>Practice mindfulness and meditation</li>
                    <li>Connect with something greater than yourself</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Starting Your Wellness Journey</h2>
              <div className="section-content">
                <p>
                  Beginning your wellness journey can feel overwhelming, but taking it step by step 
                  makes it manageable and sustainable. Here's our recommended approach:
                </p>
              </div>
              <div className="journey-steps">
                <div className="journey-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Self-Assessment</h3>
                    <p>Reflect on each dimension of wellness. Identify areas of strength and those needing attention. Be honest with yourself—this is your starting point.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Set Realistic Goals</h3>
                    <p>Choose 2-3 areas to focus on initially. Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound). Start small to build momentum.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Create Daily Routines</h3>
                    <p>Design a daily wellness routine that incorporates your goals. Include morning and evening practices, movement, nutrition, and rest. Consistency matters more than perfection.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Track & Adjust</h3>
                    <p>Monitor your progress regularly. Use journals, apps, or simple check-ins. Celebrate wins and adjust approaches that aren't working. Flexibility is key.</p>
                  </div>
                </div>
                <div className="journey-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Seek Support</h3>
                    <p>You don't have to do this alone. Join our community, work with coaches, or connect with friends. We're here to support your journey every step of the way.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Daily Wellness Practices</h2>
              <div className="section-content">
                <p>
                  Incorporate these foundational practices into your daily routine for optimal well-being:
                </p>
              </div>
              <div className="practices-grid">
                <div className="practice-card">
                  <h3>Morning Ritual</h3>
                  <p>Start your day with intention: 5 minutes of meditation, gentle stretching, and setting daily intentions.</p>
                </div>
                <div className="practice-card">
                  <h3>Mindful Movement</h3>
                  <p>Incorporate yoga, walking, or gentle exercise daily. Focus on feeling your body, not pushing limits.</p>
                </div>
                <div className="practice-card">
                  <h3>Nutrition Awareness</h3>
                  <p>Eat whole, nourishing foods. Practice mindful eating—savor each bite and listen to hunger cues.</p>
                </div>
                <div className="practice-card">
                  <h3>Evening Wind-Down</h3>
                  <p>Create a bedtime routine: disconnect from screens, reflect on your day, and practice gratitude.</p>
                </div>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/join" className="btn btn-primary">Begin Your Journey</Link>
              <Link to="/mindfulness" className="btn btn-secondary">Explore Mindfulness</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
