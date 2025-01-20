import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projectpage.css";
import NebulaBackground from "./SpacePro";
import logo from "../loho.png";

const Projectpage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="main-container">
      <div className="Pro_">
        <div className="Pro_-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="Pro_-nav-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <NebulaBackground />
      <div className="scrollable-content">
        <div className="project-grid">
          <div className="project-card">
            <div className="icon">📦</div>

            <div className="content">
              <h3>Mecwin Nethra-Remote Monitoring system-IoT</h3>
              <p>
                •Designed and developed Mecwin Nethra, a real-time web
                application for remote monitoring, asset tracking, and
                maintenance management. <br />
                •Implemented a multi-role system with secure access and tailored
                functionality, including a robust ticketing system for efficient
                issue resolution. <br />
                •Optimized the platforms UI/UX with modern front-end
                technologies, ensuring intuitive and responsive interactions
                across all devices.
              </p>
            </div>

            <div className="button-container">
              <button onClick={() => handleCardClick(1)}>View Details</button>
            </div>
          </div>
          <div className="project-card">
            <div className="icon">📦</div>

            <div className="content">
              <h3>QC Automation</h3>
              <p>
                •Developed a quality control automation system to streamline
                production workflows by centralizing product, order, and user
                information. <br />
                •Enabled real-time tracking of dispatched products and automated
                report generation, reducing manual effort and errors. <br />
                •Improved production efficiency and operational standards
                through enhanced accuracy and accountability
              </p>
            </div>

            <div className="button-container">
              <button onClick={() => handleCardClick(1)}>View Details</button>
            </div>
          </div>
          <div className="project-card">
            <div className="icon">📦</div>

            <div className="content">
              <h3>Order Management System</h3>
              <p>
                Designed and developed an intuitive Order Management System
                interface for efficient order processing and inventory
                management. <br />
                •Optimized front-end performance for real-time order and
                inventory tracking, ensuring transparency and responsive user
                interactions. <br />
                •Collaborated on production process optimization, delivering a
                front-end solution that enhances order fulfillment and customer
                satisfaction.
              </p>
            </div>

            <div className="button-container">
              <button onClick={() => handleCardClick(1)}>View Details</button>
            </div>
          </div>
          <div className="project-card">
            <div className="icon">📦</div>

            <div className="content">
              <h3>Eglobe Infra Solutions Pvt Ltd - Business Website</h3>
              <p>
                {" "}
                <br />
                Branding and Online Presence Lead Generation Information Sharing
                Product/Service Showcase
              </p>
            </div>

            <div className="button-container">
              <button
                onClick={() => window.open("https://www.egispl.com/", "_blank")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
