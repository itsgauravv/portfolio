import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => setIsIntroVisible(false), 3500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document
      .getElementById("tech-stack")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {isIntroVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              {/* Story Sequence */}
              <motion.div className="space-y-8">
                {/* Line 1: Hello */}
                <motion.h2
                  className="text-4xl font-light text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Hello, I'm
                </motion.h2>

                {/* Line 2: Full Name */}
                <motion.h1
                  className="text-7xl font-black text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  GAURAV
                </motion.h1>

                {/* Line 3: But you can call me */}
                <motion.h3
                  className="text-2xl font-light text-white/60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  but you can call me
                </motion.h3>

                {/* Line 4: Brand Name */}
                <motion.h1
                  className="text-8xl font-black gradient-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                >
                  GRAV
                </motion.h1>

                {/* Animated line */}
                <motion.div
                  className="w-1 h-16 bg-gradient-to-b from-white/60 to-transparent mx-auto"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isIntroVisible && (
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 border border-white/10 rounded-full"
              style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 border border-white/5 rounded-full"
              style={{
                right: mousePosition.x - 100,
                bottom: mousePosition.y - 100,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.p
                    className="text-lg font-light text-white/80 uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Hello, I'm
                  </motion.p>

                  <motion.h1
                    className="text-6xl lg:text-7xl font-black leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="gradient-text">Gaurav Jani</span>
                  </motion.h1>

                  <motion.div
                    className="text-2xl lg:text-3xl font-light text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Frontend Developer",
                          "UI/UX Enthusiast",
                          "Problem Solver",
                          "Creative Coder",
                          "Coffee Addict ☕",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50,
                        cursor: "|",
                        cursorClassName: "text-white",
                      }}
                    />
                  </motion.div>
                </div>

                <motion.p
                  className="text-lg text-white/60 leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Crafting exceptional digital experiences with clean code and
                  creative design. Passionate about building scalable,
                  user-centric web applications that make a difference.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.a
                    href="https://github.com/itsgauravv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/itsgauravvv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.button
                    onClick={() => window.open("/Gaurav_Jani_Resume.pdf")}
                    className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="text-xl" />
                    <span>Resume</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Column - Creative Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Main geometric shape */}
                  <motion.div
                    className="w-80 h-80 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hexagon background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Tech Visual */}
                    <motion.div
                      className="absolute inset-4 rounded-2xl overflow-hidden border-2 border-white/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="/pfp.png"
                        alt="Gaurav Jani"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Floating tech icons */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center"
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-white/80 text-lg">⚛️</span>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center"
                      animate={{
                        y: [5, -5, 5],
                        rotate: [0, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <span className="text-white/80 text-lg">⚡</span>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 -right-8 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center"
                      animate={{
                        x: [-5, 5, -5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <span className="text-white/80 text-sm">🎯</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            whileHover={{ y: 5 }}
          >
            <span className="text-sm font-light">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowDown className="text-xl" />
            </motion.div>
          </motion.button>
        </section>
      )}
    </>
  );
};

export default Home;
