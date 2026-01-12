import SkillCard from "../Components/SkillCard";

function Skills() {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Postman",
    "Java",
    "Spring Boot",
  ];

  return (
    <div className="w-full py-16">
      {/* THIS IS THE MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">
          My Skills
        </h2>

        {/* 👇👇 THIS GRID DIV IS THE KEY FIX 👇👇 */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-4
          "
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;
