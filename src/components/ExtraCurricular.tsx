import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiCalendar, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { extraCurricular } from '../data/portfolio';

const ExtraCurricular = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const getRoleIcon = (role: string) => {
    if (role.includes('Co-chair') || role.includes('Coordinator')) return FiTarget;
    if (role.includes('Member')) return FiUsers;
    return FiTrendingUp;
  };

  const getRoleColor = (role: string) => {
    if (role.includes('Co-chair')) return 'from-red-500 to-red-700';
    if (role.includes('Coordinator')) return 'from-blue-500 to-blue-700';
    if (role.includes('Member')) return 'from-green-500 to-green-700';
    return 'from-purple-500 to-purple-700';
  };

  return (
    <section id="extracurricular" className="py-20">
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
              Leadership & <span className="gradient-text">Community</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My involvement in extracurricular activities and leadership roles that shaped my character
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700" />

              {extraCurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${getRoleColor(activity.role)} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {(() => {
                        const IconComponent = getRoleIcon(activity.role);
                        return <IconComponent className="w-8 h-8 text-white" />;
                      })()}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="ml-8 flex-1 glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {activity.role}
                        </h3>
                        <div className="flex items-center text-primary-400 mb-2">
                          <FiUsers className="w-4 h-4 mr-2" />
                          <span className="font-medium">{activity.organization}</span>
                        </div>
                        {activity.project && (
                          <p className="text-gray-300 text-sm">
                            Project: {activity.project}
                          </p>
                        )}
                        {activity.unit && (
                          <p className="text-gray-300 text-sm">
                            Unit: {activity.unit}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        <span>{activity.year}</span>
                      </div>
                    </div>

                    {/* Role Description */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">
                        Key Responsibilities:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {getResponsibilities(activity.role).map((responsibility, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="px-3 py-1 bg-dark-700/50 border border-white/10 rounded-lg text-xs text-gray-300"
                          >
                            {responsibility}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: 'Leadership Roles', value: '6', icon: FiTarget },
              { label: 'Organizations', value: '5', icon: FiUsers },
              { label: 'Years Active', value: '3+', icon: FiCalendar },
              { label: 'Projects Led', value: '4', icon: FiTrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl text-center hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-3">
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

// Helper function to get responsibilities based on role
const getResponsibilities = (role: string): string[] => {
  const responsibilities: { [key: string]: string[] } = {
    'Project Co-chair': ['Project Planning', 'Team Leadership', 'Resource Management', 'Stakeholder Communication'],
    'Membership Coordinator': ['Member Recruitment', 'Engagement Activities', 'Database Management', 'Event Coordination'],
    'Event Coordinator': ['Event Planning', 'Vendor Management', 'Budget Planning', 'Team Coordination'],
    'Project Coordinator': ['Project Management', 'Timeline Planning', 'Quality Assurance', 'Team Collaboration'],
    'Member': ['Active Participation', 'Task Execution', 'Team Support', 'Skill Development'],
  };

  // Find matching role or return default
  for (const [key, values] of Object.entries(responsibilities)) {
    if (role.includes(key)) {
      return values;
    }
  }
  
  return ['Team Collaboration', 'Active Participation', 'Skill Development', 'Project Support'];
};

export default ExtraCurricular;
