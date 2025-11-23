import { useRef } from "react";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import ContactSection from "../ContactSection/ContactSection";
import AboutMe from "../About/AboutMe";

const HomePage = () => {
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <HeroSection
        scrollToProjects={() =>
          projectRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToExperience={() =>
          experienceRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div>
        <AboutMe />
      </div>
      {/* <SkillsSection /> */}
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div >
        <SkillsSection />
      </div>
      
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;