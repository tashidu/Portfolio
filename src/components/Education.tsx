import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { education } from '../data/portfolio';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="education" className="py-20">
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
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey in pursuing excellence in technology and innovation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FiAward className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="ml-8 flex-1 glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-primary-400 mb-2">
                          <FiMapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center text-gray-400">
                          <FiCalendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.status && (
                          <span className="px-3 py-1 bg-primary-600/20 border border-primary-600/30 rounded-full text-sm text-primary-300">
                            {edu.status}
                          </span>
                        )}
                        {edu.result && (
                          <span className="px-3 py-1 bg-green-600/20 border border-green-600/30 rounded-full text-sm text-green-300">
                            Result: {edu.result}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Additional Info for University */}
                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <h4 className="text-lg font-semibold text-primary-400 mb-3">
                          Key Focus Areas:
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {[
                            'Software Engineering',
                            'Web Development',
                            'Database Systems',
                            'Mobile App Development',
                            'Machine Learning',
                            'Data Science',
                            'Data Structures',
                            'Algorithms',
                            'Project Management',
                            'Software Testing'
                          ].map((subject, idx) => (
                            <motion.span
                              key={subject}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + idx * 0.1 }}
                              className="px-3 py-2 bg-dark-700/50 border border-white/10 rounded-lg text-sm text-gray-300 text-center hover:border-primary-500/50 transition-colors duration-300"
                            >
                              {subject}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-6">
              Academic Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                
                {
                  title: 'Research Interest',
                  value: 'AI & Machine Learning',
                  description: 'Focus on innovative solutions'
                },
                {
                  title: 'Expected Graduation',
                  value: '2026',
                  description: 'BSc.(Hons.) Information Technology'
                },
                {
                  title: 'Current Focus',
                  value: 'Full Stack & AI/ML',
                  description: 'Building innovative applications'
                }
              ].map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl text-center hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
