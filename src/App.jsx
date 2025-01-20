import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ProjectPage from "./components/Projectpage";
import ContactPage from "./components/Contact";


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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
