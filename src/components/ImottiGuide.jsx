import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FadeUp, 
  FadeIn, 
  ScaleIn, 
  SlideInFromRight,
  StaggerContainer,
  StaggerItem 
} from './animations';

const moodData = {
  'Serene': {
    title: 'Find Your Center',
    description: 'Cultivate inner peace through mindful movement and breath',
    quote: '"In the midst of movement and chaos, keep stillness inside of you."',
    exercise: '5-Minute Box Breathing: Inhale 4s, hold 4s, exhale 4s, hold 4s',
    pose: 'Mountain Pose (Tadasana)',
    poseSanskrit: 'ताडासन',
    poseDescription: 'Stand tall with feet together, arms at sides. Ground through all four corners of your feet, engage your thighs, and lengthen your spine. Reach the crown of your head toward the sky while relaxing your shoulders down.',
    practice: 'Body Scan Meditation',
    practiceDescription: 'Lie down comfortably and systematically bring awareness to each part of your body, from toes to crown. Notice sensations without judgment.',
    benefits: ['Reduces stress and anxiety', 'Improves focus and concentration', 'Promotes better posture', 'Enhances mind-body awareness'],
    color: '#7FBEAB',
    gradient: 'linear-gradient(135deg, #7FBEAB 0%, #4A9D8B 100%)'
  },
  'Anxious': {
    title: 'Release & Restore',
    description: 'Calm your nervous system with gentle, grounding practices',
    quote: '"You don\'t have to control your thoughts. You just have to stop letting them control you."',
    exercise: '4-7-8 Calming Breath: Inhale 4s, hold 7s, exhale 8s',
    pose: 'Child\'s Pose (Balasana)',
    poseSanskrit: 'बालासन',
    poseDescription: 'Kneel on the floor, touch big toes together, sit on heels. Separate knees hip-width apart, fold forward, and extend arms in front or alongside body. Rest forehead on the mat.',
    practice: 'Progressive Muscle Relaxation',
    practiceDescription: 'Starting from your feet, tense each muscle group for 5 seconds, then release. Work up through your body, noticing the contrast between tension and relaxation.',
    benefits: ['Activates parasympathetic nervous system', 'Reduces cortisol levels', 'Calms the mind', 'Releases physical tension'],
    color: '#9B8AC4',
    gradient: 'linear-gradient(135deg, #9B8AC4 0%, #7B6AA4 100%)'
  },
  'Energized': {
    title: 'Channel Your Power',
    description: 'Transform your energy with dynamic movement and focus',
    quote: '"Energy and persistence conquer all things." — Benjamin Franklin',
    exercise: 'Energizing Breath: Quick inhales through nose, sharp exhales through mouth (20 rounds)',
    pose: 'Warrior II (Virabhadrasana II)',
    poseSanskrit: 'वीरभद्रासन II',
    poseDescription: 'From standing, step feet 4 feet apart. Turn right foot out 90°, left foot slightly in. Bend right knee over ankle, extend arms parallel to floor, gaze over right fingertips.',
    practice: 'Sun Salutation Flow',
    practiceDescription: 'Move through a continuous sequence: Mountain → Forward Fold → Half Lift → Plank → Chaturanga → Upward Dog → Downward Dog. Repeat 5 times with breath.',
    benefits: ['Increases energy and vitality', 'Builds strength and stamina', 'Improves circulation', 'Boosts mental alertness'],
    color: '#E8A87C',
    gradient: 'linear-gradient(135deg, #E8A87C 0%, #D8885C 100%)'
  },
  'Reflective': {
    title: 'Inner Wisdom',
    description: 'Explore deeper awareness through contemplative practice',
    quote: '"The mind is everything. What you think you become." — Buddha',
    exercise: 'Third Eye Focus: Soften gaze, bring attention to the space between eyebrows',
    pose: 'Seated Forward Fold (Paschimottanasana)',
    poseSanskrit: 'पश्चिमोत्तानासन',
    poseDescription: 'Sit with legs extended, flex feet. Inhale to lengthen spine, exhale to fold forward from hips. Reach for feet or shins, keeping spine long rather than rounding.',
    practice: 'Loving-Kindness Meditation',
    practiceDescription: 'Silently repeat phrases of goodwill: "May I be happy. May I be healthy. May I be at peace." Then extend to others: loved ones, neutral people, difficult people, all beings.',
    benefits: ['Cultivates self-compassion', 'Enhances emotional intelligence', 'Deepens introspection', 'Promotes spiritual growth'],
    color: '#85B8CB',
    gradient: 'linear-gradient(135deg, #85B8CB 0%, #6598AB 100%)'
  },
  'Grounded': {
    title: 'Root & Rise',
    description: 'Connect with earth energy and find stability',
    quote: '"To forget how to dig the earth and to tend the soil is to forget ourselves." — Mahatma Gandhi',
    exercise: 'Grounding Breath: Breathe into your belly, imagine roots growing from feet into the earth',
    pose: 'Tree Pose (Vrksasana)',
    poseSanskrit: 'वृक्षासन',
    poseDescription: 'Stand on left foot, place right foot on inner left thigh or calf (avoid knee). Bring hands to heart center or extend overhead. Find a focal point for balance.',
    practice: 'Walking Meditation',
    practiceDescription: 'Walk slowly, feeling each foot lift, move forward, and press into the ground. Sync your breath with your steps: inhale for 3 steps, exhale for 3 steps.',
    benefits: ['Improves balance and stability', 'Builds focus and concentration', 'Connects to present moment', 'Enhances body awareness'],
    color: '#C9A86C',
    gradient: 'linear-gradient(135deg, #C9A86C 0%, #A9884C 100%)'
  },
  'Open': {
    title: 'Heart Expansion',
    description: 'Open your heart to compassion and connection',
    quote: '"The heart has its reasons which reason knows nothing of." — Blaise Pascal',
    exercise: 'Heart-Opening Breath: Inhale deep into chest, feel ribs expand sideways',
    pose: 'Cobra Pose (Bhujangasana)',
    poseSanskrit: 'भुजङ्गासन',
    poseDescription: 'Lie face down, hands under shoulders. Press tops of feet and thighs into floor. Inhale, lift chest using back muscles (not just arms), keep elbows close to body.',
    practice: 'Gratitude Journaling',
    practiceDescription: 'Write down 3 things you\'re grateful for today. Be specific: not just "family" but a particular moment or quality. Notice how this shifts your perspective.',
    benefits: ['Opens chest and lungs', 'Strengthens spine', 'Energizes heart chakra', 'Fosters emotional openness'],
    color: '#D4A5A5',
    gradient: 'linear-gradient(135deg, #D4A5A5 0%, #B48585 100%)'
  }
};

