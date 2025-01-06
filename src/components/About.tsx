// import React from 'react';
// import { motion } from 'framer-motion';
// import { GraduationCap, Award, FileText } from 'lucide-react';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 relative">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
//             About Me
//           </h2>
//           <p className="text-gray-300 text-lg">Turning complex problems into elegant solutions</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
//           >
//             <div className="flex items-center mb-6">
//               <GraduationCap className="w-8 h-8 text-purple-500 mr-4" />
//               <h3 className="text-2xl font-bold text-white">Education</h3>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="text-lg font-semibold text-purple-400">BMS Institute of Technology and Management</h4>
//                 <p className="text-gray-200">Computer Science and Engineering</p>
//                 <p className='text-gray-300'>3rd Year Undergrad</p>
//                 <p className="text-gray-400">Current CGPA: 9.2</p>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold text-purple-400">Academic Documents</h4>
//                 <div className="flex space-x-4 mt-2">
//                   <button
//                     onClick={() => window.open('/10thMarksCard.jpg')}
//                     className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all"
//                   >
//                     10th Marks Card
//                   </button>
//                   <button
//                     onClick={() => window.open('/12thMarksCard.jpg')}
//                     className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-all"
//                   >
//                     12th Marks Card
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
//           >
//             <div className="flex items-center mb-6">
//               <Award className="w-8 h-8 text-cyan-500 mr-4" />
//               <h3 className="text-2xl font-bold text-white">Achievements</h3>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="text-lg font-semibold text-cyan-400">Team Lead - MongoDB Workshop</h4>
//                 <p className="text-gray-300">Led and mentored peers in advanced database concepts</p>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold text-cyan-400">Team Lead - Smart India Hackathon, Code Red Hackathon</h4>
//                 <p className="text-gray-300">Led a team which worked on real life problems and provided solutions to those problems</p>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold text-cyan-400">Technical Expertise</h4>
//                 <p className="text-gray-300">Full-stack development with modern technologies</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-12 text-center"
//         >
//           <button
//             onClick={() => window.open('/accenture_resume.pdf')}
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
//           >
//             <FileText className="w-5 h-5 mr-2" />
//             Download Resume
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, FileText } from "lucide-react";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <p className="text-gray-300 text-lg">
            Turning complex problems into elegant solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
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
                <h4 className="text-lg font-semibold text-purple-400">
                  BMS Institute of Technology and Management
                </h4>
                <p className="text-gray-200">
                  Computer Science and Engineering
                </p>
                <p className="text-gray-300">3rd Year Undergrad</p>
                <p className="text-gray-400">Current CGPA: 9.2</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400">
                  Academic Documents
                </h4>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => window.open("/Portfolio-Website/10thMarksCard.jpg")}
                    aria-label="View 10th Marks Card"
                    className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all"
                  >
                    10th Marks Card
                  </button>
                  <button
                    onClick={() => window.open("/Portfolio-Website/12thMarksCard.jpg")}
                    aria-label="View 12th Marks Card"
                    className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-all"
                  >
                    12th Marks Card
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
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
                <h4 className="text-lg font-semibold text-cyan-400">
                  Team Lead - MongoDB Workshop
                </h4>
                <p className="text-gray-300">
                  Led and mentored peers in advanced database concepts
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  Team Lead - Smart India Hackathon, Code Red Hackathon
                </h4>
                <p className="text-gray-300">
                  Led a team which worked on real life problems and provided
                  solutions to those problems
                </p>
              </div>
              <div>
                <h4
                  onClick={openModal}
                  className="text-lg font-semibold text-cyan-400 cursor-pointer hover:underline"
                >
                  Technical Expertise
                </h4>
                <p className="text-gray-300">
                  Full-stack development with modern technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.open("/Portfolio-Website/accenture_resume.pdf")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Modal for Technical Expertise */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative max-w-lg w-full">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-300"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Certification Image */}
            <div className="flex justify-center items-center">
              <img
                src="/Portfolio-Website/certificate.png"
                alt="Certification"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
