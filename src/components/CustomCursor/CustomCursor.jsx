import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleHover = (e) => {
      if (e.target.closest('a, button, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-outline"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--accent-cyan)' : 'var(--glass-border)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
    </>
  );
};

export default CustomCursor;
