import React, { useState } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./About.css";
import nethra from "../about.png";


const AboutSection = () => {
  const projects = [
    {
      name: "About Me",
      description:
      "Mecwin Nethra -Remote Monitoring system-IoT Designed and developed Mecwin Nethra, a real-time web application for remote monitoring, asset tracking, and maintenance management. Implemented a multi-role system with secure access and tailored functionality, including a robust ticketing system for efficient issue resolution. Optimized the platform’s UI/UX with modern front-end technologies, ensuring intuitive and responsive interactions across all devices.",
      image: nethra,
    },
  
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

 

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="Pro-container">
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
          <div className="Pro-image-container">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="Cus-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
