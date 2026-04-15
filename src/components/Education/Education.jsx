import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <motion.div 
        className="education-card glass-panel interactive"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      >
        <div className="edu-icon">
          <GraduationCap size={32} />
        </div>
        <div className="edu-content">
          <div className="edu-header">
            <h3>Dr. B.C. Roy Engineering College</h3>
            <span className="edu-date">Aug 2019 - Jul 2023 | Durgapur, India</span>
          </div>
          <h4 className="edu-degree">B.Tech in Electronics and Communication Engineering</h4>
          <div className="edu-score">CGPA: <span>8.4</span></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
