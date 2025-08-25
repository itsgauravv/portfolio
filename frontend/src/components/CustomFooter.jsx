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
    <footer className="py-16 relative overflow-hidden">
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
          {/* Logo and Tagline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-black mb-4">
              <span className="gradient-text">GAURAV JANI</span>
            </h3>
            <p className="text-white/60 max-w-md mx-auto">
              Crafting exceptional digital experiences with passion and
              precision
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  social.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover-lift"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/60">
              <a
                href="mailto:gauravgjani@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                gauravgjani@gmail.com
              </a>
              <span className="hidden sm:block">•</span>
              <span>India</span>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-white/60">
            <p className="mb-2">
              Designed and developed with{" "}
              <motion.span
                className="inline-block text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart />
              </motion.span>{" "}
              by <span className="text-white font-semibold">Gaurav Jani</span>
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
