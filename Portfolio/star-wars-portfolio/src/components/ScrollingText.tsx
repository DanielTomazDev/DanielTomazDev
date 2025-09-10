import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  className?: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block"
      >
        <span className="text-sw-gold/30 text-lg font-bold">
          {text} • {text} • {text} • {text} • {text} • 
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollingText;
