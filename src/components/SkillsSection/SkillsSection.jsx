import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui ,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiEslint,
  SiBabel,
  SiVercel,
  SiDocker,
} from "react-icons/si";

import "./SkillsSection.css";

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Material-UI", icon: <SiMui  /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "RESTful APIs", icon: <SiNodedotjs /> },
  // { name: "Responsive Design", icon: <SiCss3 /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "ESLint", icon: <SiEslint /> },
  { name: "Babel", icon: <SiBabel /> },
  { name: "Vercel", icon: <SiVercel /> },
  // { name: "Docker", icon: <SiDocker /> },
  // { name: "MongoDB", icon: <SiMongodb /> },
  // { name: "PostgreSQL", icon: <SiPostgresql /> },
  // { name: "Express.js", icon: <SiExpress /> },
  // { name: "Node.js", icon: <SiNodedotjs /> },
];

const SkillsSection = () => {
  return (
    <section className="pi-skills-section-v2">
      <h2 className="pi-skills-title">
        Tech <span className="pi-outline">Stack</span>
      </h2>

      <div className="pi-skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="pi-skill-item" data-name={skill.name}>
            <div className="pi-skill-icon-wrapper">
              <div className="pi-skill-icon">{skill.icon}</div>
              <span className="pi-skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;