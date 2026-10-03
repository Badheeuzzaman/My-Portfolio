"use client";

import { useEffect, useRef } from "react";

const coreSkills = [
  { label: "Frontend (HTML, CSS, JS)", percent: 88 },
  { label: "Backend (PHP, Python)", percent: 80 },
  { label: "Databases (MongoDB, PostgreSQL)", percent: 78 },
  { label: "UI/UX Design (Figma)", percent: 75 },
  { label: "Cyber Security Fundamentals", percent: 70 },
  { label: "Problem Solving", percent: 85 },
];

export default function Skills() {
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const fills = e.target.querySelectorAll<HTMLElement>(".progress-fill");
            fills.forEach((f) => {
              const w = f.getAttribute("data-width");
              if (w) f.style.width = w + "%";
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (coreRef.current) observer.observe(coreRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-header reveal">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-tags-section reveal">
        <div className="skills-category">
          <h4>Languages</h4>
          <div className="skills-list">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">PHP</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Go (Basic)</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Backend &amp; APIs</h4>
          <div className="skills-list">
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">OOP</span>
            <span className="skill-tag">SDLC</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Databases</h4>
          <div className="skills-list">
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Supabase</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Tools &amp; Platforms</h4>
          <div className="skills-list">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Eclipse</span>
            <span className="skill-tag">PyCharm</span>
            <span className="skill-tag">Android Studio</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Canva</span>
            <span className="skill-tag">Webflow</span>
            <span className="skill-tag">Bootstrap</span>
          </div>
        </div>
      </div>

      <div className="core-skills reveal" ref={coreRef}>
        <h3>Core Skills</h3>
        <div className="progress-grid">
          {coreSkills.map((skill) => (
            <div className="progress-item" key={skill.label}>
              <label>
                {skill.label} <span>{skill.percent}%</span>
              </label>
              <div className="progress-bar">
                <div className="progress-fill" data-width={String(skill.percent)}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
