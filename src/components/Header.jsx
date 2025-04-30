// src/components/Header.jsx

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Header container
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
 border-bottom: 1px solid #26262682;
`;

// Logo with smooth hover effect
const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Navigation bar container
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: none; /* Hide regular nav on mobile */
  }
`;

// Styled Link for navigation
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

// Hamburger menu (mobile view)
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: rotate(90deg);
  }
`;

// Mobile navigation menu
const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 20;
  width: 250px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-30px);
  transition: all 0.3s ease-in-out;

  a {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.light};
    font-weight: 500;
  }

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <Logo>Ishali</Logo>
      <Nav>
        <NavLink to="hero" smooth={true} duration={500}>
          Home
        </NavLink>
        <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500}>
          Skills
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
      </Nav>
      <HamburgerMenu onClick={toggleMenu}>☰</HamburgerMenu>
      <MobileNav className={isOpen ? "open" : ""}>
        <NavLink to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
