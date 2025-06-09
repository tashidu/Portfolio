import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SiSalesforce } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Simplified - Remove heavy GSAP animations for better performance

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: SiSalesforce, href: personalInfo.trailblazer, label: 'Trailblazer' },
  ];

  const contactInfo = [
    { icon: FiMail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, text: personalInfo.location, href: '#' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      <div className="container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-6"
            >
              <span className="text-2xl font-bold text-white">TV</span>
            </motion.div>

            <div>
              <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p ref={subtitleRef} className="text-xl lg:text-2xl text-gray-300 mb-6">
                {personalInfo.title}
              </p>
            </div>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {personalInfo.description}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Elements */}
            <motion.div
              className="floating-element absolute w-80 h-80 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-full blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="floating-element absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-primary-400/30 to-primary-600/30 rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Profile Picture */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="relative">
                {/* Static Border - Better Performance */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full blur-lg opacity-50" />

                {/* Image Container */}
                <motion.div
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/my.jpg"
                    alt="Tashidu Vinuka - Software Engineer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                          <span class="text-6xl font-bold text-white">TV</span>
                        </div>
                      `;
                    }}
                  />

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
                </motion.div>

                {/* Static Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full opacity-60" />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary-300 rounded-full opacity-40" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
