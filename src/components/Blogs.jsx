import { motion } from "framer-motion";

const Blogs = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering child animations
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

  const blogs = [
    {
      title: "Understanding URL Shorteners",
      description:
        "Explore how URL shorteners work and how to implement one using Node.js and MongoDB.",
      link: "https://darkmodetailwind.hashnode.dev/understanding-url-shortners",
    },
    {
      title: "Implementing Dark mode using Tailwind CSS",
      description:
        "Implementing dark mode with the help of Tailwind CSS without using Redux and context hooks.",
      link: "https://darkmodetailwind.hashnode.dev/tailwind-darkmode",
    },
  ];

  return (
    <motion.section 
      id="blogs"
      className="py-2 px-6 mb-10 transition"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-4xl font-serif mb-9 text-neutral-200"
        variants={child}
      >
        Blogs
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-neutral-600 border p-6 rounded-lg shadow-lg hover:shadow-indigo-400 transition-all duration-75"
            variants={child}
          >
            <h3 className="text-xl font-serif text-neutral-300">{blog.title}</h3>
            <p className="text-neutral-400 py-3">{blog.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
