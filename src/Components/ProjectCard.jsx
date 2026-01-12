import React from 'react';

function ProjectCard({ title, image, tech, github, live }) {
  return (
    <div
      className="
        border
        rounded-xl
        overflow-hidden
        shadow-sm
        transition-all duration-300
        md:hover:shadow-xl
        md:hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {tech}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              border
              rounded-lg
              py-2
              text-sm
              transition
              md:hover:bg-gray-100
            "
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              bg-blue-600
              text-white
              rounded-lg
              py-2
              text-sm
              transition
              md:hover:bg-blue-700
            "
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
