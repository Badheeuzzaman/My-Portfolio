"use client";

import { useState } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    e.currentTarget.reset();
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      <section id="contact">
        <div className="contact-glow"></div>
        <div style={{ position: "relative" }}>
          <div className="section-header reveal">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let&apos;s work together</h2>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                I&apos;m open to freelance projects, collaborations, and internship opportunities. Let&apos;s connect!
              </p>
              <div className="contact-links">
                <a href="mailto:badheeuzzaman2002@gmail.com" className="contact-link">
                  <div className="contact-link-icon"><i className="fas fa-envelope"></i></div>
                  <div className="contact-link-text">
                    <span>Email</span>
                    badheeuzzaman2002@gmail.com
                  </div>
                </a>
                <a href="#" className="contact-link">
                  <div className="contact-link-icon"><i className="fab fa-github"></i></div>
                  <div className="contact-link-text">
                    <span>GitHub</span>
                    github.com/badheeuzzaman
                  </div>
                </a>
                <a href="https://linkedin.com/in/ishak-badheeuzzaman-7aab41304" className="contact-link">
                  <div className="contact-link-icon"><i className="fab fa-linkedin-in"></i></div>
                  <div className="contact-link-text">
                    <span>LinkedIn</span>
                    linkedin.com/in/Ishak Badheeuzzaman
                  </div>
                </a>
              </div>
            </div>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Project inquiry..." />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..."></textarea>
              </div>
              <div className="submit-wrap">
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className={`toast ${showToast ? "show" : ""}`} id="toast">
        ✓ Message sent! I&apos;ll reply soon.
      </div>
    </>
  );
}
