import React, { useState } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./About.css";
import nethra from "../about.png";
import logo from "../loho.png";

const AboutSection = () => {
  const projects = [
    {
      name: "About Me",
      description:
      "Mecwin Nethra -Remote Monitoring system-IoT Designed and developed Mecwin Nethra, a real-time web application for remote monitoring, asset tracking, and maintenance management. Implemented a multi-role system with secure access and tailored functionality, including a robust ticketing system for efficient issue resolution. Optimized the platform’s UI/UX with modern front-end technologies, ensuring intuitive and responsive interactions across all devices.",
      image: nethra,
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Redux",
        "Three.js",
        "Material-UI",
        "Bootstrap",
        "RESTful APIs",
        "ESLint",
        "Babel",
        "Git",
        "GitHub",
        "Figma",
        "VS Code",
        "Agile Methodologies",
    ],
    
    },
    
  
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

 

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="Pro-container">
       <div className="Pro_">
              <div className="Pro_-logo">
                <img src={logo} alt="Company Logo" />
              </div>
              <nav className="Pro_-nav-links">
                <a href="/">Home</a>
                {/* <a href="/contact">Contact</a> */}
              </nav>
            </div>
      <SpaceBackground />

      <div className={`Pro-content ${animationClass}`}>
        <div className="Pro-left">
          <h1 className="Pro-project-name">{currentProject.name}</h1>
          <div className="Pro-details">
            <div className="Pro-description">
              <h2>Description</h2>
              <p>{currentProject.description}</p>
            </div>
          </div>
        </div>
        <div className="Pro-right">
          <div className="skills-container">
            <h2>Skills</h2>
            <div className="skills-list">
              {currentProject.skills.map((skill, index) => (
                <div key={index} className="skill-point">
                  <span className="skill-dot">•</span> {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
