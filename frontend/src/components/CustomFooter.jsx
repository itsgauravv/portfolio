import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/itsgauravv",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://linkedin.com/in/itsgauravvv",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:gauravgjani@gmail.com",
      label: "Email",
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
    <footer className="pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-white/60">
            <p className="mb-2 flex flex-col">
              <p>
                Designed and developed with{" "}
                <motion.span
                  className="inline-block text-red-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart />
                </motion.span>{" "}
                by
              </p>{" "}
              <span className="text-white font-semibold">Gaurav Jani</span>
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            x: [-5, 5, -5],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>
    </footer>
  );
};

export default CustomFooter;
