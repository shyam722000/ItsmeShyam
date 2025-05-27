import "./SkillsSection.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript, SiVite, SiJsonwebtokens,SiThreedotjs  } from "react-icons/si";

const SkillsSection = () => {
  const logos = [
    { Icon: FaReact, alt: "React" },
    { Icon: FaJs, alt: "JavaScript" },
    { Icon: FaCss3Alt, alt: "CSS" },
    { Icon: FaHtml5, alt: "HTML" },
    { Icon: SiRedux, alt: "Redux" },
    { Icon: SiTailwindcss, alt: "Tailwind CSS" },
    { Icon: SiTypescript, alt: "TypeScript" },
    { Icon: SiVite, alt: "Vite" },
    { Icon: SiJsonwebtokens, alt: "JWT" },
    { Icon: FaGitAlt, alt: "Git" },
    { Icon: FaGithub, alt: "GitHub" },
    { Icon: SiThreedotjs, alt: "Three.js" },
  ];

  return (
    <section className="cc-skills">
      <div className="cc-skills-scroller">
        {logos.concat(logos).map(({ Icon, alt }, index) => (
          <div key={`${alt}-${index}`} className="cc-pentagon-container">
            <div className="cc-pentagon">
              <Icon className="cc-skills-logo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;