// src/components/About.jsx
import './About.css';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="tab-content">
            <h3>Experience</h3>
            <ul>
              <li><strong>Frontend Developer</strong> — Freelance (2022 - Present)<br />Built responsive React websites and apps for businesses and startups.</li>
              <li><strong>Web Designer</strong> — Creative Studio (2020 - 2022)<br />Designed modern UIs and optimized user experience for various brands.</li>
            </ul>
          </div>
        );
      case 'education':
        return (
          <div className="tab-content">
            <h3>Education</h3>
            <ul>
              <li><strong>Bachelor of Computer Applications (BCA)</strong><br />GlA University, Graduated 2021</li>
              <li><strong>Full Stack Development Bootcamp</strong><br />Completed advanced training in React, Node.js, MongoDB</li>
            </ul>
          </div>
        );
      case 'skills':
        return (
          <div className="tab-content">
            <h3>Skills</h3>
            <div className="skills-grid">
              {[
                { title: 'React.js', icon: '⚛️' },
                { title: 'JavaScript', icon: '💡' },
                { title: 'HTML5', icon: '🌐' },
                { title: 'CSS3 / Styled Components', icon: '🎨' },
                { title: 'Node.js', icon: '⚙️' },
                { title: 'Express.js', icon: '🚀' },
                { title: 'MongoDB', icon: '🗄️' },
                { title: 'SEO & Responsive Design', icon: '📈' },
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
