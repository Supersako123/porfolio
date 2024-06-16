// @ts-nocheck
import React from "react";


export default function Skill({ imagePath, name }) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <img className="w-20 mb-4 h-20 rounded-2xl sm:w-16 sm:h-16" src={imagePath} alt={`${name} logo`} />
      <span className="text-center max-w-28 font-semibold absolute top-[87px] sm:top-[70px] flex items-start justify-center">
        {name}
      </span>
    </div>
  );
}
