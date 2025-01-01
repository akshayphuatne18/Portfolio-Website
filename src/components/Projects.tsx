import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Image, Briefcase, MessageSquare, FileCode, Brain } from 'lucide-react';

const projects = [
  {
    icon: Shield,
    title: 'DDoS Protection Tool',
    description: 'Advanced system for detecting and protecting against DDoS attacks using machine learning and real-time monitoring.',
    tags: ['Machine Learning', 'Security', 'Real-time Analytics'],
    link: 'https://github.com/akshayphuatne18/DDoS-Protection-System-for-Cloud-Architecture-and-Tool'
  },
  {
    icon: Image,
    title: 'SAR Image Colorization',
    description: 'Deep learning model for colorizing Synthetic Aperture Radar (SAR) images with enhanced detail recognition.',
    tags: ['Deep Learning', 'Computer Vision', 'Image Processing'],
    link: '#'
  },
  {
    icon: Briefcase,
    title: 'Job Seeker Platform',
    description: 'Full-stack platform connecting job seekers with opportunities, featuring advanced matching algorithms.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    icon: MessageSquare,
    title: 'Mystery Messenger',
    description: 'Privacy-focused messaging app with unique creative interaction features.',
    tags: ['React Native', 'End-to-End Encryption', 'WebSocket'],
    link: '#'
  },
  {
    icon: FileCode,
    title: 'Course File Generator',
    description: 'Automated tool for course file creation using React and MongoDB.',
    tags: ['React', 'MongoDB', 'Automation'],
    link: 'https://github.com/akshayphuatne18/WEB-TECH-PROJ'
  },
  {
    icon: Brain,
    title: 'AI-Powered Practice Platform',
    description: 'Personalized learning platform with AI-driven recommendations and progress tracking.',
    tags: ['AI', 'Machine Learning', 'Education Tech'],
    link: 'https://github.com/akshayphuatne18/MCQ_GENERATOR'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">Showcasing innovation through code</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-purple-500 group-hover:text-cyan-500 transition-colors mr-3" />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="space-y-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700/30 px-3 py-1 rounded-full text-sm text-gray-300 inline-block mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-4 inline-block text-purple-400 hover:text-cyan-400 transition-colors"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;