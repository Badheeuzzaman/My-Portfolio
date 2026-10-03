export default function Services() {
  return (
    <section id="services" style={{ background: "rgba(255,255,255,.02)" }}>
      <div
        className="section-header reveal"
        style={{ textAlign: "center", maxWidth: "1100px", margin: "0 auto 3rem" }}
      >
        <p className="section-label">What I Do</p>
        <h2 className="section-title">Services</h2>
      </div>
      <div className="services-grid">
        <div className="service-card reveal">
          <div className="service-icon">🎨</div>
          <h3 className="service-title">UI / UX Design</h3>
          <p className="service-desc">
            From wireframes to polished prototypes, I create intuitive, beautiful interfaces that delight users.
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-icon">💻</div>
          <h3 className="service-title">Web Development</h3>
          <p className="service-desc">
            Responsive, performant web applications built with modern frameworks and best practices.
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-icon">⚙️</div>
          <h3 className="service-title">Backend &amp; APIs</h3>
          <p className="service-desc">
            Scalable REST and GraphQL APIs, database design, and cloud infrastructure that performs under load.
          </p>
        </div>
      </div>
    </section>
  );
}
