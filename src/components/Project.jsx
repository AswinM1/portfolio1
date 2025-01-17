const Projects = () => {
  const projects = [
    { 
      name: "Snap Talk Analyser", 
      description: "An AI-powered audio analyser and feedback provider", 
      techStack: ["React", "Groq", "Full stack"], 
      link: "https://snap-talk-wine.vercel.app/"
    },
    { 
      name: "Job Mailer", 
      description: "An ai powered Job mail generator.Generate job mails in seconds", 
      techStack: ["React", "Groq", "Full stack"], 
      link: "https://jobmailer-io.vercel.app/"
    },
    { 
      name: "ShortURL", 
      description: "A URL shortener made with nanoid,has a admin dahboard to track clicks and views", 
      techStack: ["React", "MongoDB", "nanoid"], 
      link: "https://url-shortner-nine-kappa.vercel.app/"
    },
    { 
      name: "Constellations", 
      description: "An eCommerce website made using the MERN stack and Clerk", 
      techStack: ["MongoDB", "Express", "React"], 
      link: "https://constellation-ecommerce.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="py-5 px-6 ">
      <h2 className="text-4xl font-serif mb-9 text-neutral-300  ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-neutral-600 border p-6 rounded-lg hover:bg-gradient-to-l from-[#309828] transition-all duration-800 ease-in-out"

          >
            <h3 className="text-xl font-serif text-neutral-300 ">{project.name}</h3>
            <p className=" text-neutral-400">{project.description}</p>
            <div className=" text-neutral-400 py-5 flex gap-3">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-black text-sm text-neutral-300 py-2 px-2 rounded-xl ">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
