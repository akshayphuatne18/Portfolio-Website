import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      <a
        href="https://www.linkedin.com/in/akshay-phutane-274407276/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
      >
        <Linkedin className="w-6 h-6 mr-3" />
        LinkedIn
      </a>
      <a
        href="https://github.com/akshayphuatne18"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
      >
        <Github className="w-6 h-6 mr-3" />
        GitHub
      </a>
      <a
        href="https://leetcode.com/u/akshay_phutane_18/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
      >
        <Code2 className="w-6 h-6 mr-3" />
        LeetCode
      </a>
    </div>
  );
};

export default SocialLinks;