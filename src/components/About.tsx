import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg">Turning complex problems into elegant solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-purple-500 mr-4" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-400">BMS Institute of Technology</h4>
                <p className="text-gray-300">Computer Science and Engineering</p>
                <p className="text-gray-400">Current CGPA: 9.2</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400">Academic Documents</h4>
                <div className="flex space-x-4 mt-2">
                  <button 
                    onClick={() => window.open('/10thMarksCard.jpg')}
                    className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all"
                  >
                    10th Marks Card
                  </button>
                  <button 
                    onClick={() => window.open('/12thMarksCard.jpg')}
                    className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-all"
                  >
                    12th Marks Card
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-cyan-500 mr-4" />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">Team Lead - MongoDB Workshop</h4>
                <p className="text-gray-300">Led and mentored peers in advanced database concepts</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">Technical Expertise</h4>
                <p className="text-gray-300">Full-stack development with modern technologies</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={() => window.open('/accenture_resume.pdf')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;