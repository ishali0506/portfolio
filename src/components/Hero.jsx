// src/components/Hero.jsx
import './Hero.css';
import { motion } from 'framer-motion';
import heroBackground from '../assets/banner-background.png';
import bannerMan from '../assets/banner-man.png'; // Use correct image here

const Hero = () => {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-normal-text">Creative Visual</span><br />
              <span className="hero-heading-animation">Designer</span>
            </h1>
            <a className="animated-button" href="#projects">See My Work</a>
          </div>

          <div className="hero-image">
            <img src={bannerMan} alt="Banner Man" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
