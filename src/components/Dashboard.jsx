import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { subscribeUserProfile } from '../firebase/profile';
import { subscribeSessions } from '../firebase/sessions';
import { subscribePlans } from '../firebase/plans';
// No decorative icons or emojis for a formal, boxed dashboard
import GlassCard from './GlassCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [membership, setMembership] = useState(null);
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Format date helper
  const formatDate = (date) => {
    if (!date) return '';
    const d = date instanceof Date ? date : date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Format time helper
  const formatTime = (date) => {
    if (!date) return '';
    const d = date instanceof Date ? date : date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  // Fetch real data from Firebase
  useEffect(() => {
    if (!user?.uid) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Subscribe to user profile
    const unsubscribeProfile = subscribeUserProfile(
      user.uid,
      (profile) => {
        if (profile) {
          setUserProfile({
            name: profile.displayName || profile.email?.split('@')[0] || 'User',
            email: profile.email || '—',
            avatar: profile.photoURL || null,
            joinDate: profile.createdAt ? formatDate(profile.createdAt) : '—'
          });
        } else {
          setUserProfile({
            name: user.displayName || user.email?.split('@')[0] || 'User',
            email: user.email || '—',
            avatar: user.photoURL || null,
            joinDate: '—'
          });
        }
      },
      (err) => {
        console.error('Profile subscription error:', err);
      }
    );

    // Subscribe to user sessions (activities)
    const unsubscribeSessions = subscribeSessions(
      user.uid,
      (sessions) => {
        // Build progress data from sessions
        const monthlyData = {};
        sessions.forEach((s) => {
          const d = s.happenedAt?.toDate ? s.happenedAt.toDate() : new Date(s.happenedAt);
          if (d && !isNaN(d.getTime())) {
            const monthKey = d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
            const monthLabel = d.toLocaleString('en-US', { month: 'short' });
            if (!monthlyData[monthKey]) {
              monthlyData[monthKey] = { month: monthLabel, sessions: 0, minutes: 0 };
            }
            monthlyData[monthKey].sessions += 1;
            monthlyData[monthKey].minutes += Number(s.durationMinutes || 0);
          }
        });

        const progress = Object.values(monthlyData)
          .sort((a, b) => {
            // Sort by month order - last 4 months
            return 0;
          })
          .slice(-4);

        if (progress.length === 0) {
          // Default empty state
          const now = new Date();
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const last4 = [];
          for (let i = 3; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            last4.push({ month: months[d.getMonth()], sessions: 0, minutes: 0 });
          }
          setProgressData(last4);
        } else {
          setProgressData(progress);
        }

        // Build upcoming sessions (recent/future activities)
        const upcoming = sessions
          .filter((s) => {
            const d = s.happenedAt?.toDate ? s.happenedAt.toDate() : new Date(s.happenedAt);
            return d && d >= new Date();
          })
          .slice(0, 3)
          .map((s, idx) => ({
            id: s.id || idx,
            title: s.type ? `${s.type.charAt(0).toUpperCase() + s.type.slice(1)} Session` : 'Yoga Session',
            date: formatDate(s.happenedAt),
            time: formatTime(s.happenedAt),
            instructor: 'Instructor',
            type: s.type || 'yoga',
            status: 'confirmed'
          }));

        // If no upcoming sessions, show recent ones as completed
        if (upcoming.length === 0 && sessions.length > 0) {
          const recent = sessions.slice(0, 3).map((s, idx) => ({
            id: s.id || idx,
            title: s.type ? `${s.type.charAt(0).toUpperCase() + s.type.slice(1)} Session` : 'Yoga Session',
            date: formatDate(s.happenedAt),
            time: formatTime(s.happenedAt),
            instructor: 'Completed',
            type: s.type || 'yoga',
            status: 'completed'
          }));
          setUpcomingSessions(recent);
        } else {
          setUpcomingSessions(upcoming);
        }
      },
      (err) => {
        console.error('Sessions subscription error:', err);
      }
    );

    // Subscribe to user plans
    const unsubscribePlansSub = subscribePlans(
      user.uid,
      (plans) => {
        if (plans && plans.length > 0) {
          const activePlan = plans.find((p) => p.status === 'active') || plans[0];
          setMembership({
            plan: activePlan.title || 'Basic Plan',
            status: activePlan.status === 'active' ? 'Active' : 'Inactive',
            nextBilling: 'See billing page',
            sessionsLeft: activePlan.goal ? parseInt(activePlan.goal) || 0 : 10,
            price: 'Check plan details'
          });
        } else {
          setMembership({
            plan: 'No active plan',
            status: 'Inactive',
            nextBilling: '—',
            sessionsLeft: 0,
            price: '—'
          });
        }
      },
      (err) => {
        console.error('Plans subscription error:', err);
      }
    );

    // Set notifications based on recent activity
    const recentNotifications = [
      {
        id: 1,
        message: 'Welcome to your dashboard! Track your yoga journey here.',
        time: 'Just now',
        type: 'welcome',
        read: false
      }
    ];
    setNotifications(recentNotifications);

    setLoading(false);

    // Cleanup subscriptions
    return () => {
      if (unsubscribeProfile) unsubscribeProfile();
      if (unsubscribeSessions) unsubscribeSessions();
      if (unsubscribePlansSub) unsubscribePlansSub();
    };
  }, [user]);

  const handleSessionClick = (session) => {
    navigate(`/session/${session.id}`);
  };

  const handleMarkAsRead = (id) => {
    setNotifications(current =>
      current.map((notification) => (notification.id === id ? { ...notification, read: true } : notification))
    );
  };

  const handleQuickSupport = () => {
    navigate('/help');
  };

  const totalSessions = progressData.reduce((sum, month) => sum + month.sessions, 0);
  const totalMinutes = progressData.reduce((sum, month) => sum + month.minutes, 0);
  const maxSessions = Math.max(1, ...progressData.map((month) => month.sessions));
  const nextSession = upcomingSessions[0];
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <div className="dashboard-ui">
      <GlassCard className="dashboard-ui__hero" blur={16} opacity={0.08} radius="24px">
        <div className="dashboard-ui__heroMain">
          <div className="dashboard-ui__eyebrow">Member Dashboard</div>
          <h1 className="dashboard-ui__title">Dashboard</h1>
          <p className="dashboard-ui__subtitle">
            Welcome back, {userProfile?.name || '—'}. Here’s your membership, progress, and upcoming sessions.
          </p>

          <div className="dashboard-ui__chips" aria-label="Membership summary">
            {membership ? (
              <>
                <span className="dashboard-ui__chip">{membership.plan}</span>
                <span
                  className={`dashboard-ui__chip dashboard-ui__chip--status dashboard-ui__chip--${membership.status.toLowerCase()}`}
                >
                  {membership.status}
                </span>
                <span className="dashboard-ui__chip">Next billing: {membership.nextBilling}</span>
              </>
            ) : (
              <span className="dashboard-ui__chip">Loading membership…</span>
            )}
          </div>
        </div>

        <div className="dashboard-ui__heroActions">
          <button type="button" className="btn btn-secondary dashboard-ui__btn" onClick={() => navigate('/profile')}>
            Profile
          </button>
          <button type="button" className="btn btn-primary dashboard-ui__btn" onClick={() => navigate('/book')}>
            Book session
          </button>
        </div>
      </GlassCard>

      <div className="dashboard-ui__kpis" role="list" aria-label="Key metrics">
        <GlassCard className="dashboard-ui__kpi" blur={14} opacity={0.07} radius="20px" role="listitem">
          <div className="dashboard-ui__kpiLabel">Sessions remaining</div>
          <div className="dashboard-ui__kpiValue">{membership?.sessionsLeft ?? '—'}</div>
          <div className="dashboard-ui__kpiMeta">{membership?.price || 'Current plan'}</div>
        </GlassCard>

        <GlassCard className="dashboard-ui__kpi" blur={14} opacity={0.07} radius="20px" role="listitem">
          <div className="dashboard-ui__kpiLabel">Next session</div>
          <div className="dashboard-ui__kpiValue">{nextSession ? nextSession.date : '—'}</div>
          <div className="dashboard-ui__kpiMeta">
            {nextSession ? `${nextSession.title} • ${nextSession.time}` : 'No sessions booked'}
          </div>
        </GlassCard>

        <GlassCard className="dashboard-ui__kpi" blur={14} opacity={0.07} radius="20px" role="listitem">
          <div className="dashboard-ui__kpiLabel">Total sessions</div>
          <div className="dashboard-ui__kpiValue">{totalSessions}</div>
          <div className="dashboard-ui__kpiMeta">Last 4 months</div>
        </GlassCard>

        <GlassCard className="dashboard-ui__kpi" blur={14} opacity={0.07} radius="20px" role="listitem">
          <div className="dashboard-ui__kpiLabel">Total minutes</div>
          <div className="dashboard-ui__kpiValue">{totalMinutes}</div>
          <div className="dashboard-ui__kpiMeta">Last 4 months</div>
        </GlassCard>
      </div>

      <section className="dashboard-ui__section" aria-label="Quick actions">
        <div className="dashboard-ui__sectionHead">
          <h2 className="dashboard-ui__sectionTitle">Quick actions</h2>
        </div>

        <div className="dashboard-ui__actions">
          <button type="button" className="dashboard-ui__action" onClick={() => navigate('/schedule')}>
            <span className="dashboard-ui__actionTitle">View schedule</span>
            <span className="dashboard-ui__actionMeta">Browse classes</span>
          </button>
          <button type="button" className="dashboard-ui__action" onClick={() => navigate('/invoices')}>
            <span className="dashboard-ui__actionTitle">Invoices</span>
            <span className="dashboard-ui__actionMeta">Billing history</span>
          </button>
          <button type="button" className="dashboard-ui__action" onClick={() => navigate('/membership')}>
            <span className="dashboard-ui__actionTitle">Membership</span>
            <span className="dashboard-ui__actionMeta">Manage plan</span>
          </button>
          <button type="button" className="dashboard-ui__action" onClick={() => navigate('/invite')}>
            <span className="dashboard-ui__actionTitle">Invite a friend</span>
            <span className="dashboard-ui__actionMeta">Share June Flint</span>
          </button>
        </div>
      </section>

      <div className="dashboard-ui__layout">
        <div className="dashboard-ui__main">
          <section className="dashboard-ui__section" aria-label="Membership details">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Membership</h2>
            </div>
            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              <div className="dashboard-ui__membership">
                <div className="dashboard-ui__membershipMain">
                  <div className="dashboard-ui__membershipPlan">{membership?.plan || '—'}</div>
                  <div className="dashboard-ui__membershipRow">
                    <span className="dashboard-ui__label">Status</span>
                    <span className={`dashboard-ui__status dashboard-ui__status--${membership?.status?.toLowerCase()}`}>
                      {membership?.status || '—'}
                    </span>
                  </div>
                  <div className="dashboard-ui__membershipRow">
                    <span className="dashboard-ui__label">Next billing</span>
                    <span className="dashboard-ui__value">{membership?.nextBilling || '—'}</span>
                  </div>
                  <div className="dashboard-ui__membershipRow">
                    <span className="dashboard-ui__label">Sessions remaining</span>
                    <span className="dashboard-ui__value">{membership?.sessionsLeft ?? '—'}</span>
                  </div>
                </div>

                <div className="dashboard-ui__membershipActions">
                  <button type="button" className="btn btn-secondary dashboard-ui__btn" onClick={() => navigate('/billing')}>
                    Manage subscription
                  </button>
                  <button type="button" className="btn btn-primary dashboard-ui__btn" onClick={() => navigate('/upgrade')}>
                    Upgrade
                  </button>
                </div>
              </div>
            </GlassCard>
          </section>

          <section className="dashboard-ui__section" aria-label="Upcoming sessions">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Upcoming sessions</h2>
              <button type="button" className="btn btn-secondary dashboard-ui__btnSm" onClick={() => navigate('/book')}>
                Book session
              </button>
            </div>

            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              {upcomingSessions.length > 0 ? (
                <div className="dashboard-ui__list">
                  {upcomingSessions.map((session) => (
                    <button
                      key={session.id}
                      type="button"
                      className="dashboard-ui__session"
                      onClick={() => handleSessionClick(session)}
                    >
                      <div className="dashboard-ui__sessionTop">
                        <span className="dashboard-ui__badge">
                          {session.type === 'yoga' ? 'Yoga' : session.type === 'meditation' ? 'Meditation' : 'Class'}
                        </span>
                        <span className={`dashboard-ui__pill dashboard-ui__pill--${session.status}`}>{session.status}</span>
                      </div>
                      <div className="dashboard-ui__sessionTitle">{session.title}</div>
                      <div className="dashboard-ui__sessionMeta">
                        <span>{session.date}</span>
                        <span className="dashboard-ui__dot" aria-hidden="true" />
                        <span>{session.time}</span>
                        <span className="dashboard-ui__dot" aria-hidden="true" />
                        <span>with {session.instructor}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  No upcoming sessions. <a href="/book">Book your first session</a>.
                </p>
              )}
            </GlassCard>
          </section>

          <section className="dashboard-ui__section" aria-label="Activity progress">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Activity progress</h2>
            </div>

            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              <div className="dashboard-ui__progress">
                <div className="dashboard-ui__stats">
                  <div className="dashboard-ui__stat">
                    <div className="dashboard-ui__statLabel">Total sessions</div>
                    <div className="dashboard-ui__statValue">{totalSessions}</div>
                  </div>
                  <div className="dashboard-ui__stat">
                    <div className="dashboard-ui__statLabel">Total minutes</div>
                    <div className="dashboard-ui__statValue">{totalMinutes}</div>
                  </div>
                  <div className="dashboard-ui__stat">
                    <div className="dashboard-ui__statLabel">Current streak</div>
                    <div className="dashboard-ui__statValue">3 weeks</div>
                  </div>
                </div>

                <div className="dashboard-ui__chart" aria-label="Monthly sessions chart">
                  <div className="dashboard-ui__chartTitle">Monthly sessions</div>
                  <div className="dashboard-ui__bars">
                    {progressData.map((month) => (
                      <div key={month.month} className="dashboard-ui__bar" title={`${month.sessions} sessions`}>
                        <div
                          className="dashboard-ui__barFill"
                          style={{ height: `${Math.round((month.sessions / maxSessions) * 100)}%` }}
                        />
                        <div className="dashboard-ui__barLabel">{month.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>

        <aside className="dashboard-ui__side">
          <section className="dashboard-ui__section" aria-label="Profile">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Profile</h2>
            </div>
            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              <div className="dashboard-ui__profile">
                <div className="dashboard-ui__avatar">
                  {userProfile?.avatar ? (
                    <img src={userProfile.avatar} alt={`${userProfile.name} avatar`} />
                  ) : (
                    <div className="dashboard-ui__avatarFallback" aria-hidden="true" />
                  )}
                </div>
                <div className="dashboard-ui__profileMain">
                  <div className="dashboard-ui__profileName">{userProfile?.name || '—'}</div>
                  <div className="dashboard-ui__profileEmail">{userProfile?.email || '—'}</div>
                  <div className="dashboard-ui__profileMeta">Member since {userProfile?.joinDate || '—'}</div>
                </div>
              </div>
            </GlassCard>
          </section>

          <section className="dashboard-ui__section" aria-label="Notifications">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">
                Notifications{unreadCount > 0 ? <span className="dashboard-ui__count">{unreadCount}</span> : null}
              </h2>
            </div>
            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              {notifications.length > 0 ? (
                <div className="dashboard-ui__list">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`dashboard-ui__notification ${notification.read ? 'is-read' : 'is-unread'}`}
                      data-type={notification.type}
                    >
                      <div className="dashboard-ui__notificationBody">
                        <div className="dashboard-ui__notificationTop">
                          <span className="dashboard-ui__badge dashboard-ui__badge--muted">
                            {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                          </span>
                          <span className="dashboard-ui__notificationTime">{notification.time}</span>
                        </div>
                        <div className="dashboard-ui__notificationMsg">{notification.message}</div>
                      </div>
                      {!notification.read && (
                        <button
                          type="button"
                          className="btn btn-secondary dashboard-ui__btnXs"
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          Mark read
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No new notifications.</p>
              )}
            </GlassCard>
          </section>

          <section className="dashboard-ui__section" aria-label="Goals">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Goals</h2>
            </div>
            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              <div className="dashboard-ui__goals">
                <div className="dashboard-ui__goal">
                  <div className="dashboard-ui__goalTop">
                    <span className="dashboard-ui__goalTitle">Attend 12 sessions</span>
                    <span className="dashboard-ui__goalMeta">8/12</span>
                  </div>
                  <div className="dashboard-ui__goalBar" aria-hidden="true">
                    <i style={{ width: '66%' }} />
                  </div>
                </div>
                <div className="dashboard-ui__goal">
                  <div className="dashboard-ui__goalTop">
                    <span className="dashboard-ui__goalTitle">30-day streak</span>
                    <span className="dashboard-ui__goalMeta">21 days</span>
                  </div>
                  <div className="dashboard-ui__goalBar" aria-hidden="true">
                    <i style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          <section className="dashboard-ui__section" aria-label="Support">
            <div className="dashboard-ui__sectionHead">
              <h2 className="dashboard-ui__sectionTitle">Support</h2>
            </div>
            <GlassCard className="dashboard-ui__panel" blur={14} opacity={0.08} radius="20px">
              <div className="dashboard-ui__support">
                <div className="dashboard-ui__supportTitle">Need help?</div>
                <p className="dashboard-ui__supportText">Get answers fast in our Help Center or browse FAQs.</p>
                <div className="dashboard-ui__supportActions">
                  <button type="button" className="btn btn-primary dashboard-ui__btn" onClick={handleQuickSupport}>
                    Help Center
                  </button>
                  <button type="button" className="btn btn-secondary dashboard-ui__btn" onClick={() => navigate('/faq')}>
                    FAQs
                  </button>
                </div>
                <div className="dashboard-ui__supportMeta">Mon–Fri, 9AM–6PM EST</div>
              </div>
            </GlassCard>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
