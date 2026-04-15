import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="loader-overlay"
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } }}
        >
          <div className="loader-content">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size="100px" animated={true} />
            </motion.div>
            
            <div className="loader-progress-container">
              <motion.div 
                className="loader-progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="loader-percentage">
              {progress}%
            </div>

            <div className="loader-brand">
              <span>ANAND</span>
              <span className="separator">/</span>
              <span>PORTFOLIO</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
