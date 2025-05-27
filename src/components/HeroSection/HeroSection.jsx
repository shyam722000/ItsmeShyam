import { useState } from "react";
import "./HeroSection.css";
import Scroll3DModel from "../../assets/Scroll3DModel";
import { Typewriter } from "react-simple-typewriter";
import { FaMouse, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HeroSection = ({
  scrollToProjects,
  scrollToExperience,
  scrollToContact,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const navigate = useNavigate();

  const goToCodesAndRef = () => {
    navigate('/codesandref');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="pi-hero">
      <div className="pi-logo">
        0.07 <span>RS Craft</span>
      </div>

      <button className="pi-hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`pi-navbar ${isMenuOpen ? "pi-navbar-open" : ""}`}>
        <a onClick={scrollToProjects}>Projects</a>
        <a onClick={scrollToExperience}>Experience</a>
        <a href="#">About</a>
       <button className="pi-collab-btn" onClick={goToCodesAndRef}>
      Codes & Ref
    </button>
        <button className="pi-collab-btn" onClick={scrollToContact}>
          Let’s Collaborate
        </button>
      </nav>

      <div className="pi-hero-content">
        <div className="pi-hero-text-left">
          <div className="pi-hero-up-text">
            <p>
              it's me Shyam <span className="pi-outline">Rithul R s</span>
            </p>
            <p>Software Developer</p>
          </div>
          <div className="pi-hero-down-text">
            <h1>
              <span className="pi-outline">The </span>
              <Typewriter
                words={[
                  "0.07 <RS-Craft /> That Gets Shit Done",
                  "0.07 <RS-Craft /> That Builds Real Stuff",
                  "0.07 <RS-Craft /> That Delivers",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
              <FaMouse
                style={{ fontSize: "20px", marginLeft: "5px", border: "#fff" }}
              />
            </h1>
          </div>
        </div>

        <div className="pi-hero-3dlogo">
          <Scroll3DModel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
