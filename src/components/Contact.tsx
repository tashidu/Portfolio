import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCheck, FiX } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiSalesforce } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { personalInfo, references } from '../data/portfolio';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const { serviceId, templateId, publicKey } = emailjsConfig;

      // Template parameters that will be sent to your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Tashidu Vinuka', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: SiSalesforce, href: personalInfo.trailblazer, label: 'Trailblazer', color: 'hover:text-cyan-400' },
  ];

  const contactInfo = [
    { icon: FiMail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'from-red-500 to-red-700' },
    { icon: FiPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'from-green-500 to-green-700' },
    { icon: FiMapPin, text: personalInfo.location, href: '#', color: 'from-blue-500 to-blue-700' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just have a conversation about technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 glass-effect p-4 rounded-xl hover:border-primary-500/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium group-hover:text-primary-400 transition-colors duration-300">
                          {contact.text}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-6">
                  Connect With Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-6">
                  References
                </h3>
                
                <div className="space-y-4">
                  {references.map((ref, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="glass-effect p-4 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-semibold text-white mb-1">{ref.name}</h4>
                      <p className="text-sm text-primary-400 mb-2">{ref.title}</p>
                      <p className="text-xs text-gray-400 mb-2">{ref.institution}</p>
                      <div className="flex flex-col space-y-1 text-xs text-gray-400">
                        <span>📞 {ref.phone}</span>
                        <span>✉️ {ref.email}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-400 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                  >
                    <FiCheck className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                  >
                    <FiX className="w-5 h-5" />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
