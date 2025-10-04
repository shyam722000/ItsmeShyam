import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ProjectSection.css";
import orders from "./../../Images/orders.jpg";
import resume from "./../../Images/resume.png";
import remote from "./../../Images/remote.png";
import eglobe from "./../../Images/eglobe.png";

const projects = [
  {
    title: "Order Management System",
    description: "A comprehensive ERP-based interface for streamlining lead generation, sales, inventory, and dispatch workflows with SAP-level data synchronization.",
    tags: ["ERP System", "Order Processing", "Inventory Management", "React", "Tailwind CSS", "REST API", "Context API"],
    image: orders,
  },
  {
    title: "Resume Builder",
    description: "A dynamic web application for creating professional, ATS-friendly resumes with customizable templates and live preview.",
    tags: ["Web App", "React", "PDF Generation", "Resume Builder", "ATS Optimized"],
    image: resume,
  },
  {
    title: "Remote Monitoring System",
    description: "A real-time web app designed for remote monitoring, asset tracking, and maintenance management with multi-role access and ticketing system.",
    tags: ["Real-Time App", "React", "Context", "Tailwind", "REST API"],
    image: remote,
  },
  {
    title: "Eglobe Innovative Solutions Company Website",
    description: "Developed a corporate website showcasing virtualization and IT infrastructure solutions, focusing on scalability and business efficiency.",
    tags: ["Virtualization", "IT Infrastructure", "Corporate Website"],
    image: eglobe,
  },
];

const ProjectSection = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("pi-card-visible");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="pi-project-section">
      <h2 className="pi-project-title">
        My <span className="pi-outline">Projects</span>
      </h2>
      <div className="pi-project-wrapper">
        <button className="pi-nav-icon pi-nav-left" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <div className="pi-project-container" ref={containerRef}>
          {projects.map((project, index) => (
            <div
              className="pi-project-card"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="pi-project-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="pi-project-image-wrapper">
                <img src={project.image} alt={project.title} className="pi-project-image" />
                <div className="pi-project-overlay">
                  <button className="pi-project-view-btn">View Details</button>
                </div>
              </div>
              <div className="pi-project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="pi-project-tags">
                  {project.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span key={tagIndex} className="pi-project-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="pi-project-tag">+{project.tags.length - 5}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="pi-nav-icon pi-nav-right" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;