import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiCode, FiCalendar } from 'react-icons/fi';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Full Stack': 'from-blue-500 to-blue-700',
      'Salesforce': 'from-cyan-500 to-cyan-700',
      'Distributed Systems': 'from-purple-500 to-purple-700',
      'Enterprise': 'from-green-500 to-green-700',
      'Web Application': 'from-orange-500 to-orange-700',
      'Mobile': 'from-pink-500 to-pink-700',
      'Education': 'from-indigo-500 to-indigo-700',
      'Game Development': 'from-red-500 to-red-700',
      'Machine Learning': 'from-yellow-500 to-yellow-700',
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="projects" className="py-20 bg-dark-800/50">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              A showcase of my technical skills and passion for creating innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-primary-500/50 hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={itemVariants}
                  layout
                  className="glass-effect rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Project Header */}
                  <div className={`h-2 bg-gradient-to-r ${getCategoryColor(project.category)}`} />
                  
                  <div className="p-6">
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary-600/20 border border-primary-600/30 rounded-full text-xs text-primary-300">
                        {project.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-dark-700/50 border border-white/10 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-dark-700/50 border border-white/10 rounded text-xs text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 bg-primary-600/20 border border-primary-600/30 rounded-lg text-primary-300 hover:bg-primary-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiCode className="w-4 h-4" />
                        <span className="text-sm">View Code</span>
                      </motion.a>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: 'Total Projects', value: projects.length.toString() },
              { label: 'Technologies Used', value: '15+' },
              { label: 'Years of Experience', value: '3+' },
              { label: 'Lines of Code', value: '50K+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center glass-effect p-4 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
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

export default Projects;
