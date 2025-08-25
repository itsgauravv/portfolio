import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://portfolio-qbm1.onrender.com/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "cors",
        }
      );

      const data = await response.json();

      if (data.message) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "India",
      link: null,
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development. Feel free to reach out through any of the channels
                below.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
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
                        target={
                          info.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </motion.div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

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
