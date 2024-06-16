import MyButton from "./MyButton";
import ProjectItem from "./ProjectItem";
import React from "react";

export default function Projects() {
  return (
    <div className="w-full flex h-auto bg-[#a2cfe0] px-6 align-middle justify-center">
      <div className="h-[auto] flex flex-col justify-center align-middle">
        <div className="flex justify-center mt-28 w-[full] font-bold text-[2.7rem] sm:text-[2rem]">PROJECTS</div>
        <ProjectItem
          title="Real-Estate"
          tools={["JavaScript", "Next", "React", "Google Maps", "Typescript", "Tailwind"]}
          projectType="Personal project"
          description="A real estate website that uses the Google Maps API to display property locations. Cards are dynamically updated as users navigate. The design is inspired by leading real estate websites."
          note="cool note"
        />
        <ProjectItem
          title="my title"
          tools={["yes", "yes", "yes"]}
          projectType="Personal project"
          description="cool description cool descriptioncool descriptioncool descriptioncool descriptioncool descriptioncool description"
          note="cool note"
        />
        
      </div>
    </div>
  );
}
