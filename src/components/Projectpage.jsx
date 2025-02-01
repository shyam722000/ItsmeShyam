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

  const handleLearnMoreClick = () => {
    navigate("/ContactMe");
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
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Mecwin Nethra-Remote Monitoring System-IoT</h3>
              <p>
                Mecwin Nethra is a real-time web application designed for remote
                monitoring, asset tracking, and maintenance management. In my
                role as the frontend developer, I implemented a multi-role
                system with secure access and built a robust ticketing mechanism
                for efficient issue resolution. Leveraging React, Redux,
                TypeScript, and Tailwind, I delivered an intuitive, responsive
                interface that ensures seamless user interactions across
                devices.
              </p>
            </div>
            <div className="project_button-container">
              <button onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>

          {/* Add remaining project cards */}
          <div className="project_card">
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Mecwin - QC Automation</h3>
              <p>
                I developed a QC control automation system that allows users to
                input purchase orders, record product quantities, and
                automatically generate unique serial numbers and product
                details. By closely monitoring counts and ensuring the integrity
                of stored data, the system reduces manual errors, streamlines
                product tracking, and provides a reliable, easily maintainable
                record of production workflows.
              </p>
            </div>
            <div className="project_button-container">
              <button onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>

          <div className="project_card">
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Mecwin - Order Management System</h3>
              <p>
                I designed and developed an intuitive Order Management System
                (OMS) interface as a comprehensive ERP solution, encompassing
                direct lead generation from the brand website to product sales
                documentation, negotiation, accounts entry, sales confirmation,
                production tracking, and final dispatch. The system also
                integrates robust inventory management features, running in
                parallel with global business-standard SAP, ensuring seamless
                data synchronization. Through optimized front-end performance
                and production process collaboration, I delivered a solution
                that streamlines order fulfillment and boosts customer
                satisfaction.
              </p>
            </div>
            <div className="project_button-container">
              <button onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>

          <div className="project_card">
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Eglobe Infra Solutions Pvt Ltd - Business Website</h3>
              <p>
                Branding and Online Presence Lead Generation Information Sharing
                Product/Service Showcase
              </p>
            </div>
            <div className="project_button-container">
              <button
                onClick={() => window.open("https://www.egispl.com/", "_blank")}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="project_card">
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Finhouse Accounting Service Co - Business Website</h3>
              <p>
              Finhouse Accounting Service Co. is an esteemed Chartered Accountant firm established in 2020 with offices in KSA, India, and UAE. Our diversified and passionate team, led by eminent partners, specializes in Tax Advisory, Audit & Assurance, Regulatory services, Management, and Business consultancy services. We are committed to providing clients with a broad level of quality support across a wide range of corporate services.
              </p>
            </div>
            <div className="project_button-container">
              <button
                onClick={() => window.open("https://finhouse.ae/", "_blank")}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="project_card">
            <div className="project_icon">✈️</div>

            <div className="project_content">
              <h3>Malnad Dreams- Business Website</h3>
              <p>
              We believe that interior beauty lasts long. As a travel agent, I provide personalized travel planning for individuals, couples, families, and groups. I grow my business with referrals from my clients, which I believe is a sign of their satisfaction and confidence in my services. My love for travel inspired me to share my knowledge with friends, and I found joy in planning their trips. This passion led me to become an independent, outside agent for my travel agency.              </p>
            </div>
            <div className="project_button-container">
              <button
                onClick={() => window.open("https://malnaddreams.com/", "_blank")}
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
