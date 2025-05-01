// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
