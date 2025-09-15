import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Scalable Cloud-Native Web Application on AWS',
      description: 'Designed and deployed secure, scalable cloud-native web applications on AWS using Infrastructure as Code (Terraform) and automated CI/CD pipelines. Built RESTful APIs with authentication and implemented serverless solutions using AWS Lambda.',
      image: '☁️',
      technologies: ['AWS', 'Terraform', 'Node.js', 'MySQL', 'GitHub Actions'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Transformer Health Monitoring IoT System',
      description: 'Designed and deployed an end-to-end IoT solution for real-time monitoring and control of transformer oil temperature, pressure, and humidity parameters using MQTT protocol and Ubidots dashboard.',
      image: '⚡',
      technologies: ['IoT', 'MQTT', 'Python', 'Ubidots', 'SenseHat'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AquaPath - Maritime Route Optimization',
      description: 'Developed a full-stack application using React, Express.js, and MongoDB to optimize maritime routes with customizable navigation parameters, real-time cargo tracking, and seven-day weather forecast integration.',
      image: '🚢',
      technologies: ['React', 'Express.js', 'MongoDB', 'APIs', 'Weather Data'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'Created an administrative application for small community libraries to streamline and manage fundamental operations using Java with efficient data handling and organization.',
      image: '📚',
      technologies: ['Java', 'Eclipse IDE', 'Scene Builder', 'Data Structures'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Multi-site Corporate Network Design',
      description: 'Devised and executed a networking strategy connecting five corporate locations using OSPF for dynamic routing, HSRP for redundancy, VLAN for network segmentation, and Rapid STP for loop prevention.',
      image: '🌐',
      technologies: ['Cisco Packet Tracer', 'OSPF', 'HSRP', 'VLAN', 'STP'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'TCP Socket Programming',
      description: 'Implemented socket connection between client and server systems for executing various intricate mathematical computations using Python programming with reliable communication protocols.',
      image: '🔌',
      technologies: ['Python', 'TCP Sockets', 'Client-Server', 'VMWare'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card featured">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  <a href={project.live} className="btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '4rem' }}>Other Projects</h2>
        <div className="projects-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                  <a href={project.live} className="btn" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
