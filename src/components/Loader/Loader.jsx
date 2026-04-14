import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Animation lasts 2s, plus 0.5s buffer

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loader-overlay ${!loading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <Logo size="120px" animated={true} />
        <div className="loader-text">
          <span className="char">L</span>
          <span className="char">o</span>
          <span className="char">a</span>
          <span className="char">d</span>
          <span className="char">i</span>
          <span className="char">n</span>
          <span className="char">g</span>
        </div>
      </div>
      <div className="loader-background">
        <div className="loader-orb loader-orb-1"></div>
        <div className="loader-orb loader-orb-2"></div>
      </div>
    </div>
  );
};

export default Loader;
