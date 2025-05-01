// src/components/Header.jsx

import React, { useState } from "react";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <header className="header-container">
       <div className="header-inner-container">
       <div className="header-left">
          <h1 className="logo">Portfolio</h1>
        </div>

        <nav className="nav">
          <Link to="hero" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="header-right">
          <Link to="contact" smooth={true} duration={500} className="talk-btn">
            Let's Talk
          </Link>
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="icon">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
  </svg>
</button>

        </div>
       </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
