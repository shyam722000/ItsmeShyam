import { useEffect, useRef } from "react";
import "./ExperienceSection.css";
import job from "./../../Images/job.png"; 
import job1 from "./../../Images/job1.png"; 
import icon1 from "./../../Images/work.png"; 
import icon2 from "./../../Images/work1.png";

const experiences = [
{
  title: "Software Developer - React JS",
  company: "Mecwin Technologies India Private Limited",
  duration: "2024/01 - 2025/09",
  location: "Bangalore, India",
  description: [
    "Contributed to building scalable and efficient React.js applications with a focus on performance, reusability, and seamless API integration.",
    "Developed scalable React.js web apps and reusable UI components, improving delivery efficiency.",
    "Integrated REST APIs for real-time data visualization, reducing load times by 40%.",
    "Implemented dynamic forms with validations, cutting user input errors by over 50%.",
    "Introduced role-based access control (RBAC) for better permission management.",
    "Maintained hosting infrastructure and DNS settings, achieving 99.9% uptime.",
  ],


    image: job,
    icon: icon1,
  },
  {
    title: "Junior Software Engineer Trainee",
    company: "Poornam Info Vision Private Limited",
    duration: "2021/11 - 2022/03",
    location: "Kochi, India",
    description: [
      "Provided technical assistance for email and website hosting services, ensuring seamless service delivery.",
      "Diagnosed and resolved complex website defects related to HTML, CSS, and JavaScript for 15+ clients; decreased average resolution time by 30%, boosting client satisfaction scores.",
    ], 
    image: job1,
    icon: icon2,
  },
];

const ExperienceSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-card-visible");
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

  return (
    <section className="pi-experience-section">
      <h2 className="pi-project-title">
        Work <span className="pi-outline">History </span>
      </h2>
      <div className="pi-experience-container">
        {experiences.map((experience, index) => (
          <div
            className="pi-experience-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="pi-experience-text">
              <div className="pi-experience-header">
                <h3>{experience.company}</h3>
                <img src={experience.icon} alt={`${experience.company} icon`} className="pi-experience-icon" />
              </div>
              <h4>{experience.title}</h4>
              <span className="pi-experience-duration">
                {experience.duration} | {experience.location}
              </span>
              <ul className="pi-experience-description">
                {experience.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="pi-description-item"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pi-experience-image-container">
              <img src={experience.image} alt={experience.company} className="pi-experience-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;