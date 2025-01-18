import React from 'react';
import { motion } from 'framer-motion';


const SkillCard = ({ title, icon, skills }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
