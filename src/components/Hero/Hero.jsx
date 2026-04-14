import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title">Anand <span>Satyarthi</span></h1>
        <h3 className="hero-role">Full-Stack Developer</h3>
        <p className="hero-summary">
          Full-Stack Developer with 2+ years of professional experience building scalable and high-performance web applications. Skilled in developing modern web solutions using React.js, Redux, Node.js, Express.js, PostgreSQL, and MongoDB.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="https://github.com/satyarthi123" target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="hero-graphic">
        <div className="glow-sphere"></div>
      </div>
    </div>
  );
};

export default Hero;
