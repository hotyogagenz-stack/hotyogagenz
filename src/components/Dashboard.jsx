import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodChecker from './MoodChecker';
import GlassCard from './GlassCard';
import { FaRegCalendarAlt, FaHeart, FaComments, FaList, FaChartLine, FaTrophy, FaCog, FaBook, FaUserPlus, FaRobot, FaExclamationCircle } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [moodHistory, setMoodHistory] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    // Initialize with some mock data
    setJournalEntries([
      { id: 1, text: 'Today I felt grateful for small wins.', date: new Date().toISOString().split('T')[0] },
      { id: 2, text: 'Had a breakthrough in my yoga practice.', date: new Date(Date.now() - 86400000).toISOString().split('T')[0] },
    ]);
    
    setSavedItems([
      { id: 1, title: '5-Minute Morning Yoga', type: 'video' },
      { id: 2, title: 'Journaling Prompts for Self-Love', type: 'article' },
      { id: 3, title: 'Guided Meditation for Anxiety', type: 'audio' },
    ]);
    
    setUpcomingSessions([
      { id: 1, title: 'Hot Yoga Session', time: 'Tomorrow 7:00 PM', type: 'yoga' },
      { id: 2, title: 'Listener Chat', time: 'Friday 3:00 PM', type: 'listener' },
    ]);
    
    setAchievements([
      { id: 1, title: 'First Check-in', icon: '🌱', earned: true },
      { id: 2, title: '3-Day Streak', icon: '🔥', earned: true },
      { id: 3, title: 'Yoga Starter', icon: '🧘', earned: false },
    ]);
    
    // Initialize mood history with last 7 days (mock)
    const history = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      // Random mood for demo
      const moods = ['😊', '😐', '😔', '😣', '😡'];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      history.push({ date: date.toISOString().split('T')[0], mood: randomMood });
    }
    setMoodHistory(history);
  }, []);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    // Add to mood history (today)
    const today = new Date().toISOString().split('T')[0];
    const updatedHistory = [...moodHistory];
    const todayIndex = updatedHistory.findIndex(entry => entry.date === today);
    if (todayIndex >= 0) {
      updatedHistory[todayIndex].mood = selectedMood;
    } else {
      updatedHistory.push({ date: today, mood: selectedMood });
    }
    setMoodHistory(updatedHistory);
  };

  const handleJournalSubmit = (text) => {
    const newEntry = {
      id: Date.now(),
      text,
      date: new Date().toISOString().split('T')[0]
    };
    setJournalEntries([newEntry, ...journalEntries]);
  };

  const handleSaveItem = (item) => {
    if (!savedItems.some(saved => saved.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleQuickAction = (action) => {
    switch(action) {
      case 'talk':
        navigate('/talk-space');
        break;
      case 'yoga':
        navigate('/hot-yoga');
        break;
      case 'healing':
        navigate('/healing');
        break;
      case 'journal':
        document.querySelector('.dashboard-journal')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Welcome + Mood Check-in */}
      <section className="dashboard-welcome">
        <div className="welcome-content">
          <h1>Hey there 🌙 How are you feeling today?</h1>
          <p className="welcome-subtitle">Track your mood to unlock personalized wellness recommendations</p>
        </div>
        <MoodChecker onMoodSelect={handleMoodSelect} />
      </section>

      {/* Emergency Calm Button - Fixed position */}
      <button className="emergency-calm-btn" onClick={() => {/* Open emergency calm overlay */}}>
        <FaExclamationCircle />
        <span>I'm overwhelmed</span>
      </button>

      {/* Today's Wellness Snapshot */}
      <section className="dashboard-snapshot">
        <h2>Today's Wellness Snapshot</h2>
        <div className="snapshot-grid">
          <GlassCard className="snapshot-card">
            <div className="snapshot-icon">😊</div>
            <h3>Mood Score</h3>
            <p className="snapshot-value">{mood || 'Not set'}</p>
          </GlassCard>
          <GlassCard className="snapshot-card">
            <div className="snapshot-icon">🧘</div>
            <h3>Yoga Minutes</h3>
            <p className="snapshot-value">85 min</p>
          </GlassCard>
          <GlassCard className="snapshot-card">
            <div className="snapshot-icon">📓</div>
            <h3>Journal Streak</h3>
            <p className="snapshot-value">{journalEntries.length} Days</p>
          </GlassCard>
          <GlassCard className="snapshot-card">
            <div className="snapshot-icon">📅</div>
            <h3>Sessions</h3>
            <p className="snapshot-value">{upcomingSessions.length} Upcoming</p>
          </GlassCard>
          <GlassCard className="snapshot-card">
            <div className="snapshot-icon">📈</div>
            <h3>Healing Progress</h3>
            <p className="snapshot-value">75%</p>
          </GlassCard>
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section className="dashboard-recommendations">
        <h2>Personalized for You</h2>
        <div className="recommendations-grid">
          {mood ? (
            <>
              {mood === '😔' || mood === '😣' || mood === '😡' ? (
                <GlassCard className="recommendation-card">
                  <div className="rec-icon">💙</div>
                  <h3>Heart Healing</h3>
                  <p>Try this calming audio session</p>
                  <button onClick={() => navigate('/healing')}>Explore Healing</button>
                </GlassCard>
              ) : null}
              {mood === '😔' || mood === '😣' ? (
                <GlassCard className="recommendation-card">
                  <div className="rec-icon">🧘</div>
                  <h3>Soft Yoga Stretch</h3>
                  <p>Gentle flow for emotional release</p>
                  <button onClick={() => navigate('/hot-yoga')}>Start Session</button>
                </GlassCard>
              ) : null}
              {mood === '😐' || mood === '😊' ? (
                <GlassCard className="recommendation-card">
                  <div className="rec-icon">📓</div>
                  <h3>Journal Prompt</h3>
                  <p>What's one thing you're proud of today?</p>
                  <button onClick={() => handleQuickAction('journal')}>Open Journal</button>
                </GlassCard>
              ) : null}
            </>
          ) : (
            <GlassCard className="recommendation-card">
              <div className="rec-icon">🎯</div>
              <h3>Start Your Journey</h3>
              <p>Check in with your mood to get personalized recommendations</p>
              <button onClick={() => document.querySelector('.dashboard-welcome')?.scrollIntoView({ behavior: 'smooth' })}>Check Mood Now</button>
            </GlassCard>
          )}
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="dashboard-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn" onClick={() => handleQuickAction('talk')}>
            <FaUserPlus /> Talk to Listener
          </button>
          <button className="action-btn" onClick={() => handleQuickAction('yoga')}>
            <FaRegCalendarAlt /> Start Yoga Session
          </button>
          <button className="action-btn" onClick={() => handleQuickAction('healing')}>
            <FaHeart /> Heart Healing
          </button>
          <button className="action-btn" onClick={() => navigate('/talk-space')}>
            <FaComments /> Vent Anonymously
          </button>
          <button className="action-btn" onClick={() => handleQuickAction('journal')}>
            <FaBook /> Journal Now
          </button>
        </div>
      </section>

      {/* Mood Tracker */}
      <section className="dashboard-mood-tracker">
        <h2>Mood Tracker</h2>
        <div className="mood-tracker-container">
          <div className="mood-history">
            {moodHistory.map((day, index) => (
              <div key={index} className="mood-day" title={day.date}>
                <span className="mood-emoji">{day.mood}</span>
                <span className="mood-date">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
              </div>
            ))}
          </div>
          <p className="mood-tracker-label">Last 7 days</p>
        </div>
      </section>

      {/* Saved Content / Favorites */}
      <section className="dashboard-saved">
        <h2>Saved Content</h2>
        {savedItems.length > 0 ? (
          <div className="saved-grid">
            {savedItems.map((item) => (
              <GlassCard key={item.id} className="saved-card">
                <div className="saved-icon">
                  {item.type === 'video' ? '🎥' : item.type === 'article' ? '📄' : '🎧'}
                </div>
                <h3>{item.title}</h3>
                <p>{item.type}</p>
                <button onClick={() => {/* Handle save/unsave */}}>Remove</button>
              </GlassCard>
            ))}
          </div>
        ) : (
          <p className="empty-state">No saved items yet. Save content you love to find it here.</p>
        )}
      </section>

      {/* Upcoming Bookings / Sessions */}
      <section className="dashboard-sessions">
        <h2>Upcoming Sessions</h2>
        {upcomingSessions.length > 0 ? (
          <div className="sessions-list">
            {upcomingSessions.map((session) => (
              <GlassCard key={session.id} className="session-card">
                <div className="session-icon">
                  {session.type === 'yoga' ? '🧘' : '💬'}
                </div>
                <h3>{session.title}</h3>
                <p>{session.time}</p>
                <div className="session-actions">
                  <button>Reschedule</button>
                  <button>Cancel</button>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <p className="empty-state">No upcoming sessions. <a href="/hot-yoga">Book a session</a> to see it here.</p>
        )}
      </section>

      {/* Private Journal Space */}
      <section className="dashboard-journal">
        <h2>Private Journal</h2>
        <div className="journal-container">
          {journalEntries.length > 0 ? (
            <div className="journal-entries">
              {journalEntries.slice(0, 3).map((entry) => (
                <div key={entry.id} className="journal-entry">
                  <p className="journal-text">{entry.text}</p>
                  <small className="journal-date">{entry.date}</small>
                </div>
              ))}
              {journalEntries.length > 3 && (
                <button className="view-all-btn">View All Entries</button>
              )}
            </div>
          ) : (
            <p className="empty-state">Your journal is empty. Start writing to capture your thoughts.</p>
          )}
          <textarea
            placeholder="Today I feel..."
            className="journal-input"
            onChange={(e) => {/* Handle input */}}
          />
          <button className="journal-submit-btn">Save Entry</button>
        </div>
      </section>

      {/* Progress + Achievements (Gamified) */}
      <section className="dashboard-achievements">
        <h2>Progress & Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <GlassCard key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.earned ? 'Earned' : 'In Progress'}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Safe Space Settings */}
      <section className="dashboard-settings">
        <h2>Safe Space Settings</h2>
        <div className="settings-grid">
          <GlassCard className="settings-card">
            <div className="settings-icon">🔒</div>
            <h3>Privacy & Security</h3>
            <p>Control your data and anonymity preferences</p>
            <button>Manage Settings</button>
          </GlassCard>
          <GlassCard className="settings-card">
            <div className="settings-icon">🔔</div>
            <h3>Notifications</h3>
            <p>Customize your reminder and alert preferences</p>
            <button>Manage Settings</button>
          </GlassCard>
          <GlassCard className="settings-card">
            <div className="settings-icon">🎨</div>
            <h3>Appearance</h3>
            <p>
              <button onClick={toggleDarkMode} className="theme-toggle-btn">
                {isDarkMode ? <FiSun /> : <FiMoon />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
