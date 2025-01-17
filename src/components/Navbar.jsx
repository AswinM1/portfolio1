import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-6 py-4 ">
     
      <div className="flex space-x-4 border py-2 px-10 rounded-xl border-gray-700 fixed mt-10 backdrop-blur-md">
       
        <a href="https://linkedin.com/in/aswinmfullstack"  target="_blank" className="hover:text-neutral-400 text-blue-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/AswinM1" target="_blank" className="hover:text-neutral-400 text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-neutral-400 text-blue-500">
          <FaTwitter size={24} />
        </a>
        <a href="mailto:aswinheria@gmail.com" className="hover:text-neutral-400 text-red-400">
          <MdEmail size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
