import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="faq-page">
            <div className="page-header">
              <h1>Frequently Asked Questions</h1>
              <p className="lead">
                Find comprehensive answers to common questions about June Flint and our wellness services.
              </p>
            </div>

            <section className="content-section">
              <h2>General Information</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>What is June Flint?</h3>
                  <p>
                    June Flint is a comprehensive wellness platform dedicated to making holistic health 
                    accessible to everyone. We offer yoga and meditation sessions, mental health resources, 
                    community support, and educational content tailored for Gen Z and individuals of all ages.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Is June Flint free to use?</h3>
                  <p>
                    Yes! Basic access to our wellness resources is completely free. We also offer premium 
                    features and personalized services for enhanced experiences. Our commitment is to ensure 
                    wellness is accessible to all, regardless of financial circumstances.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Do I need to create an account?</h3>
                  <p>
                    You can browse our content without an account. However, creating a free account allows you 
                    to track progress, save favorite sessions, join community discussions, and receive 
                    personalized recommendations based on your wellness goals.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Who can use June Flint?</h3>
                  <p>
                    June Flint is designed for individuals of all ages, backgrounds, and experience levels. 
                    While our platform is particularly tailored for Gen Z, we welcome anyone seeking to improve 
                    their mental and physical well-being through yoga, mindfulness, and community support.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Yoga & Wellness Programs</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>I'm a complete beginner. Can I still use June Flint?</h3>
                  <p>
                    Absolutely! Our content is designed for all skill levels, from complete beginners to 
                    advanced practitioners. We offer guided sessions with detailed instructions, modifications 
                    for different abilities, and progressive programs to help you build your practice safely.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>What types of yoga do you offer?</h3>
                  <p>
                    We offer a diverse range of yoga styles including Hatha, Vinyasa, Yin, Restorative, 
                    Power Yoga, and specialized sessions for specific needs such as stress relief, better 
                    sleep, and back pain relief. All sessions are led by certified instructors.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>How long are the yoga sessions?</h3>
                  <p>
                    Our sessions range from 5-minute quick stretches to 60-minute comprehensive classes. 
                    You can filter by duration to find sessions that fit your schedule and energy levels.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Do I need special equipment?</h3>
                  <p>
                    All you need is comfortable clothing and a quiet space. A yoga mat is recommended but 
                    not required—many of our sessions can be done on a carpet or soft surface. We also offer 
                    chair yoga and equipment-free exercises.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Mental Health & Wellness</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>Are your mental health resources professional?</h3>
                  <p>
                    Yes, all our mental health content is developed in collaboration with licensed 
                    therapists, psychologists, and wellness experts. While we provide valuable resources 
                    for emotional well-being, we are not a substitute for professional medical advice or 
                    therapy when needed.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>What meditation techniques do you teach?</h3>
                  <p>
                    We offer various meditation practices including mindfulness meditation, breathwork, 
                    body scan, loving-kindness, guided visualizations, and stress-reduction techniques. 
                    Our guided sessions range from 3 to 30 minutes to suit different experience levels.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>How do you handle crisis situations?</h3>
                  <p>
                    June Flint is not a crisis service. If you're experiencing a mental health emergency, 
                    please contact emergency services (911) or a crisis helpline immediately. We provide 
                    resources for ongoing support, not immediate crisis intervention.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Account & Technical Support</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>How do I reset my password?</h3>
                  <p>
                    Go to the login page and click "Forgot Password." Enter your email address, and we'll 
                    send you a secure link to reset your password. If you don't receive the email, check 
                    your spam folder or contact our support team.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>How do I update my account information?</h3>
                  <p>
                    Log into your account and navigate to Settings. From there, you can update your email, 
                    password, profile information, and notification preferences at any time.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Can I delete my account?</h3>
                  <p>
                    Yes, you can delete your account at any time. Go to Settings &gt; Account &gt; Delete Account. 
                    Please note that account deletion is permanent and all your data will be removed from 
                    our systems. You can also contact us directly to request account deletion.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>What devices are supported?</h3>
                  <p>
                    June Flint is accessible via web browsers on desktop and mobile devices. We also offer 
                    native apps for iOS and Android. Our platform is optimized for Chrome, Firefox, Safari, 
                    and Edge browsers.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Community & Engagement</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>How do I join the community discussions?</h3>
                  <p>
                    Create a free account and navigate to the "Talk Space" section. You can join existing 
                    conversations or start your own. Our community guidelines promote respectful, supportive 
                    interactions—please review them before participating.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Is the community moderated?</h3>
                  <p>
                    Yes, our community spaces are actively moderated to ensure a safe, supportive environment. 
                    We have a zero-tolerance policy for harassment, discrimination, or harmful content. 
                    You can report any concerning behavior to our moderation team.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Can I share my wellness journey?</h3>
                  <p>
                    Absolutely! We encourage sharing experiences in our community spaces. Your story might 
                    inspire and support others on similar paths. Just remember to respect others' privacy 
                    and maintain a supportive tone.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Billing & Premium Features</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>What's included in the free version?</h3>
                  <p>
                    Our free tier includes access to basic yoga and meditation sessions, wellness articles, 
                    community discussions, and progress tracking. We believe everyone deserves access to 
                    wellness resources, which is why we offer substantial free content.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>What are the premium features?</h3>
                  <p>
                    Premium features may include advanced personalized programs, one-on-one coaching, 
                    exclusive content, early access to new features, and ad-free experience. We're 
                    committed to keeping premium features affordable while maintaining robust free offerings.
                  </p>
                </div>
                <div className="faq-item">
                  <h3>Can I cancel my premium subscription?</h3>
                  <p>
                    Yes, you can cancel your premium subscription at any time. Your premium benefits will 
                    continue until the end of your current billing period, after which you'll revert to 
                    the free tier. No questions asked.
                  </p>
                </div>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/contact" className="btn btn-primary">Still Have Questions?</Link>
              <Link to="/join" className="btn btn-secondary">Create Free Account</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
