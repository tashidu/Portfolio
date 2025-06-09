import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { softSkills } from '../data/portfolio';

const About = () => {
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
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Profile Image for About Section */}
              <motion.div
                className="lg:hidden mb-8 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-xl">
                  <img
                    src="/my.jpg"
                    alt="Tashidu Vinuka"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                          <span class="text-4xl font-bold text-white">TV</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary-400 mb-4">
                Full Stack Developer & AI Enthusiast
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated Information Technology undergraduate at the University of Kelaniya,
                passionate about creating innovative solutions that make a real impact. My journey
                in technology has been driven by curiosity and a desire to solve complex problems
                through code.
              </p>

              <p className="text-gray-300 leading-relaxed">
                With experience spanning from web development to machine learning, I enjoy working
                with diverse technologies and frameworks. As an <span className="text-primary-400 font-semibold">AI/Machine Learning enthusiast</span>,
                I'm particularly fascinated by the potential of artificial intelligence to transform industries.
                I believe in writing clean, efficient code and am always eager to explore <span className="text-primary-400 font-semibold">new technologies</span> and best practices.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My passion for innovation drives me to stay updated with the latest technological advancements,
                from cutting-edge AI frameworks to emerging development tools. Beyond coding, I'm actively
                involved in various extracurricular activities, taking on leadership roles that have helped
                me develop strong communication and project management skills.
              </p>

              <motion.div
                className="flex flex-wrap gap-3 mt-8"
                variants={containerVariants}
              >
                <h4 className="w-full text-lg font-semibold text-primary-400 mb-2">
                  Core Values & Approach:
                </h4>
                {['AI/ML Innovation', 'New Technology', 'Quality Code', 'Continuous Learning'].map((value) => (
                  <motion.span
                    key={value}
                    variants={itemVariants}
                    className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-sm text-primary-300"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    {value}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Soft Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary-400 mb-6">
                Soft Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="glass-effect p-4 text-center group hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    custom={index}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {skill.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                      {skill}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10"
              >
                {[
                  { number: '15+', label: 'Projects' },
                  { number: '3+', label: 'Years Learning' },
                  { number: '10+', label: 'AI/ML Tools' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
