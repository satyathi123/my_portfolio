import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'ACG CNC HMI',
    tech: ['React.js', 'Redux', 'Node.js', 'Express.js'],
    details: [
      'Built a Human-Machine Interface dashboard for Supervisors and Operators with role-based access.',
      'Developed Job Cycle modules to manage machine operations including start, monitoring, and completion stages.',
      'Automated job completion alerts using scheduled triggers to improve operational response time.',
      'Implemented dynamic UI cards displaying machine insights and operational data.',
      'Optimized frontend state management using Redux for better performance and scalability.'
    ]
  },
  {
    title: 'XCEED - Dr Reddy',
    tech: ['React.js', 'Redux', 'Node.js', 'Express.js'],
    details: [
      'Developed enterprise workflow modules for Dr. Reddy\'s internal platform used for operational management.',
      'Built interactive dashboards and reusable UI components using React.js and Redux.',
      'Integrated REST APIs for real-time data synchronization across multiple modules.',
      'Improved application usability and performance through modular architecture and optimized state handling.'
    ]
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card glass-panel interactive"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              rotateY: index % 2 === 0 ? 5 : -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <Code className="project-icon" size={24} />
            </div>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <ul className="project-details timeline-details">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
