import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket']
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'Git/GitHub', 'Postman', 'VS Code']
  },
  {
    title: 'Other Skills',
    skills: ['API Integration', 'Performance Optimization', 'Agile Development', 'Responsive Design']
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Technical <span>Skills</span></h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-panel">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
