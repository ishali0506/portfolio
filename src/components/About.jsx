// src/components/About.jsx
import './About.css';
import { useState } from 'react';

// ✅ Import icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiGoogleanalytics } from 'react-icons/si';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="tab-content">
            <h3>Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Frontend Developer <span>Freelance (2022 - Present)</span></h4>
                  <p>Built responsive React apps for startups & businesses, enhancing performance & UI interactivity.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Web Designer <span>Creative Studio (2020 - 2022)</span></h4>
                  <p>Crafted modern UIs, improved user experience and designed branding websites for diverse clients.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="tab-content">
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Computer Applications <span>Gla University, 2021</span></h4>
                  <p>Graduated with a strong foundation in computer science, programming & database management.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Full Stack Development Bootcamp</h4>
                  <p>Advanced training in React, Node.js, MongoDB and modern web technologies.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="tab-content">
            <div className="skills-grid">
              {[
                { title: 'React.js', icon: <FaReact color="#61DBFB" /> },
                { title: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
                { title: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
                { title: 'CSS3 / Styled Components', icon: <FaCss3Alt color="#2965F1" /> },
                { title: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
                { title: 'Express.js', icon: <SiExpress color="#fff" /> },
                { title: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
                { title: 'SEO & Analytics', icon: <SiGoogleanalytics color="#F4B400" /> },
              ].map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-title">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I’m a passionate web developer who blends design and technology to build modern, high-performing websites and apps. With a focus on React.js, JavaScript, and backend tools, I help clients bring their digital ideas to life.
      </p>

      <div className="tabs">
        <button
          className={activeTab === 'experience' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('experience')}                                                     
        >
          Experience
        </button>
        <button
          className={activeTab === 'education' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={activeTab === 'skills' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      <div className="tab-container">
        {renderContent()}
      </div>
    </section>
  );
};

export default About;
