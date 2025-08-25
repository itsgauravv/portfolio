import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "gauravgjani@gmail.com",
      link: "mailto:gauravgjani@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "github.com/itsgauravv",
      link: "https://github.com/itsgauravv",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/itsgauravvv",
      link: "https://linkedin.com/in/itsgauravvv",
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
    <section id="contact" className="py-20">
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
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="flex items-center gap-12 w-full justify-center">
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              className="flex items-center gap-4 group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                {info.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {info.title}
                </h4>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white/70">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-2 h-2 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-3 h-3 bg-white/10 rounded-full"
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
};

export default ContactSection;
