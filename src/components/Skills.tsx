import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Shield, Cloud, Brain, Code } from 'lucide-react';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
    color: 'red'
  },
  {
    icon: Code2,
    title: 'Frontend',
    skills: [ 'HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Recoil'],
    color: 'purple'
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'Django','JWT', 'Zod validation','Google OAuth', 'Redis'],
    color: 'cyan'
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma ORM'],
    color: 'green'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CloudFlare', 'Serverless Architecture'],
    color: 'blue'
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: ['Large Language Model', 'Natural Language Processing', 'Deep Learning'],
    color: 'pink'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg">A diverse toolkit for building modern applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;