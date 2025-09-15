import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">ManiBharath</span>
            </h1>
            <h2 className="hero-subtitle">IoT Engineer & Full Stack Developer</h2>
            <p className="hero-description">
              Master's student in Cyber-Physical Systems with IoT specialization at Northeastern University. 
              Passionate about creating innovative IoT solutions, cloud-native applications, and full-stack development. 
              I specialize in Python, Java, AWS cloud technologies, and modern web frameworks.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-image-container">
              <img 
                src="/images/manibharath-photo.jpg" 
                alt="ManiBharath - IoT Engineer & Full Stack Developer"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <h3>6+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>8+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="stat-item">
            <h3>MS</h3>
            <p>Cyber-Physical Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
