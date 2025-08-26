import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCode,
  FaPalette,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGitAlt,
  FaPython,
  FaChrome,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiPostman,
  SiOpenai,
  SiVite,
  SiMui,
  SiJest,
  SiStyledcomponents,
  SiFramer,
  SiVercel,
  SiReactquery,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-3xl" />,
      technologies: [
        {
          name: "React",
          icon: <FaReact className="w-12 h-12" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-12 h-12" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-12 h-12" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="w-12 h-12" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="w-12 h-12" />,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 className="w-12 h-12" />,
        },
      ],
    },
    {
      title: "Styling & UI",
      icon: <FaPalette className="text-3xl" />,
      technologies: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-12 h-12" />,
        },
        {
          name: "Sass",
          icon: <FaSass className="w-12 h-12" />,
        },
        {
          name: "Material UI",
          icon: <SiMui className="w-12 h-12" />,
        },
        {
          name: "Styled Components",
          icon: <SiStyledcomponents className="w-12 h-12" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="w-12 h-12" />,
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="w-12 h-12" />,
        },
      ],
    },
    {
      title: "APIs & Integrations",
      icon: <FaServer className="text-3xl" />,
      technologies: [
        {
          name: "Chrome Extensions",
          icon: <FaChrome className="w-12 h-12" />,
        },
        {
          name: "OpenAI API",
          icon: <SiOpenai className="w-12 h-12" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-12 h-12" />,
        },
        {
          name: "TanStack Query",
          icon: <SiReactquery className="w-12 h-12" />,
        },
        {
          name: "REST APIs",
          icon: <FaServer className="w-12 h-12" />,
        },
      ],
    },
    {
      title: "Backend & Runtime",
      icon: <FaCode className="text-3xl" />,
      technologies: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-12 h-12" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-12 h-12" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-12 h-12" />,
        },
        {
          name: "Vite",
          icon: <SiVite className="w-12 h-12" />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="w-12 h-12" />,
        },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-3xl" />,
      technologies: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-12 h-12" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-12 h-12" />,
        },
        {
          name: "Redis",
          icon: <DiRedis className="w-12 h-12" />,
        },
      ],
    },
    {
      title: "Testing & Tools",
      icon: <FaTools className="text-3xl" />,
      technologies: [
        {
          name: "Jest",
          icon: <SiJest className="w-12 h-12" />,
        },
        {
          name: "Playwright",
          icon: (
            <img
              src="/playwright.svg"
              alt="Playwright"
              className="w-12 h-12 invert opacity-70 hover:opacity-100"
            />
          ),
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-12 h-12" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-12 h-12" />,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="tech-stack" className="mt-20 lg:mt-0 py-20">
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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            The stuff I use to make the internet less broken.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-xl p-6 hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white/80">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="relative">
                      <div className="text-white/60 group-hover:text-white transition-all duration-300">
                        {tech.icon}
                      </div>

                      {/* Tooltip */}
                      <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        {tech.name}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-3 h-3 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/30 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
