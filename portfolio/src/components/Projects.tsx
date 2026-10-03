import educationImg from "../assets/image/education.png";
import gymImg from "../assets/image/Gym.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <p className="section-label">Work</p>
        <h2 className="section-title">Personal Projects</h2>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal">
          <div className="card-thumb thumb-1">
            <img
              src={educationImg.src}
              alt="Education Empowerment System"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "20px",
              }}
            />
          </div>
          <div className="card-body">
            <div className="card-tags">
              <span className="card-tag">PHP 8.1</span>
              <span className="card-tag">MySQL</span>
              <span className="card-tag">Bootstrap 5</span>
              <span className="card-tag">jQuery</span>
              <span className="card-tag">HTML</span>
              <span className="card-tag">CSS</span>
            </div>
            <h3 className="card-title">Education Empowerment System</h3>
            <p className="card-desc">
              Developed for schools and small institutes to maintain records related to students, teachers, and administration. Built with PHP 8.1, MySQL, Bootstrap 5, jQuery, and JavaScript.
            </p>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="card-thumb thumb-2">
            <img
              src={gymImg.src}
              alt="Gym Management System"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "20px",
              }}
            />
          </div>
          <div className="card-body">
            <div className="card-tags">
              <span className="card-tag">PHP 8</span>
              <span className="card-tag">MySQL</span>
              <span className="card-tag">Bootstrap 5</span>
              <span className="card-tag">HTML</span>
              <span className="card-tag">CSS</span>
            </div>
            <h3 className="card-title">Gym Management System</h3>
            <p className="card-desc">
              Full-stack gym management platform with 40+ modules covering memberships, POS &amp; inventory, QR/biometric attendance, staff payroll, and real-time financial reporting across a 30+ table schema.
            </p>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="card-thumb thumb-3">
            <i className="fas fa-users"></i>
          </div>
          <div className="card-body">
            <div className="card-tags">
              <span className="card-tag">HTML</span>
              <span className="card-tag">Python</span>
              <span className="card-tag">CSS</span>
              <span className="card-tag">MySQL</span>
            </div>
            <h3 className="card-title">Client Manager System</h3>
            <p className="card-desc">
              A client management system that checks client status about projects and contracts. Built with HTML, CSS, Python, and SQL for streamlined business relationship tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
