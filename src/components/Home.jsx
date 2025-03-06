import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import TechStackSection from "./TechStackSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

const sections = [
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "My toolkit for building fast, modern, and scalable web apps.",
    component: <TechStackSection />,
  },
  {
    id: "experience",
    title: "Experience",
    description: "A glimpse into my professional journey and contributions.",
    component: <ExperienceSection />,
  },
  {
    id: "projects",
    title: "Projects",
    description: "Some of my finest creations in the world of web development.",
    component: <ProjectSection />,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Let's collaborate and build something amazing!",
    component: <ContactSection />,
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Home = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsIntroVisible(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isIntroVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.h1
              className="text-6xl font-bold text-[#006FEE]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              Grav
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      {!isIntroVisible && (
        <>
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="h-screen w-full flex flex-col items-center justify-center gap-10 text-center"
          >
            {/* Profile Picture */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img
                src="/pfp.png"
                alt="Gaurav Jani"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            <h1 className="text-5xl text-center font-bold">
              Hey, I'm{" "}
              <span className="text-[#006FEE] sm:inline-flex">
                <Typewriter
                  options={{
                    strings: [
                      "Gaurav Jani",
                      "Frontend Dev",
                      "Destroying bugs",
                      "Still debugging",
                      "Coffee-powered",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <p className="text-lg italic">
              Crafting scalable and high-performance web applications.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-6 text-3xl">
              <a
                href="https://github.com/itsgauravv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/itsgauravvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077B5] hover:scale-125 hover:text-[#006FEE] transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>

            <Link
              href="/Gaurav_Jani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="primary" variant="shadow">
                Download CV
              </Button>
            </Link>
          </motion.div>

          {/* Dynamic Sections */}
          {sections.map(({ id, title, description, component }) => (
            <motion.section
              key={id}
              id={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariant}
              className="anchor flex py-24 sm:py-40 flex-col w-full gap-20 items-center text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl font-bold text-[#006FEE]">{title}</h2>
                <p className="w-5/6 sm:w-2/3 italic">{description}</p>
              </div>
              <div className="w-5/6 sm:w-2/3">{component}</div>
            </motion.section>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
