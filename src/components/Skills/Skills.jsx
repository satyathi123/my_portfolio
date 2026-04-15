import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Redux', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Vite', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git/GitHub', 'npm/yarn', 'Postman', 'Docker', 'AWS Basics']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="skills-container">
      <h2 className="section-title">Technical <span>Skills</span></h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <h3>{skill.category}</h3>
            <div className="skill-tags">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
