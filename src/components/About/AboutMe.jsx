// AboutMe.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaRocket, FaPalette, FaLaptopCode, FaMobileAlt, FaLightbulb } from "react-icons/fa";
import "./AboutMe.css";

const AboutMe = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions"
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <FaPalette />,
      title: "Creative Design",
      description: "Beautiful interfaces that users love"
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive",
      description: "Perfect on every device and screen"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile First",
      description: "Prioritizing mobile user experience"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Always exploring new technologies"
    }
  ];

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

  // Auto-cycle through cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="pi-about-section">
      {/* Floating Background Shapes */}
      <div className="pi-about-bg-shapes">
        <div className="pi-about-shape pi-about-shape-1"></div>
        <div className="pi-about-shape pi-about-shape-2"></div>
        <div className="pi-about-shape pi-about-shape-3"></div>
      </div>

      <div className="pi-about-container">
        {/* Left Side: 3D Animated Cards */}
        <div className="pi-about-visual">
          <div className="pi-about-card-stack">
            {cards.map((card, index) => {
              const position = (index - activeCard + cards.length) % cards.length;
              return (
                <div
                  key={index}
                  className={`pi-about-card pi-about-card-${position + 1} ${
                    position < 3 ? "pi-card-visible" : "pi-card-hidden"
                  }`}
                >
                  <div className="pi-about-card-icon">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>

          {/* Card Indicators */}
          <div className="pi-about-card-indicators">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`pi-card-indicator ${index === activeCard ? "active" : ""}`}
                onClick={() => setActiveCard(index)}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="pi-about-content" ref={contentRef}>
          <h2 className="pi-about-title">
            About <span className="pi-gradient">Me</span>
          </h2>
          <p className="pi-about-text">
            I am an experienced Front-End Developer specializing in React, with
            a proven track record of delivering responsive and user-centric web
            applications. I excel in creating intuitive interfaces, optimizing
            performance, and ensuring cross-browser compatibility. Passionate
            about staying ahead in the ever-evolving landscape of modern web
            technologies, I am dedicated to building impactful, scalable, and
            cutting-edge solutions that drive innovation and deliver exceptional
            user experiences.
          </p>

          {/* Stats */}
          <div className="pi-about-stats">
            <div className="pi-about-stat">
              <span className="pi-about-stat-number">2+</span>
              <span className="pi-about-stat-label">Years Exp</span>
            </div>
            <div className="pi-about-stat">
              <span className="pi-about-stat-number">10+</span>
              <span className="pi-about-stat-label">Projects</span>
            </div>
            <div className="pi-about-stat">
              <span className="pi-about-stat-number">100%</span>
              <span className="pi-about-stat-label">Satisfaction</span>
            </div>
          </div>

          {/* Social Icons */}
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