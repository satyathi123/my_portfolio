import React from 'react';
import './Projects.css';
import { ExternalLink, Code } from 'lucide-react';

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
  return (
    <div className="projects-container">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
