import ProjectCard from "../Components/ProjectCard";
import project1 from "../Assets/Netflix.png";
import project2 from "../Assets/blogapp.png"
import project3 from "../Assets/profile.jpg"

function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      image: project1,
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/yourname/ecommerce",
      live: "https://your-ecommerce-live-link.com",
    },
    {
      title: "Blog Application",
      image: project2,
      tech: "React, Express, MongoDB",
      github: "https://github.com/yourname/blog-app",
      live: "https://your-blog-live-link.com",
    },
    {
      title: "Portfolio Website",
      image: project3,
      tech: "React, Tailwind CSS",
      github: "https://github.com/yourname/portfolio",
      live: "https://your-portfolio-live-link.com",
    },
  ];

  return (
    <div className="w-full py-16">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">
          My Projects
        </h2>

        {/* 👇👇 GRID – THIS IS THE KEY 👇👇 */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;
