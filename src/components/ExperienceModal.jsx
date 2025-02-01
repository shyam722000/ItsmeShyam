import React from "react";
import "./ExperienceModal.css";

const ExperienceModal = () => {
  return (
    <div className="EXP_modal-overlay">
      <div className="EXP_modal-content">

        <h2>Experience</h2>
        <div className="EXP_experience-list">
          <div className="EXP_experience-item">
            <h3>Mecwin Technologies India Private Limited</h3>
            <p>Software Developer - React JS</p>
            <p>Jan 2024 – Present | Bangalore, India</p>
          </div>
          <div className="EXP_experience-item">
            <h3>Poornam Info Vision Private Limited</h3>
            <p>Junior Software Engineer Trainee</p>
            <p>Nov 2021 – Mar 2022 | Kochi, Kerala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
