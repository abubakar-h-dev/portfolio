import React from 'react';

function SkillCard({ skill }) {
  return (
    <div
      className=" border rounded-lg p-4 text-center text-sm sm:text-base font-medium break-words 
      transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-1">
      {skill}
    </div>
  );
}

export default SkillCard;