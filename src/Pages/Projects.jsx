import ProjectCard from "../Components/ProjectCard";
import project1 from "../Assets/netfliz_land.jpg";
import project2 from "../Assets/tailwind.png"
import project3 from "../Assets/profile.jpg"

function Projects() {
  const projects = [
    {
    title: "Portfolio Website",
    image: project3, // project image import panna irukkanum
    tech: "React, Tailwind CSS",
    github: "https://github.com/abubakar-h-dev/portfolio",
    live: "https://portfolio-five-snowy-74.vercel.app/",
  },
  {
    title: "Netflix Clone",
    image: project1,   // project image import panna irukkanum
    tech: "React, Tailwind CSS",
    github: "https://github.com/abubakar-h-dev/netflix-clone-react",
    live: "https://netflix-clone-react-two.vercel.app/",
  },
  {
    title: "Tailwind Clone",
    image: project2,  // project image import panna irukkanum
    tech: "React, Tailwind CSS",
    github: "https://github.com/abubakar-h-dev/Tailwindcss",
    live: "https://tailwindcss-clone.vercel.app/",
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
