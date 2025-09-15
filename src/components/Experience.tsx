import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Automation, Controls and Programming Intern',
      company: 'WaterFleet LLC',
      location: 'SA, Texas, USA',
      period: 'January 2025 - July 2025',
      description: [
        'Engineered a low-power, cost-effective IoT device using Arduino Nano ESP32 to monitor and alert water levels in remote Frac Tanks',
        'Developed and automated a daily predictive analytics program on Amazon AWS-EC2 to forecast chlorine depletion for 150 water rigs',
        'Implemented a predictive model for membrane depletion based on historical data analysis',
        'Designed and programmed PLC control panels utilizing Siemens TIA Portal',
        'Created PCB layouts for custom IoT devices'
      ],
      technologies: ['Arduino ESP32', 'AWS EC2', 'S3', 'Siemens TIA Portal', 'IoT', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'SAP EWM Functional Consultant',
      company: 'Artihcus Global Pvt Ltd',
      location: 'Hyderabad, INDIA',
      period: 'March 2022 - June 2023',
      description: [
        'Collaborated on SAP EWM and S4 HANA implementation projects for client warehouses',
        'Executed master data migration using LSMW and designed templates for PSA Staging area',
        'Contributed to requirement gathering and developed targeted end-user training modules',
        'Showcased end-to-end project management skills in enterprise environments'
      ],
      technologies: ['SAP EWM', 'S4 HANA', 'LSMW', 'Project Management', 'Data Migration']
    },
    {
      id: 3,
      title: 'Contract Engineer',
      company: 'Research Centre Imarat (RCI), DRDO',
      location: 'Hyderabad, INDIA',
      period: 'January 2019 - February 2022',
      description: [
        'Specialized in programming and debugging Control Actuation techniques for missile control systems',
        'Conducted Environmental Testing for section-level missile control systems',
        'Inspected fabricated components during hardware systems assembly',
        'Prepared comprehensive testing documents and inspection reports in accordance with standards'
      ],
      technologies: ['Control Systems', 'Hardware Testing', 'Quality Assurance', 'Documentation']
    },
    {
      id: 4,
      title: 'Application Development Associate',
      company: 'Accenture Pvt Ltd',
      location: 'Bangalore, INDIA',
      period: 'July 2018 - November 2018',
      description: [
        'Attained fundamental proficiency in Python, Java, ASP.Net, SQL, HTML, and CSS',
        'Implemented an ASP.Net project focused on identifying fake products using Barcode-Based Blockchain System',
        'Gained solid understanding of Agile methodology and Design thinking principles',
        'Contributed to effective and innovative project development'
      ],
      technologies: ['Python', 'Java', 'ASP.Net', 'SQL', 'HTML', 'CSS', 'Blockchain', 'Agile']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <h4>{exp.company}</h4>
                    <span className="location">{exp.location}</span>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {index < experiences.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
