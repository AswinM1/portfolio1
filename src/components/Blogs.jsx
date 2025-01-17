const Blogs = () => {
    const blogs = [
     
      { 
        title: "Understanding URL Shorteners", 
        description: "Explore how URL shorteners work and how to implement one using Node.js and MongoDB.", 
        link: "https://darkmodetailwind.hashnode.dev/understanding-url-shortners" 
      },
      
      { 
        title: "Implementing Dark mode using tailwind css", 
        description: "Implementing darkmode with the help of tailwind css without using Redux and context hooks", 
        link: "https://darkmodetailwind.hashnode.dev/tailwind-darkmode" 
      },
    ];
  
    return (
      <section id="blogs" className="py-2 px-6">
        <h2 className="text-4xl font-serif mb-9  text-neutral-200 ">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <a 
              key={index} 
              href={blog.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-neutral-600 border p-6 rounded-lg hover:bg-gradient-to-l from-[#309828] transition-all duration-300 ease-in-out"

            >
              <h3 className="text-xl font-serif text-neutral-300">{blog.title}</h3>
              <p className=" text-neutral-400 py-3">{blog.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blogs;
  