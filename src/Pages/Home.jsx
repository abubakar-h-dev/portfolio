import heroImage from "../Assets/profile.jpg"; // replace with your actual photo
import { FaGithub, FaLinkedin, FaGoogle   } from "react-icons/fa"; // social icons
import { motion } from "framer-motion"; // optional for animations

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-16 bg-gradient-to-b from-white to-gray-50">

      {/* HERO TEXT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-2/3 text-center md:text-left mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Mohamed Abubakar
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          I craft sleek, responsive web apps that solve real problems. Explore my projects and let’s build something amazing together!
        </p>

        {/* SKILLS HIGHLIGHT */}
        <p className="text-gray-500 mb-6">
          React | Tailwind CSS | Node.js | MongoDB | UI/UX
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            🚀 View Projects
          </a>

          <a
            href="resume.pdf"
            download
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold transition-all hover:bg-blue-50 flex items-center justify-center gap-2"
          >``
            📄 Download Resume
          </a>
        </div>
      </motion.div>

      {/* HERO IMAGE + SOCIAL ICONS */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl">

        {/* HERO IMAGE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-64 md:w-48 rounded-xl shadow-lg"
          />
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-6 mt-6 md:mt-0 justify-center md:flex-col"
        >
          <div className="flex justify-center md:justify-start gap-6 mt-6 ">
<a href="https://github.com/abubakar-h-dev" target="_blank" rel="noopener noreferrer"
   className="text-gray-700 hover:text-gray-900 text-2xl transition-transform duration-300 hover:scale-110">
  <FaGithub />
</a>
  <a href="https://www.linkedin.com/in/mohamed-abubakar-h/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl transition-transform duration-300 hover:scale-110">
    <FaLinkedin />
  </a>
  <a
  href="mailto:mohamedabubakar10050@gmail.com"
  className="text-red-500 hover:text-red-600 text-2xl transition-transform duration-300 hover:scale-110"
  aria-label="Send Email">
  <FaGoogle />
</a>

</div>

        </motion.div>

      </div>
    </div>
  );
}

export default Home;
