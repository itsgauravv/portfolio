import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import TechStackSection from "./components/TechStackSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import CustomFooter from "./components/CustomFooter";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomNavbar />
      <main className="relative">
        <Home />
        <TechStackSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <CustomFooter />
      </main>
    </div>
  );
}

export default App;
