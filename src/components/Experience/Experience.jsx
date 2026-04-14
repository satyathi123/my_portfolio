import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-title">Work <span>Experience</span></h2>
      <div className="timeline">
        <div className="timeline-item glass-panel">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div>
                <h3>Associate Software Engineer</h3>
                <h4>Indus Net Technologies</h4>
              </div>
              <span className="timeline-date">Mar 2024 - Present<br/>Kolkata, India</span>
            </div>
            <ul className="timeline-details">
              <li>Developed and maintained scalable web applications using React.js, Node.js, Express.js, and PostgreSQL.</li>
              <li>Built responsive and high-performance user interfaces ensuring seamless experience across devices.</li>
              <li>Designed and integrated RESTful APIs for secure communication between frontend and backend systems.</li>
              <li>Implemented unit testing and code optimization to improve reliability and maintainability.</li>
              <li>Improved application performance by 15% and increased engagement by 20% through optimization and refactoring.</li>
              <li>Developed proof-of-concepts (POCs) and technical solutions to support client acquisition and product development.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
