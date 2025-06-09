import { motion } from 'framer-motion';
import { FiHeart, FiCode, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiSalesforce } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: SiSalesforce, href: personalInfo.trailblazer, label: 'Trailblazer' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Tashidu Vinuka
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Information Technology undergraduate passionate about creating innovative solutions 
              and contributing to impactful projects.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <FiHeart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <FiCode className="w-4 h-4 text-primary-400" />
              <span>by Tashidu</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">{personalInfo.email}</p>
              <p className="text-gray-400 text-sm">{personalInfo.phone}</p>
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Tashidu Vinuka. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
