import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Brand Identity & Motion Design",
    category: "Product Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Design & Branding Mockup",
    category: "Product Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Mobile Application Development",
    category: "UI/UX Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Website UI Design",
    category: "UI/UX Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Dashboard Design",
    category: "UI/UX Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
  {
    id: 6,
    title: "E-commerce Design",
    category: "UI/UX Design",
    image: "https://matias-react-js.netlify.app/assets/pro1-4e06b6ed.png",
    link: "/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="project-head">
          <span className="subheading">Complete Project</span>
          <h2>Look at my portfolio and give me your feedback</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div
              className={`project-item ${
                project.id % 2 === 0 ? "small" : "large"
              }`} // Fix here: swap "large" and "small"
              key={project.id}
            >
              <div className="project-thumb">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <a href={project.link}>
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                </a>
                <a href={project.link} className="project-icon">
              <span>    → </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="more-work">
          <a href="/portfolio">
            <span>Click More Work →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
