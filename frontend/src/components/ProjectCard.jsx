import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";

const ProjectCard = ({
  img,
  title,
  description,
  stack,
  github,
  link,
  category,
  featured,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`glass rounded-xl overflow-hidden relative group flex flex-col ${
        featured ? "lg:col-span-1 h-[500px]" : "h-[500px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
            filter: isHovered
              ? "brightness(1.1) contrast(1.1)"
              : "brightness(1) contrast(1)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            backdropFilter: isHovered ? "blur(2px)" : "blur(0px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg"
              whileHover={{
                scale: 1.15,
                y: -2,
                backgroundColor: "rgba(255,255,255,1)",
                color: "black",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg"
              whileHover={{
                scale: 1.15,
                y: -2,
                backgroundColor: "rgba(255,255,255,1)",
                color: "black",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <FaExternalLinkAlt className="text-xl" />
            </motion.a>
          )}
        </motion.div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-white mb-3"
          whileHover={{
            x: 8,
            scale: 1.02,
            color: "rgba(255,255,255,0.9)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-white/70 leading-relaxed mb-6 text-sm flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(stack) ? (
              stack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))
            ) : (
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20">
                {stack}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-white text-sm font-medium"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,1)",
                color: "black",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaGithub className="text-sm" />
              <span>Code</span>
            </motion.a>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaEye className="text-sm" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0.2)",
          borderWidth: isHovered ? "3px" : "2px",
          boxShadow: isHovered
            ? "0 0 20px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)"
            : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
