// src/components/Sidebar.jsx

import React from 'react';
import { FiX } from 'react-icons/fi';  // Feather close icon (clean & minimal)
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
        <FiX size={24} />
      </button>

      <h1 className="logo">Ishali</h1>
<br/>
      <p className="sidebar-text">
        I’m a passionate Frontend Developer specializing in building interactive, accessible, and visually engaging websites.  
        I focus on modern technologies like React.js, JavaScript, and responsive design to bring ideas to life with clean and efficient code.  
        Let’s collaborate and create something impactful!
      </p>

      <address className="sidebar-info">
        <strong>Location:</strong> <br />
        Delhi, India<br /><br />

        <strong>Email:</strong> <br />
        ishali8055@gmail.com<br /><br />

        <strong>Call Me:</strong><br />
        81262 51215
      </address>

      <button className="sidebar-talk-btn">Let's Talk</button>
    </aside>
  );
};

export default Sidebar;
