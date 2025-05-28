import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./AboutMe.css";
import about from "../../Images/about.png";

const AboutMe = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const backtohome = () => {
    navigate("/");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-content-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="pi-about-section">
    
      <div className="pi-about-container">
        {/* Left Side: Image */}
        <div className="pi-about-image">
          <img src={about} alt="Profile" />
        </div>
        {/* Right Side: Content */}
        <div className="pi-about-content" ref={contentRef}>
          <h2 className="pi-project-title">
            About <span className="pi-outline">Me </span>
          </h2>
          <p>
            I am an experienced Front-End Developer specializing in React, with
            a proven track record of delivering responsive and user-centric web
            applications. I excel in creating intuitive interfaces, optimizing
            performance, and ensuring cross-browser compatibility. Passionate
            about staying ahead in the ever-evolving landscape of modern web
            technologies, I am dedicated to building impactful, scalable, and
            cutting-edge solutions that drive innovation and deliver exceptional
            user experiences.
          </p>
          {/* Icons */}
          <div className="pi-about-icons">
            <a
              href="https://github.com/shyam722000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shyamrithulrs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