const moods = [
  { key: 'Serene', label: 'Serene', color: '#7FBEAB' },
  { key: 'Anxious', label: 'Anxious', color: '#9B8AC4' },
  { key: 'Energized', label: 'Energized', color: '#E8A87C' },
  { key: 'Reflective', label: 'Reflective', color: '#85B8CB' },
  { key: 'Grounded', label: 'Grounded', color: '#C9A86C' },
  { key: 'Open', label: 'Open', color: '#D4A5A5' }
];

// Additional content sections - icons removed
const features = [
  {
    title: 'Personalized Guidance',
    description: 'Each emotional state comes with tailored practices designed to help you shift and balance your energy naturally.'
  },
  {
    title: 'Holistic Approach',
    description: 'We combine breathwork, yoga poses, and meditation to address your wellbeing on multiple levels.'
  },
  {
    title: 'Evidence-Based',
    description: 'Our practices are rooted in ancient wisdom and supported by modern research on mindfulness and wellness.'
  },
  {
    title: 'Safe & Accessible',
    description: 'All practices can be modified for different skill levels, making wellness accessible to everyone.'
  }
];

export default function ImottiGuide({ isPage = false }) {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (moodKey) => {
    setSelectedMood(moodKey);
  };

  const handleBack = () => {
    setSelectedMood(null);
  };

  return (
    <section id="imotti-guide" className={`imotti-section ${isPage ? 'imotti-page' : ''}`}>
      {/* Page Hero - REDESIGNED - Only show when isPage is true */}
      {isPage && (
        <motion.div 
          className="imotti-redesigned-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract geometric background */}
          <div className="imotti-hero-geometric-bg">
            {/* Large gradient circles */}
            <motion.div 
              className="imotti-geo-circle imotti-geo-circle-1"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="imotti-geo-circle imotti-geo-circle-2"
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, -30, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="imotti-geo-circle imotti-geo-circle-3"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Horizontal lines */}
            <motion.div 
              className="imotti-geo-line imotti-geo-line-h1"
              animate={{ x: ['-10%', '10%', '-10%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="imotti-geo-line imotti-geo-line-h2"
              animate={{ x: ['10%', '-10%', '10%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Vertical lines */}
            <motion.div 
              className="imotti-geo-line imotti-geo-line-v1"
              animate={{ y: ['-10%', '10%', '-10%'] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="imotti-geo-line imotti-geo-line-v2"
              animate={{ y: ['10%', '-10%', '10%'] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating squares */}
            <motion.div 
              className="imotti-geo-square imotti-geo-square-1"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="imotti-geo-square imotti-geo-square-2"
              animate={{ 
                rotate: [360, 180, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Dots pattern */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="imotti-geo-dot"
                style={{
                  left: `${5 + (i % 5) * 20}%`,
                  top: `${10 + Math.floor(i / 5) * 18}%`,
                  width: `${3 + (i % 3)}px`,
                  height: `${3 + (i % 3)}px`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
          
          <div className="imotti-redesigned-hero-content">
            {/* Left side - Typography focused */}
            <div className="imotti-hero-text-block">
              <FadeUp>
                <div className="imotti-hero-label">
                  <span className="imotti-hero-label-line"></span>
                  <span>Personal Wellness Guide</span>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <h1 className="imotti-hero-title">
                  <span className="imotti-hero-title-main">Imotti</span>
                  <span className="imotti-hero-title-accent">Guide</span>
                </h1>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="imotti-hero-description">
                  Your emotions are messengers. Learn to listen, understand, and transform 
                  through ancient wisdom and modern mindfulness practices.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                <div className="imotti-hero-cta-group">
                  <motion.a 
                    href="#moods"
                    className="imotti-hero-cta-button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Begin Your Journey</span>
                    <span className="imotti-arrow-indicator">→</span>
                  </motion.a>
                  <span className="imotti-hero-note">No signup required</span>
                </div>
              </FadeUp>
              
              {/* Stats/Trust indicators */}
              <FadeUp delay={0.4}>
                <div className="imotti-hero-stats-row">
                  <div className="imotti-stat-item">
                    <span className="imotti-stat-number">6</span>
                    <span className="imotti-stat-label">Emotional States</span>
                  </div>
                  <div className="imotti-stat-divider"></div>
                  <div className="imotti-stat-item">
                    <span className="imotti-stat-number">∞</span>
                    <span className="imotti-stat-label">Personalized</span>
                  </div>
                  <div className="imotti-stat-divider"></div>
                  <div className="imotti-stat-item">
                    <span className="imotti-stat-number">Free</span>
                    <span className="imotti-stat-label">Forever</span>
                  </div>
                </div>
              </FadeUp>
            </div>
            
            {/* Right side - Abstract visual composition */}
            <FadeUp delay={0.15} className="imotti-hero-visual-side">
              <div className="imotti-abstract-composition">
                {/* Central geometric form */}
                <motion.div 
                  className="imotti-central-form"
                  animate={{ 
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ['30%', '50%', '30%', '50%', '30%']
                  }}
                  transition={{ 
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Orbiting elements */}
                <motion.div 
                  className="imotti-orbit-element imotti-orbit-1"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="imotti-orbit-element imotti-orbit-2"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="imotti-orbit-element imotti-orbit-3"
                  animate={{ 
                    rotate: [180, 540],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Text element inside composition */}
                <div className="imotti-composition-text">
                  <span className="imotti-comp-letter">I</span>
                  <span className="imotti-comp-letter">G</span>
                </div>
              </div>
            </FadeUp>
          </div>
          
          {/* Bottom wave divider */}
          <div className="imotti-hero-wave-divider">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <motion.path
                d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                fill="currentColor"
                animate={{ 
                  d: [
                    "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                    "M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z",
                    "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Features Section - Only show on page mode */}
      {isPage && (
        <motion.div 
          className="imotti-features"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="imotti-features-container">
            <StaggerContainer className="imotti-features-grid" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="imotti-feature-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="imotti-feature-visual">
                      <div className="imotti-feature-shape"></div>
                    </div>
                    <h3 className="imotti-feature-title">{feature.title}</h3>
                    <p className="imotti-feature-desc">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </motion.div>
      )}
      
      <div className="imotti-container">
        {/* Header - Only show when NOT isPage */}
        {!isPage && (
          <div className="imotti-header">
            <FadeUp>
              <span className="imotti-overline">Wellness Guide</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="imotti-title">Imotti Guide</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="imotti-subtitle">
                Discover personalized practices for emotional balance and inner harmony
              </p>
            </FadeUp>
          </div>
        )}

        {/* Section Title - Show on page mode */}
        {isPage && (
          <motion.div 
            className="imotti-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Choose Your Current State</h2>
            <p>Select how you're feeling today to receive personalized guidance</p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!selectedMood ? (
            /* Mood Selection Grid */
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="imotti-selection"
              id="moods"
            >
              <StaggerContainer className="imotti-grid" staggerDelay={0.08}>
                {moods.map((mood) => (
                  <StaggerItem key={mood.key}>
                    <motion.button
                      className="imotti-card"
                      onClick={() => handleMoodSelect(mood.key)}
                      style={{ 
                        '--card-color': mood.color,
                        '--card-gradient': moodData[mood.key].gradient
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="imotti-card-accent"></div>
                      <div className="imotti-card-visual">
                        <div className="imotti-card-shape"></div>
                      </div>
                      <h3 className="imotti-card-title">{mood.label}</h3>
                      <p className="imotti-card-desc">{moodData[mood.key].description}</p>
                      <div className="imotti-card-arrow">
                        <span className="imotti-arrow-symbol">→</span>
                      </div>
                    </motion.button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <FadeUp delay={0.6}>
                <p className="imotti-hint">
                  <span className="imotti-hint-prefix"></span>
                  Select a state to receive your personalized wellness guidance
                </p>
              </FadeUp>
            </motion.div>
          ) : (
            /* Detailed Mood Content */
            <motion.div
              key={selectedMood}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="imotti-detail"
              style={{ 
                '--detail-color': moodData[selectedMood].color,
                '--detail-gradient': moodData[selectedMood].gradient
              }}
            >
              <motion.button 
                className="imotti-back"
                onClick={handleBack}
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="imotti-back-arrow">←</span>
                Back to All States
              </motion.button>

              <div className="imotti-detail-header">
                <ScaleIn>
                  <div className="imotti-detail-visual">
                    <div className="imotti-detail-shape"></div>
                  </div>
                </ScaleIn>
                <FadeUp>
                  <h3 className="imotti-detail-title">{moodData[selectedMood].title}</h3>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <p className="imotti-detail-desc">{moodData[selectedMood].description}</p>
                </FadeUp>
              </div>

              <motion.div 
                className="imotti-quote-block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="imotti-quote-mark">"</span>
                <p className="imotti-quote">{moodData[selectedMood].quote}</p>
              </motion.div>

              <div className="imotti-panels">
                <StaggerContainer className="imotti-panel-grid" staggerDelay={0.1}>
                  <StaggerItem>
                    <motion.div 
                      className="imotti-panel imotti-panel-breath"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="imotti-panel-header">
                        <div className="imotti-panel-visual">
                          <div className="imotti-panel-shape imotti-panel-shape-breath"></div>
                        </div>
                        <div>
                          <h4>Breathing Practice</h4>
                          <span className="imotti-panel-tag">Quick Relief</span>
                        </div>
                      </div>
                      <p className="imotti-panel-pose">{moodData[selectedMood].exercise}</p>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div 
                      className="imotti-panel imotti-panel-pose"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="imotti-panel-header">
                        <div className="imotti-panel-visual">
                          <div className="imotti-panel-shape imotti-panel-shape-pose"></div>
                        </div>
                        <div>
                          <h4>Yoga Pose</h4>
                          <span className="imotti-panel-tag">{moodData[selectedMood].poseSanskrit}</span>
                        </div>
                      </div>
                      <p className="imotti-panel-pose">{moodData[selectedMood].pose}</p>
                      <p className="imotti-panel-content">{moodData[selectedMood].poseDescription}</p>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div 
                      className="imotti-panel imotti-panel-meditation"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="imotti-panel-header">
                        <div className="imotti-panel-visual">
                          <div className="imotti-panel-shape imotti-panel-shape-meditation"></div>
                        </div>
                        <div>
                          <h4>Meditation Practice</h4>
                          <span className="imotti-panel-tag">Deep Work</span>
                        </div>
                      </div>
                      <p className="imotti-panel-pose">{moodData[selectedMood].practice}</p>
                      <p className="imotti-panel-content">{moodData[selectedMood].practiceDescription}</p>
                    </motion.div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Benefits Section */}
              <motion.div 
                className="imotti-benefits"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="imotti-benefits-title">
                  <span className="imotti-benefits-marker">■</span>
                  Benefits of This Practice
                </h4>
                <ul className="imotti-benefits-list">
                  {moodData[selectedMood].benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                    >
                      <span className="imotti-benefit-marker">—</span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="imotti-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>Ready to explore more states of being?</p>
                <motion.button 
                  className="imotti-reset-btn"
                  onClick={handleBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Other States
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <div className="imotti-decoration imotti-decoration-1"></div>
      <div className="imotti-decoration imotti-decoration-2"></div>
    </section>
  );
}
