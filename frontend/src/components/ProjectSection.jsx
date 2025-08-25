import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      img: "/collaborative-live-docs.png",
      title: "Collaborative Live Docs",
      description:
        "A real-time collaborative document editor with rich text editing capabilities, allowing multiple users to work together seamlessly on documents with live updates and advanced formatting options.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Shadcn",
        "Clerk",
        "LiveBlocks",
      ],
      link: "https://collaborative-live-docs.vercel.app/",
      github: "https://github.com/itsgauravv/collaborative-live-docs",
      category: "Full-Stack",
      featured: true,
    },
    {
      id: 2,
      img: "/podify.jpeg",
      title: "Podify",
      description:
        "Explore, create, and listen to podcasts powered by cutting-edge AI technologies! A comprehensive platform for podcast enthusiasts with AI-powered content generation and discovery features.",
      stack: [
        "OpenAI",
        "Next.js",
        "TypeScript",
        "Convex",
        "Clerk",
        "Tailwind",
        "Shadcn",
      ],
      link: "https://podify-podcasts.vercel.app",
      github: "https://github.com/itsgauravv/podify",
      category: "AI Integration",
      featured: true,
    },
    {
      id: 3,
      img: "/anirev.jpeg",
      title: "AniRev",
      description:
        "A space for anime lovers to create, post, and read reviews with a sleek, minimalistic UI. A community-driven platform for anime enthusiasts to share their thoughts and discover new content.",
      stack: ["React 19", "Sanity", "Styled-Components", "TypeScript"],
      link: "https://anirev.vercel.app",
      github: "https://github.com/itsgauravv/anirev",
      category: "Frontend",
      featured: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
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
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Showcasing my finest creations and innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            variants={itemVariants}
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/itsgauravv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-40 left-20 w-2 h-2 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-3 h-3 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/30 rounded-full"
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

export default ProjectSection;
