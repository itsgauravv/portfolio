import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "NinjaTech",
      period: "May 2024 - Present",
      location: "Remote",
      type: "Full-time",
      logo: "/company.jpeg",
      description:
        "As a Front-End Developer at NinjaTech, I worked on improving efficiency and user experience across the platform. I developed a Chrome Extension that provided instant access to Meta Ads data, making workflows faster and more seamless. I also automated a key module using OpenAI, which sped up processing and allowed the customer service team to assist more users. Additionally, I focused on performance optimization by fixing critical bugs, ensuring the application ran smoother and loaded faster.",
      achievements: [
        "Developed a Chrome Extension for instant Meta Ads data access",
        "Automated key modules using OpenAI integration",
        "Fixed critical bugs for performance optimization",
        "Improved platform efficiency and user experience",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Chrome Extension API",
        "OpenAI API",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "NinjaTech",
      period: "November 2023 - May 2024",
      location: "Remote",
      type: "Internship",
      logo: "/company.jpeg",
      description:
        "As a Front-End Developer Intern at NinjaTech, I improved the platform's look and feel by redesigning the UI to make it more modern and user-friendly. I also fixed over 30 design issues, making the platform easier to use and more enjoyable for users. This experience helped me learn how to build better interfaces and create smooth user experiences.",
      achievements: [
        "Redesigned UI for modern and user-friendly experience",
        "Fixed over 30 design issues across the platform",
        "Improved platform usability and user satisfaction",
        "Gained hands-on experience with modern frontend development",
      ],
      technologies: [
        "React",
        "CSS",
        "UI/UX Design",
        "Problem Solving",
        "User Experience",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Track active card by proximity to viewport center to avoid IO flicker
  useEffect(() => {
    let ticking = false;

    const computeActive = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - centerY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(computeActive);
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    computeActive();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            My Professional Journey
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[3px] md:w-1 bg-gradient-to-b from-white/10 via-white/40 to-white/10 rounded-full">
            <div className="hidden md:block absolute inset-0 blur-xl bg-white/10" />
          </div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              data-index={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={itemVariants}
            >
              {/* Timeline Node + Connector */}
              <div className="pointer-events-none">
                {/* Node */}
                <div className="absolute left-6 md:left-10 -translate-x-1/2 top-8 z-10">
                  <div className="relative">
                    <span
                      className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${
                        index === activeIndex ? "bg-white/40" : "bg-white/20"
                      }`}
                    />
                    <motion.span
                      className="absolute -inset-3 rounded-full bg-white/10"
                      animate={{
                        opacity:
                          index === activeIndex
                            ? [0.4, 0.9, 0.4]
                            : [0.2, 0.6, 0.2],
                        scale:
                          index === activeIndex ? [1, 1.2, 1] : [1, 1.1, 1],
                      }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                    <div
                      className={`relative w-5 h-5 rounded-full shadow-lg transition-transform duration-300 ${
                        index === activeIndex
                          ? "bg-white scale-110"
                          : "bg-white"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full ${
                          index === activeIndex
                            ? "animate-ping bg-white/60"
                            : "animate-ping bg-white/30"
                        }`}
                      />
                      <span
                        className={`absolute inset-1 rounded-full ${
                          index === activeIndex ? "bg-white" : "bg-black"
                        }`}
                      />
                    </div>
                  </div>
                </div>
                {/* Connector stub */}
                <div
                  className={`hidden md:block absolute top-9 left-10 h-0.5 w-24 transition-colors duration-300 ${
                    index === activeIndex ? "bg-white/50" : "bg-white/20"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center gap-8 pt-10">
                {/* Content Card */}
                <motion.div
                  className={`glass rounded-xl p-8 hover-lift mx-auto w-full max-w-3xl transition-all duration-300 ${
                    index === activeIndex
                      ? "ring-2 ring-white/50 shadow-2xl bg-white/5"
                      : "ring-0 bg-white/0"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {experience.title}
                        </h3>
                        <span className="hidden lg:flex px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80">
                          {experience.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white/80 mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-xs" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-white/70"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-32 right-20 w-2 h-2 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-3 h-3 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
