import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../Magnetic/Magnetic';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <div className="hero-container">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="hero-subtitle" variants={itemVariants}>Hello, I'm</motion.h2>
        <motion.h1 className="hero-title" variants={itemVariants}>
          {"Anand".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
          {" ".split("").map((char, index) => <span key={index}>&nbsp;</span>)}
          <span className="accent-name">
            {"Satyarthi".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        <motion.h3 className="hero-role" variants={itemVariants}>Full-Stack Developer</motion.h3>
        <motion.p className="hero-summary" variants={itemVariants}>
          Full-Stack Developer with 2+ years of professional experience building scalable and high-performance web applications. Skilled in developing modern web solutions using React.js, Redux, Node.js, Express.js, PostgreSQL, and MongoDB.
        </motion.p>
        <motion.div className="hero-actions" variants={itemVariants}>
          <Magnetic>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </Magnetic>
          <Magnetic>
            <a href="https://github.com/satyarthi123" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub <ExternalLink size={16} />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
      <div className="hero-graphic">
        <motion.div 
          className="glow-sphere"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
