import MyButton from "./MyButton";
import ProjectItem from "./ProjectItem";
import React from "react";

export default function Projects() {
  return (
    <div className="w-full flex h-auto bg-[#a2cfe0] px-6 align-middle justify-center pb-24">
      <div className="h-[auto] flex flex-col justify-center align-middle">
        <div className="flex justify-center mt-28 w-[full] font-bold text-[2.7rem] sm:text-[2rem]">PROJECTS</div>
        <ProjectItem
          title="Real-Estate"
          tools={["JavaScript", "React", "Google Maps"]}
          projectType="Personal project"
          description="A real estate website that uses the Google Maps API to display property locations. Cards are dynamically updated as users navigate. The design is inspired by leading real estate websites."
          note="Note: Housing information is based off of randomized data"
          liveLink= "https://sparkling-narwhal-aaeb50.netlify.app/"
          videoLink = "https://www.youtube.com/embed/UTBdFVsFQI0"
          sourceLink="https://github.com/Supersako123/Real-estate-"
        />
        <ProjectItem
          title="Portfolio"
          tools={["Next", "React", "Javascript", "Tailwind", "Typescript"]}
          projectType="Personal project"
          description="A personal porfolio website designed and created by me, using
          react, typescript, and tailwind."
          note=""
          videoLink="https://www.youtube.com/embed/PMWvLiC3YIE"
          sourceLink="https://github.com/Supersako123/porfolio"
        />
          <ProjectItem
          title="Petsoft"
          tools={["Next", "React", "Javascript", "Typescript", "NextAuthV5", "React Hook Form", "ZOD", "Prisma", "Shadcn", "Bcrypt" ]}
          projectType="Personal project"
          description="A CRUD application designed for pet management. It allows users to add,
           delete, and edit pet information within a robust and user-friendly interface."
          note="For convenience, a test account is automatically filled in on the login page."
          videoLink="https://youtu.be/3t8kOCaBBrU"
          liveLink="https://petsoft-project-two.vercel.app/"
          sourceLink="https://github.com/Supersako123/petsoft-project"
        /> 
         <ProjectItem
          title="Vehicle Cards"
          tools={["React", "Javascript"]}
          projectType="Personal project"
          description="Uses data to create informational cards seen on Autotrader."
          note=""
          videoLink="https://www.youtube.com/embed/1x-ygMYaElo"
          liveLink="https://flourishing-kitsune-3e8336.netlify.app"
          sourceLink="https://github.com/Supersako123/Vehicle-cards"
        />
        
      </div>
    </div>
  );
}
