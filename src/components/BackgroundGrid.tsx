import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
          animate={{
            background: [
              'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3))',
              'linear-gradient(to right, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-matrix-rain opacity-10" />
    </div>
  );
};

export default BackgroundGrid;