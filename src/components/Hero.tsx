import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Server, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center space-x-4 mb-6"
        >
          <Code2 className="w-12 h-12 text-purple-500" />
          <Server className="w-8 h-8 text-cyan-400" />
          <Cloud className="w-10 h-10 text-blue-400" />
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
        >
          Akshay Phutane
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-2 mb-8"
        >
          <p className="text-2xl md:text-3xl text-gray-300">
            Full Stack Developer & DevOps Engineer
          </p>
          <p className="text-xl text-gray-400">
            Passionate about building scalable systems & cloud architecture
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;