// HeroSection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = ({
  scrollToProjects,
  scrollToExperience,
  scrollToContact,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToCodesAndRef = () => {
    navigate("/codesandref");
    console.log("Navigate to codes and ref");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero-section">
      {/* Animated Background Blurs */}
      <div className="hero-bg-blur-1"></div>
      <div className="hero-bg-blur-2"></div>

      {/* Navigation */}
      <nav className="hero-nav">
        <div
          className="hero-logo"
          onClick={() => window.location.reload()}
        >
          <span className="hero-logo-accent">0.07</span>
          <span className="hero-logo-subtext">Code & Craft</span>
        </div>

        {/* Desktop Menu */}
        <div className="hero-desktop-menu">
          <button
            onClick={scrollToProjects}
            className="hero-nav-link"
          >
            Projects
          </button>
          <button
            onClick={scrollToExperience}
            className="hero-nav-link"
          >
            Experience
          </button>
          <button
            onClick={goToCodesAndRef}
            className="hero-nav-link"
          >
            Codes & Ref
          </button>
          <button
            onClick={scrollToContact}
            className="hero-collab-btn"
          >
            Let's Collaborate
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hero-hamburger"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="hero-mobile-menu">
            <button
              onClick={() => {
                scrollToProjects();
                toggleMenu();
              }}
              className="hero-mobile-link"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToExperience();
                toggleMenu();
              }}
              className="hero-mobile-link"
            >
              Experience
            </button>
            <button
              onClick={() => {
                goToCodesAndRef();
                toggleMenu();
              }}
              className="hero-mobile-link"
            >
              Codes & Ref
            </button>
            <button
              onClick={() => {
                scrollToContact();
                toggleMenu();
              }}
              className="hero-mobile-btn"
            >
              Let's Collaborate
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-container">
          {/* Main Heading */}
          <h1 className="hero-heading">
            Hi, I'm{" "}
            <span className="hero-gradient-text">Shyam Rithul</span>
          </h1>
          <p className="hero-subheading">React JS Developer</p>

          {/* Tagline */}
          <p className="hero-tagline">&lt;Code &amp; Craft /&gt;</p>
          <p className="hero-description">
            Building Digital Experiences That Matter
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-container">
            <button
              onClick={scrollToProjects}
              className="hero-primary-btn"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="hero-secondary-btn"
            >
              Get In Touch
            </button>
          </div>

       
        </div>

     
      </div>
    </section>
  );
};

export default HeroSection;