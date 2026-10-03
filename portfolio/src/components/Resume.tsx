export default function Resume() {
  return (
    <section id="resume">
      <div className="section-header reveal">
        <p className="section-label">Resume</p>
        <h2 className="section-title">My Journey</h2>
      </div>
      <div className="resume-grid">
        <div className="resume-col reveal">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Nov 2023 – Nov 2027</span>
              <div className="timeline-card">
                <h4>Bachelor of Computer Science with Honours</h4>
                <p className="company">Saegis Campus, Nugegoda</p>
                <ul>
                  <li>Expected Graduation: November 2027.</li>
                  <li>Strong focus on Web Development, Cyber Security, and Artificial Intelligence.</li>
                  <li>Active in building real-world projects with modern technologies.</li>
                </ul>
              </div>
            </div>
            {/* <div className="timeline-item">
              <span className="timeline-date">Jun 2019 – Nov 2021</span>
              <div className="timeline-card">
                <h4>High School</h4>
                <p className="company">T/Kinniya Central College</p>
                <ul>
                  <li>Completed G.C.E. Advanced Level examinations.</li>
                  <li>Developed early interest in technology and programming.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="resume-col reveal">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2026 – Present</span>
              <div className="timeline-card">
                <h4>Freelance Web Developer</h4>
                <p className="company">Self-Employed, Remote</p>
                <ul>
                  <li>Built full-stack web applications.</li>
                  <li>Designed responsive UIs and REST APIs with modern frameworks.</li>
                  <li>Managed projects from requirements to deployment.</li>
                </ul>
              </div>
            </div>
            {/* <div className="timeline-item">
              <span className="timeline-date">2024</span>
              <div className="timeline-card">
                <h4>Intern</h4>
                <p className="company">Software Development</p>
                <ul>
                  <li>Assisted in building internal tools and web platforms.</li>
                  <li>Collaborated with senior developers on code reviews and debugging.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="achievements reveal">
        <h3>Achievements</h3>
        <div className="achievement-grid">
          {/* <div className="achievement-card">
            <h4>
              <i className="fas fa-trophy" style={{ color: "var(--sky)", marginRight: ".5rem" }}></i>
              Project Leader
            </h4>
            <p>Led multiple university group projects using modern development practices and Agile methodology.</p>
          </div> */}
          <div className="achievement-card">
            <h4>
              <i className="fas fa-code" style={{ color: "var(--sky)", marginRight: ".5rem" }}></i>
              Active GitHub Portfolio
            </h4>
            <p>Build and maintain real-world applications showcasing full-stack development skills on GitHub.</p>
          </div>
          <div className="achievement-card">
            <h4>
              <i className="fas fa-shield-halved" style={{ color: "var(--sky)", marginRight: ".5rem" }}></i>
              Cyber Security Focus
            </h4>
            <p>Gained foundational knowledge in ethical hacking, network security, and secure coding practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
