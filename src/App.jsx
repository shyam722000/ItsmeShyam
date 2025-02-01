import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ProjectPage from "./components/Projectpage";
import ContactPage from "./components/Contact";
import ExperienceModal from "./components/ExperienceModal";


function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<HeroSection />} />

          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/ContactMe" element={<ContactPage />} />
          <Route path="/ExperienceSection" element={<ExperienceModal />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
