import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'Web Design/UX', level: 80 }
      ]
    },
    {
      title: 'Cloud & Database',
      skills: [
        { name: 'AWS Cloud', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'VPC/EC2/S3', level: 80 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="technologies">
          <h3>Technologies I Work With</h3>
          <div className="tech-grid">
            <div className="tech-item">Python</div>
            <div className="tech-item">Java</div>
            <div className="tech-item">C++</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">ReactJS</div>
            <div className="tech-item">Express.js</div>
            <div className="tech-item">AWS Cloud</div>
            <div className="tech-item">MongoDB</div>
            <div className="tech-item">MySQL</div>
            <div className="tech-item">GitHub</div>
            <div className="tech-item">Terraform</div>
            <div className="tech-item">IoT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
