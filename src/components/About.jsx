import React, { useState } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./About.css";
import nethra from "../about.png";
import logo from "../loho.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutSection = () => {
  const projects = [
    {
      name: "About Me",
      description:
        "I am an experienced Front-End Developer specializing in React, with a proven track record of delivering responsive and user-centric web applications. I excel in creating intuitive interfaces, optimizing performance, and ensuring cross-browser compatibility. Passionate about staying ahead in the ever-evolving landscape of modern web technologies, I am dedicated to building impactful, scalable, and cutting-edge solutions that drive innovation and deliver exceptional user experiences.",
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
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="Pro-container">
      <div className="project_header">
        <div className="project_logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="project_nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/ContactMe">Contact</Link>
        </nav>
      </div>
      <SpaceBackground />

      <div className={`Pro-content ${animationClass}`}>
        <div className="Pro-left">
          <h1 className="Pro-project-name">{currentProject.name}</h1>
          <div className="Pro-details">
            <div className="Pro-description">
              {/* <h2>Description</h2> */}
              <p>{currentProject.description}</p>
            </div>
            <div className="social-media-icons">
              <a
                href="https://www.instagram.com/rithul_007"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/shyamrithul-thelokki"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/shyam722000/ItsmeShyam"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>

              {/* <Link to="/ExperienceSection" className="EXP_experience-btn">
                EXPERIENCE
              </Link> */}
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
