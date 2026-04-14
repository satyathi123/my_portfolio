import React from 'react';
import './Logo.css';

const Logo = ({ size = '40px', animated = true }) => {
  return (
    <div className={`logo-container ${animated ? 'animate' : ''}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-cyan)" />
            <stop offset="50%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-indigo)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Abstract 'A' */}
        <path 
          className="path-a"
          d="M20 80 L50 20 L80 80" 
          stroke="url(#logo-gradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Abstract 'S' bridge */}
        <path 
          className="path-s"
          d="M35 55 L65 55 C80 55, 80 80, 65 80 L35 80" 
          stroke="url(#logo-gradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Inner detail */}
        <circle cx="50" cy="50" r="4" fill="var(--accent-cyan)" className="logo-dot">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default Logo;
