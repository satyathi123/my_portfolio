import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Logo from './components/Logo/Logo';
import Loader from './components/Loader/Loader';
import { Sun, Moon } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Magnetic from './components/Magnetic/Magnetic';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  // Mouse position for background orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [theme, mouseX, mouseY]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <Loader />
      <div className="ambient-bg">
        <motion.div 
          className="orb orb-1"
          style={{ x: springX, y: springY }}
        />
        <motion.div 
          className="orb orb-2"
          style={{ x: useSpring(mouseX, { stiffness: 30, damping: 25 }), y: useSpring(mouseY, { stiffness: 30, damping: 25 }) }}
        />
        <motion.div 
          className="orb orb-3"
          style={{ x: useSpring(mouseX, { stiffness: 70, damping: 15 }), y: useSpring(mouseY, { stiffness: 70, damping: 15 }) }}
        />
      </div>
      <nav className="navbar glass-nav">
        <Magnetic>
          <div className="nav-logo">
            <Logo size="32px" />
            <span className="logo-text">Anand Satyarthi</span>
          </div>
        </Magnetic>
        <div className="nav-actions">
          <ul className="nav-links">
            <Magnetic><li><a href="#about">About</a></li></Magnetic>
            <Magnetic><li><a href="#experience">Experience</a></li></Magnetic>
            <Magnetic><li><a href="#projects">Projects</a></li></Magnetic>
            <Magnetic><li><a href="#contact">Contact</a></li></Magnetic>
          </ul>
          <Magnetic>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </Magnetic>
        </div>
      </nav>
      
      <main>
        <motion.section 
          id="hero"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>
        <motion.section 
          id="experience"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.section>
        <motion.section 
          id="projects"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.section>
        <motion.section 
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Education />
        </motion.section>
      </main>

      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
