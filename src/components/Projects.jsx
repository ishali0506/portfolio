import React from "react";
import "./Projects.css";
import todoProjectImage from '../../src/assets/react_task_manager.png';
import mernProject from '../../src/assets/mern_stack_blog_platform.png';
import wordpressProject from '../../src/assets/wordpress_custom_theme.png';
import shopifyProject from '../../src/assets/shopify_custom.png';
import mobileProject from '../../src/assets/mobile-design-1.png';
import microProject from '../../src/assets/miro-frontend-new.png';




const projects = [
  {
    id: 1,
    title: "React Task Manager App",
    category: "React.js Project",
    image: todoProjectImage,
    link: "/portfolio/react-task-manager",
  },
  {
    id: 2,
    title: "MERN Stack Blog Platform",
    category: "MERN Fullstack",
    image: mernProject,
    link: "/portfolio/mern-blog",
  },
  {
    id: 3,
    title: "Custom WordPress Theme",
    category: "WordPress Development",
    image: wordpressProject,
    link: "/portfolio/wordpress-theme",
  },
  {
    id: 4,
    title: "Shopify E-commerce Store",
    category: "Shopify Development",
    image: shopifyProject,
    link: "/portfolio/shopify-store",
  },
  {
    id: 5,
    title: "Micro Frontend Dashboard",
    category: "Micro Frontend (React + Module Federation)",
    image: microProject,
    link: "/portfolio/microfrontend-dashboard",
  },
  {
    id: 6,
    title: "Responsive Portfolio Website",
    category: "Frontend Design (React + CSS)",
    image: mobileProject,
    link: "/portfolio/responsive-portfolio",
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
          {projects.map((project, index) => {
            const sizeClass = index < 3 ? "small" : "large";
            return (
              <div className={`project-item ${sizeClass}`} key={project.id}>
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <a href={project.link}>
                    <span className="category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </a>
                  <a href={project.link} className="project-icon">
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-work">
          <a href="/portfolio">
            Click More Work <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
