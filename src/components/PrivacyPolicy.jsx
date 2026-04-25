import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
      <main className="page-content">
        <div className="container">
          <div className="privacy-page">
            <div className="page-header">
              <h1>Privacy Policy</h1>
              <p className="lead">
                Last updated: April 2025. Your privacy is critically important to us. This policy explains 
                how we collect, use, disclose, and safeguard your information when you use June Flint.
              </p>
            </div>

            <section className="content-section">
              <h2>1. Information We Collect</h2>
              <div className="section-content">
                <p>We collect information you provide directly to us and information automatically collected from your use of the Service:</p>
              </div>
              <div className="privacy-subsections">
                <div className="privacy-subsection">
                  <h3>1.1 Information You Provide</h3>
                  <ul>
                    <li><strong>Account Information:</strong> Name, email address, password, and username</li>
                    <li><strong>Profile Information:</strong> Age, gender, wellness goals, preferences, and experience level</li>
                    <li><strong>Content:</strong> Journal entries, progress notes, community posts, and feedback</li>
                    <li><strong>Communications:</strong> Content of messages sent to us, support tickets, and survey responses</li>
                    <li><strong>Payment Information:</strong> If you purchase premium features, payment details processed securely through third-party providers</li>
                  </ul>
                </div>
                <div className="privacy-subsection">
                  <h3>1.2 Automatically Collected Information</h3>
                  <ul>
                    <li><strong>Usage Data:</strong> Features used, session duration, frequency of use, and interaction patterns</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                    <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
                    <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience (see Section 4)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>2. How We Use Your Information</h2>
              <div className="section-content">
                <p>We use the information we collect to provide, maintain, and improve our Service, and to communicate with you:</p>
              </div>
              <div className="usage-grid">
                <div className="usage-item">
                  <h3>Service Provision</h3>
                  <p>Deliver personalized wellness content, track your progress, and provide customer support</p>
                </div>
                <div className="usage-item">
                  <h3>Personalization</h3>
                  <p>Tailor content and recommendations based on your goals, preferences, and usage patterns</p>
                </div>
                <div className="usage-item">
                  <h3>Communication</h3>
                  <p>Send service-related notifications, updates, and responses to your inquiries</p>
                </div>
                <div className="usage-item">
                  <h3>Security & Safety</h3>
                  <p>Monitor for suspicious activity, enforce our Terms, and protect user safety</p>
                </div>
                <div className="usage-item">
                  <h3>Analytics & Improvement</h3>
                  <p>Analyze usage patterns to enhance our platform and develop new features</p>
                </div>
                <div className="usage-item">
                  <h3>Legal Compliance</h3>
                  <p>Comply with legal obligations, law enforcement requests, and protect our rights</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>3. Information Sharing and Disclosure</h2>
              <div className="section-content">
                <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              </div>
              <div className="sharing-list">
                <div className="sharing-item">
                  <h3>With Your Consent</h3>
                  <p>We share information when you explicitly authorize us to do so, such as when you make your profile public or share content in community forums.</p>
                </div>
                <div className="sharing-item">
                  <h3>Service Providers</h3>
                  <p>We work with trusted third-party service providers who help us operate the Service (e.g., hosting, payment processing, analytics). These providers have access to your information only to perform services on our behalf and are contractually obligated to protect it.</p>
                </div>
                <div className="sharing-item">
                  <h3>Legal Requirements</h3>
                  <p>We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.</p>
                </div>
                <div className="sharing-item">
                  <h3>Business Transfers</h3>
                  <p>In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction. We will notify you of such changes.</p>
                </div>
                <div className="sharing-item">
                  <h3>Aggregate Data</h3>
                  <p>We may share anonymized, aggregated data that cannot reasonably identify you individually for research, marketing, or other purposes.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>4. Cookies and Tracking Technologies</h2>
              <div className="section-content">
                <p>We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content:</p>
              </div>
              <div className="cookies-types">
                <div className="cookie-type">
                  <h3>Essential Cookies</h3>
                  <p>Necessary for the Service to function, including authentication and security. Cannot be disabled.</p>
                </div>
                <div className="cookie-type">
                  <h3>Functional Cookies</h3>
                  <p>Remember your preferences (language, theme) and provide personalized features.</p>
                </div>
                <div className="cookie-type">
                  <h3>Analytics Cookies</h3>
                  <p>Help us understand how users interact with the Service so we can improve it.</p>
                </div>
                <div className="cookie-type">
                  <h3>Marketing Cookies</h3>
                  <p>Used to deliver relevant advertisements and track marketing campaign effectiveness (with your consent where required).</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  You can control cookies through your browser settings. However, disabling essential cookies 
                  may prevent the Service from functioning properly.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>5. Data Storage and Security</h2>
              <div className="section-content">
                <p>We implement robust security measures to protect your personal information:</p>
              </div>
              <div className="security-measures">
                <div className="measure-item">
                  <div className="measure-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Encryption</h3>
                    <p>All data is encrypted in transit using TLS/SSL and at rest using industry-standard encryption</p>
                  </div>
                </div>
                <div className="measure-item">
                  <div className="measure-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Access Controls</h3>
                    <p>Strict access controls and authentication mechanisms limit data access to authorized personnel only</p>
                  </div>
                </div>
                <div className="measure-item">
                  <div className="measure-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Regular Audits</h3>
                    <p>Conduct regular security assessments and vulnerability testing</p>
                  </div>
                </div>
                <div className="measure-item">
                  <div className="measure-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Data Retention Policies</h3>
                    <p>We retain personal data only as long as necessary for legitimate business purposes or as required by law</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>6. Your Privacy Rights</h2>
              <div className="section-content">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              </div>
              <div className="rights-detailed">
                <div className="right-detail">
                  <h3>Right to Access</h3>
                  <p>Request a copy of the personal data we hold about you</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Rectification</h3>
                  <p>Request correction of inaccurate or incomplete personal data</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Erasure</h3>
                  <p>Request deletion of your personal data, subject to legal exceptions</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Portability</h3>
                  <p>Receive your data in a structured, machine-readable format and transfer it to another service</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Restrict Processing</h3>
                  <p>Request limitation of processing in certain circumstances</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Object</h3>
                  <p>Object to processing of your personal data for direct marketing or legitimate interests</p>
                </div>
                <div className="right-detail">
                  <h3>Right to Withdraw Consent</h3>
                  <p>Withdraw consent at any time where processing is based on your consent</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@juneflint.com">privacy@juneflint.com</a>. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>7. Children's Privacy</h2>
              <div className="section-content">
                <p>
                  Our Service is not directed to children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we learn we have collected 
                  personal information from a child under 13, we will promptly delete that information.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal 
                  information, please contact us immediately.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>8. Third-Party Services</h2>
              <div className="section-content">
                <p>
                  Our Service may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these third parties. We encourage you to read their privacy 
                  policies before providing any personal information.
                </p>
                <p>
                  We use the following third-party services that may collect personal information:
                </p>
                <ul>
                  <li><strong>Firebase:</strong> For authentication, database, and hosting services</li>
                  <li><strong>Analytics providers:</strong> For usage analytics and performance monitoring</li>
                  <li><strong>Payment processors:</strong> For secure payment handling (if applicable)</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>9. Data Retention</h2>
              <div className="section-content">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted 
                  by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
                <p>
                  Account data is typically retained until you delete your account or we terminate access 
                  due to inactivity (after 24 months of no login).
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>10. International Data Transfers</h2>
              <div className="section-content">
                <p>
                  Your information may be transferred to and processed in countries other than your country 
                  of residence. We ensure appropriate safeguards are in place for international transfers, 
                  including:
                </p>
              </div>
              <ul>
                <li>Standard Contractual Clauses approved by relevant authorities</li>
                <li>Adequacy decisions from data protection authorities</li>
                <li>Your explicit consent where required</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <div className="section-content">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by:
                </p>
              </div>
              <ul>
                <li>Posting the updated policy on our website with a revised "Last updated" date</li>
                <li>Sending email notifications to registered users for significant changes</li>
                <li>Displaying a prominent notice within the Service before changes take effect</li>
              </ul>
              <div className="section-content">
                <p>
                  Your continued use of the Service after changes constitutes acceptance of the updated 
                  Privacy Policy. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>12. Contact Us</h2>
              <div className="section-content">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or your 
                  personal data, please contact us:
                </p>
                <div className="contact-box">
                  <p><strong>Email:</strong> <a href="mailto:privacy@juneflint.com">privacy@juneflint.com</a></p>
                  <p><strong>Mailing Address:</strong> June Flint, Attn: Privacy Team, 123 Wellness Street, San Francisco, CA 94102</p>
                </div>
                <p>
                  We will respond to your inquiry within 30 days. If you are unsatisfied with our response, 
                  you may have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </section>

            <div className="page-cta">
              <Link to="/terms" className="btn btn-primary">Terms of Service</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </main>
  );
}
