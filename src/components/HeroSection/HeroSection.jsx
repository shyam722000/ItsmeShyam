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
       <div
  className="pi-logo"
  onClick={() => window.location.reload()}
  style={{ cursor: 'pointer' }}
>
  0.07 <span>Code & Craft</span>
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
              it's me <span className="pi-outline">Shyam Rithul</span>  R S
            </p>
            <p>React JS Developer</p>
          </div>
          <div className="pi-hero-down-text">
            <h1>
              <span className="pi-outline"> The 0.07 <code>&lt;Code & Craft /&gt;</code></span>
              <Typewriter
                words={[
                  "That Gets Shit Done",
                  "That Builds Real Stuff",
                  "That Delivers",
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
