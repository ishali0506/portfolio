// src/components/Hero.jsx
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title"><span class="hero-normal-text">Creative Visual</span><br/><span class="hero-heading-animation">Designer</span></h1>
        <a className="animated-button" href="#projects">See My Work</a>
      </motion.div>
    </section>
  );
};

export default Hero;
