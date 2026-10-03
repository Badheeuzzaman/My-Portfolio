export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <div className="about-img-frame">
            <img
              src="/profile.jpg"
              alt="Ishak Badheeuzzaman"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "20px",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
          <div className="about-accent"></div>
          <div className="about-years">
            <strong>INTERN</strong>
            <span>LEVEL</span>
          </div>
        </div>
        <div className="reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Passionate about building great products</h2>
          <p className="about-body">
            I am Ishak Badheeuzzaman, a dedicated Computer Science student currently in my 3rd year.
            My academic journey is fueled by a curiosity for how complex systems work and how to secure them.
          </p>
          <p className="about-body">
            I possess Basic-level knowledge across two exciting pillars of tech: Cyber Security and Artificial Intelligence.
            I strive to blend these disciplines creating secure, intelligent, and user-friendly applications with
            a drive for continuous improvement.
          </p>
          <ul className="about-info">
            <li><strong>Name:</strong> Ishak Badheeuzzaman</li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:badheeuzzaman2002@gmail.com" style={{ color: "var(--sky)", textDecoration: "none" }}>
                badheeuzzaman2002@gmail.com
              </a>
            </li>
            <li><strong>Degree:</strong> B.Sc. Computer Science (Hons), Saegis Campus</li>
            <li><strong>Year:</strong> 3rd Year (Expected Nov 2027)</li>
            <li><strong>Focus:</strong> Web Dev, Cyber Security &amp; AI</li>
          </ul>
          <div className="skills-list">
            <span className="skill-tag">HTML / CSS</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">PHP</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Supabase</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Git / GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
