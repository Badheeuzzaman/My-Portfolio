"use client";

import { useEffect, useRef } from "react";

const phrases = [
  "Web Developer",
  "CS Student",
  "Cyber Security Enthusiast",
  "AI Explorer",
  "Problem Solver",
];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = phrases[phraseIdx];
      const el = typedRef.current;
      if (!el) return;
      if (isDeleting) {
        el.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }
      let delay = isDeleting ? 40 : 80;
      if (!isDeleting && charIdx === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 400;
      }
      timeout = setTimeout(type, delay);
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero">
      <div className="hero-layout">
        <div className="hero-inner">
          <div className="hero-tag">✦ Available for Freelance</div>
          <h1 className="hero-title">
            Crafting <em>digital</em>
            <br />
            experiences that matter
          </h1>
          <p className="hero-sub">
            I&apos;m Ishak Badheeuzzaman — a passionate Computer Science student &amp;
            web developer. I&apos;m a{" "}
            <span className="typed" ref={typedRef}></span>
            <span className="typed-cursor">|</span>
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#contact" className="btn btn-outline">Let&apos;s Talk</a>
            <a
              href="./CV.pdf"
              className="btn btn-outline"
              download="Badheeuzzaman_CV.pdf"
              style={{ borderColor: "rgba(106,170,245,.5)", color: "var(--sky)" }}
            >
              Download CV
            </a>
          </div>
          <div className="hero-social">
            <a href="mailto:badheeuzzaman2002@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Badheeuzzaman" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ishak-badheeuzzaman-7aab41304" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring"></div>
          <div className="photo-badge badge-top">
            <i className="fas fa-laptop-code"></i> CS 3rd Year Student
          </div>
          <div className="hero-photo-frame">
            <img src="/profile.jpeg" alt="Ishak Badheeuzzaman" />
          </div>
          <div className="photo-badge left-badge-bottom">
            <i className="fas fa-code-branch"></i> 3+ Projects
          </div>
          <div className="hero-photo-dot d1"></div>
          <div className="hero-photo-dot d2"></div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
