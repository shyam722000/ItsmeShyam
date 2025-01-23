import React, { useRef } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./HeroSection.css";
import logo from "../loho.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import uparrow from "../uparrow.png";

const HeroSection = () => {
  const spaceBackgroundRef = useRef(null);

  const handleUpArrowClick = () => {
    if (spaceBackgroundRef.current) {
      spaceBackgroundRef.current.triggerKeyPress();
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-headers">
        <div className="hero-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="social-media-icons">
        
          <a
            href="https://www.instagram.com/rithul_007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/shyamrithul-thelokki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shyam722000/ItsmeShyam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hero-content">
        <h1>Hello, It's me Shyam</h1>
        <p>
          Frontend Developer | React JS Developer | 3D Enthusiast | Creative
          Designer
        </p>
        <div className="up-arrow-button-container">
          <button className="up-arrow-button" onClick={handleUpArrowClick}>
            <img src={uparrow} alt="Up Arrow" />
            <p style={{ color: "white", fontSize: "1rem" }}>Press the Arrow </p>
          </button>
        </div>
      </div>

      {/* Background */}
      <SpaceBackground ref={spaceBackgroundRef} />
    </div>
  );
};

export default HeroSection;
