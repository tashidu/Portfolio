import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { achievements, certifications } from '../data/portfolio';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="achievements" className="py-20 bg-dark-800/50">
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
              <span className="gradient-text">Achievements</span> & Certifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recognition of my dedication to excellence and continuous learning
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-primary-400 mb-8 text-center">
              Competition Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl hover:border-primary-500/50 transition-all duration-300 max-w-4xl mx-auto"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiAward className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">
                        {achievement.title}
                      </h4>
                      <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 rounded-full text-sm text-yellow-300">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Salesforce Platform', 'Apex Programming', 'Lightning Web Components (LWC)', 'Salesforce APIs', 'SOQL/SOSL', 'Custom Metadata & Custom Objects', 'Experience Cloud', 'Google Maps API'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-600/20 border border-primary-600/30 rounded-full text-xs text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary-400 mb-8 text-center">
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiTarget className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">
                          {cert.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          cert.status === 'Ongoing' 
                            ? 'bg-orange-600/20 border border-orange-600/30 text-orange-300'
                            : 'bg-green-600/20 border border-green-600/30 text-green-300'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: FiAward, label: 'Awards Won', value: '1', color: 'from-yellow-500 to-yellow-700' },
              { icon: FiTarget, label: 'Certifications', value: '2+', color: 'from-blue-500 to-blue-700' },
              { icon: FiTrendingUp, label: 'Hackathons', value: '3+', color: 'from-green-500 to-green-700' },
              { icon: FiAward, label: 'Recognition', value: '5+', color: 'from-purple-500 to-purple-700' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl text-center hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
