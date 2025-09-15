import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>ManiBharath Bhadragiri</h3>
            <p>Full Stack Developer passionate about creating amazing digital experiences.</p>
            <div className="footer-social">
              <a href="https://github.com/manibharathb" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🐙</span>
              </a>
              <a href="https://www.linkedin.com/in/manibharathbhadragiri" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💼</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Technologies</h4>
              <ul>
                <li><a href="#skills">React</a></li>
                <li><a href="#skills">TypeScript</a></li>
                <li><a href="#skills">Node.js</a></li>
                <li><a href="#skills">Python</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📧 bhadragiri.m@northeastern.edu</li>
                <li>📱 (857)-396-7208</li>
                <li>📍 Boston, MA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ManiBharath Bhadragiri. All rights reserved.</p>
            <p>Built with ❤️ using React & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
