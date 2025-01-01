import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  color: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all"
    >
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 text-${color}-500 mr-3`} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-700/30 px-3 py-1.5 rounded-lg text-gray-300 inline-block mr-2 mb-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;