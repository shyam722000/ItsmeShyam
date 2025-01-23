import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Projectpage.css";
import NebulaBackground from "./SpacePro";
import logo from "../loho.png";

const Projectpage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="project_main-container">
      {/* Header Section */}
      <div className="project_header">
        <div className="project_logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="project_nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/ContactMe">Contact</Link>
        </nav>
      </div>

      {/* Background Component */}
      <NebulaBackground />

      {/* Content Section */}
      <div className="project_scrollable-content">
        <div className="project_grid">
          {/* Project Card 1 */}
          <div className="project_card">
            <div className="project_icon">📦</div>
            <div className="project_content">
              <h3>Mecwin Nethra-Remote Monitoring System-IoT</h3>
              <p>
                • Designed and developed Mecwin Nethra, a real-time web
                application for remote monitoring, asset tracking, and
                maintenance management. <br />
                • Implemented a multi-role system with secure access and tailored
                functionality, including a robust ticketing system for efficient
                issue resolution. <br />
                • Optimized the platform's UI/UX with modern front-end
                technologies, ensuring intuitive and responsive interactions
                across all devices.
              </p>
            </div>
            <div className="project_button-container">
              <button>View Details</button>
            </div>
          </div>

          {/* Add remaining project cards */}
          <div className="project_card">
            <div className="project_icon">📦</div>
            <div className="project_content">
              <h3>QC Automation</h3>
              <p>
                • Developed a quality control automation system to streamline
                production workflows by centralizing product, order, and user
                information. <br />
                • Enabled real-time tracking of dispatched products and automated
                report generation, reducing manual effort and errors. <br />
                • Improved production efficiency and operational standards
                through enhanced accuracy and accountability.
              </p>
            </div>
            <div className="project_button-container">
              <button>View Details</button>
            </div>
          </div>

          <div className="project_card">
            <div className="project_icon">📦</div>
            <div className="project_content">
              <h3>Order Management System</h3>
              <p>
                • Designed and developed an intuitive Order Management System
                interface for efficient order processing and inventory
                management. <br />
                • Optimized front-end performance for real-time order and
                inventory tracking, ensuring transparency and responsive user
                interactions. <br />
                • Collaborated on production process optimization, delivering a
                front-end solution that enhances order fulfillment and customer
                satisfaction.
              </p>
            </div>
            <div className="project_button-container">
              <button>View Details</button>
            </div>
          </div>

          <div className="project_card">
            <div className="project_icon">📦</div>
            <div className="project_content">
              <h3>Eglobe Infra Solutions Pvt Ltd - Business Website</h3>
              <p>
                Branding and Online Presence Lead Generation Information Sharing
                Product/Service Showcase
              </p>
            </div>
            <div className="project_button-container">
              <button
                onClick={() =>
                  window.open("https://www.egispl.com/", "_blank")
                }
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
