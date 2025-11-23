import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactSection.css";
import image from "../../Images/me.png"

const contactDetails = [
  {
    type: "Email",
    value: "shyamrithulrenju1234@gmail.com",
    icon: FaEnvelope,
    link: "mailto:shyamrithulrenju1234@gmail.com"
  },
  {
    type: "Phone",
    value: "+91 70346 21688",
    icon: FaPhone,
    link: "tel:+917034621688"
  },
  {
    type: "Location",
    value: "Bangalore, India",
    icon: FaMapMarkerAlt,
    link: null
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
  const socialRefs = useRef([]);
  const ctaRef = useRef(null);

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
        threshold: 0.2,
      }
    );

    detailRefs.current.forEach((detail) => {
      if (detail) observer.observe(detail);
    });

    socialRefs.current.forEach((social) => {
      if (social) observer.observe(social);
    });

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      detailRefs.current.forEach((detail) => {
        if (detail) observer.unobserve(detail);
      });
      socialRefs.current.forEach((social) => {
        if (social) observer.unobserve(social);
      });
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="pi-contact-section">
      <div className="pi-contact-background">
        <div className="pi-contact-grid"></div>
      </div>
      
      <div className="pi-contact-content">
    
        
        <p className="pi-contact-subtitle">
          Let's collaborate and create something amazing together
        </p>

        <div className="pi-contact-main-container">
          <div className="pi-contact-info-wrapper">
            <div className="pi-contact-cards">
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                const content = (
                  <>
                    <div className="pi-contact-card-icon">
                      <IconComponent />
                    </div>
                    <div className="pi-contact-card-text">
                      <span className="pi-contact-card-label">{detail.type}</span>
                      <span className="pi-contact-card-value">{detail.value}</span>
                    </div>
                  </>
                );

                return detail.link ? (
                  <a
                    key={index}
                    href={detail.link}
                    className="pi-contact-card"
                    ref={(el) => (detailRefs.current[index] = el)}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="pi-contact-card"
                    ref={(el) => (detailRefs.current[index] = el)}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="pi-social-section" ref={ctaRef}>
         <div className="pi-social-leftsection">
  <img src={image} alt="Profile" />
</div>
<div className="pi-social-rightsection">
              <h3 className="pi-social-title">Connect With Me</h3>
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
                      ref={(el) => (socialRefs.current[index] = el)}
                      style={{ animationDelay: `${0.45 + index * 0.1}s` }}
                      aria-label={link.name}
                    >
                      <IconComponent className="pi-social-icon" />
                      <span className="pi-social-tooltip">{link.name}</span>
                    </a>
                  );
                })}
              </div>

</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;