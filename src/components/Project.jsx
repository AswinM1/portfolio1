import { motion } from "framer-motion";

const Projects = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    initial: { opacity: 0,filter:"blur(10px)"},
    animate: { opacity: 1, y: 0, filter:"blur(0px)",transition: { duration: 0.4 } },
  };

  const projects = [
    {
      name: "Snap Talk Analyser",
      description: "An AI-powered audio analyser and feedback provider",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://snap-talk-wine.vercel.app/",
    },
    {
      name: "Job Mailer",
      description: "An AI-powered job mail generator. Generate job mails in seconds.",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://jobmailer-io.vercel.app/",
    },
    {
      name: "ShortURL",
      description:
        "A URL shortener made with nanoid, with an admin dashboard to track clicks and views.",
      techStack: ["React", "MongoDB", "nanoid"],
      link: "https://url-shortner-nine-kappa.vercel.app/",
    },
    {
      name: "Constellations",
      description: "An eCommerce website made using the MERN stack and Clerk.",
      techStack: ["MongoDB", "Express", "React"],
      link: "https://constellation-ecommerce.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-5 px-6"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-4xl font-serif mb-9 text-neutral-300"
        variants={child}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
            className="border group border-neutral-600 p-6 rounded-lg  shadow-lg hover:shadow-indigo-400 transition-all duration-400 ease-in-out "
            variants={child}
          >
            <h3 className="text-xl font-serif  text-neutral-300 mb-2">
              {project.name}
            </h3>
            <p className="text-neutral-400 mb-4" >{project.description}</p>
            <div className="text-neutral-400 flex flex-wrap gap-3 ">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-black text-sm text-neutral-300 py-1 px-2 rounded-xl bg-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
