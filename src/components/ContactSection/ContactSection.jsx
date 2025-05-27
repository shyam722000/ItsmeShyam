import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./ContactSection.css";

const contactDetails = [
  {
    type: "email",
    value: "shyamrithulrenju1234@gmail.com",
  },
  {
    type: "phone",
    value: "+91 70346 21688",
  },
  {
    type: "place",
    value: "Bangalore, India",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shyam722000",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shyamrithulrs/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "#",
    icon: FaInstagram,
  },
];

const ContactSection = () => {
  const detailRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    detailRefs.current.forEach((detail) => {
      if (detail) observer.observe(detail);
    });

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      detailRefs.current.forEach((detail) => {
        if (detail) observer.unobserve(detail);
      });
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <section className="pi-contact-section">
     <h2 className="pi-project-title">
        Contact  <span className="pi-outline">Me </span>
      </h2>
      <div className="pi-contact-container">
        <div className="pi-contact-details">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="pi-contact-detail"
              ref={(el) => (detailRefs.current[index] = el)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="pi-contact-label">{detail.type}:</span>
              <span className="pi-contact-value">{detail.value}</span>
              
            </div>
            
            
          ))}
          
        </div>
        
        <div className="pi-social-links">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pi-social-link"
                ref={(el) => (iconRefs.current[index] = el)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <IconComponent className="pi-social-icon" />
              </a>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;