// src/components/Services.jsx
import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Services That I Provide</h2>
      <p className="services-subtitle">My Special Service For Your Business Development</p>

      <div className="services-grid">
        {/* Card 1 - Designer */}
        <div className="service-card">
          <span className="service-number">01</span>
          <h3 className="service-heading">Designer</h3>
          <p className="service-subheading">Illustration Design</p>
          <p className="service-description">
            Crafting stunning illustrations that tell your brand’s story. High-impact visuals for modern businesses.
          </p>
        </div>

        {/* Card 2 - UI/UX Design */}
        <div className="service-card">
          <span className="service-number">02</span>
          <h3 className="service-heading">UI/UX Design</h3>
          <p className="service-subheading">Web UI/UX Design</p>
          <p className="service-description">
            Designing intuitive and beautiful user interfaces to boost user engagement and experience.
          </p>
        </div>

        {/* Card 3 - Web Design */}
        <div className="service-card">
          <span className="service-number">03</span>
          <h3 className="service-heading">Web Design</h3>
          <p className="service-subheading">Application Design</p>
          <p className="service-description">
            Developing responsive and fast-loading web applications tailored to meet business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
