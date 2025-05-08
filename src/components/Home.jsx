import { motion } from "framer-motion";

const Hero = () => {
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
    <motion.section
      className="py-10"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.div className="px-5 " variants={child}>
        <motion.h1
          className="text-4xl  text-neutral-200 font-serif mb-4 justify-start"
          variants={child}
        >
          Hi, I'm <motion.span 
  whileHover={{ rotate: 10, scale: 1.1, color: "#60A5FA" }} // light blue
  transition={{ type: "spring", stiffness: 200 }}
>
  Aswin
</motion.span>

        </motion.h1>
        <motion.ul className="text-white text-lg mb-1">
          <motion.li className="mb-1 text-neutral-400" variants={child}>
            I'm a 21y/o full-stack Developer.
          </motion.li>
          <motion.li className="mb-1 text-neutral-400" variants={child}>
            I love building cool projects for the web.
          </motion.li>
          <motion.li className="mb-1 text-neutral-400" variants={child}>
            I use the MERN stack for building my projects.
          </motion.li>
          <motion.li className="mb-1 text-neutral-400" variants={child}>
            Checkout my{" "}
            <a
              href="https://drive.google.com/file/d/17Fx6ea21ChRKhqRqDEU2o5Fi4R28fwaT/view?usp=sharing"
              className="font-serif text-neutral-200 hover:text-blue-500 transition-all duration-300 ease-in-outś"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>{" "}
            here.
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
