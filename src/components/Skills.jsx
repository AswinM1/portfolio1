import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skill = [
    { text: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { text: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { text: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { text: "Reactjs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { text: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { text: "Nodejs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { text: "EC2", logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
    { text: "S3", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { text: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { text: "Expressjs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { text: "MongoDb", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { text: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { text: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { text: "DSA", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" }
  ];

  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };
  const child = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };
  return (
    <div>
      < motion.div 
      variants={parent}
      initial="initial"
      animate="animate"
      className="text-4xl font-serif  mx-8 text-neutral-300 mt-10 mb-10">Tech Stack</motion.div>
      <motion.div 
      
      variants={child}
      initial="initial"
      animate="animate"
      className='flex mx-8 text-white font-sans font-semibold flex-wrap m-1 gap-4 mb-20 '>
        {skill.map((val, idx) => (
          <div
            key={idx}
            className='flex flex-row items-center gap-3 px-6 py-3  bg-blue-700  rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer'
          >
           
            <span>{val.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
