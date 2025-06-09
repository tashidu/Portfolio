import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { skills } from '../data/portfolio';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && skillBarsRef.current) {
      const skillBars = skillBarsRef.current.querySelectorAll('.skill-bar');
      
      skillBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power2.out',
          }
        );
      });
    }
  }, [inView]);

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

  const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: string } = {
      'Python': '🐍',
      'Java': '☕',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'C++': '⚡',
      'React.js': '⚛️',
      'Django': '🎯',
      'Node.js': '🟢',
      'Flutter': '💙',
      'Jakarta EE': '🏢',
      'MySQL': '🗄️',
      'Firebase': '🔥',
      'Docker': '🐳',
      'Git': '📝',
      'Figma': '🎨',

      'Experience Cloud': '🌐',
      'Machine Learning': '🤖',
      'Weather API Integration': '🌤️',
      'Google Maps API': '🗺️',
    };
    return icons[skillName] || '💻';
  };

  return (
    <section id="skills" className="py-20">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12" ref={skillBarsRef}>
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-400 mb-8 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-3 text-sm">
                    {categoryIndex + 1}
                  </span>
                  {category}
                </h3>

                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getSkillIcon(skill.name)}</span>
                          <span className="font-medium text-white group-hover:text-primary-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative">
                        {/* Background Bar */}
                        <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
                          {/* Progress Bar */}
                          <div
                            className="skill-bar h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full relative overflow-hidden"
                            data-level={skill.level}
                          >
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <motion.div
                          className="absolute -top-8 bg-primary-600 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        >
                          {skill.level}%
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-primary-600" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
