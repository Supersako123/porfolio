// @ts-nocheck
import Skill from "./Skill";
import React from "react";

export default function Skills(props) {
  return (
    <div className="flex h-[670px] bg-[#93BFD0] pl-64 py-44 pr-52 xl:px-8 pt-[3.9rem]">
     
        <div className="z-[1] mt-9 flex flex-col text-center border-black border-r-2 pr-32 xl:pr-5 md+:hidden">
          <h1 className="font-bold text-[2.7rem]"> Tech Stack </h1>
          <h2 className="font-semibold max-w-[35rem] self-center text-center mb-6 min-w-96 text-[17px]">
           These are the technologies that I use most in my projects. currently I&apos;m learning SQL and PHP.
          </h2>
          <div className="mt-4 z-[1] text-center rounded-3xl flex flex-wrap gap-4">
            <Skill imagePath="/react-1-logo.svg" name="React" />
            <Skill imagePath="/JavaScript-logo.png" name="Javascript" />
            <Skill imagePath="/if82cpbS_400x400.jpg" name="Next" />
            <Skill imagePath="/Typescript_logo_2020.svg.png" name="Typescript" />
            <Skill imagePath="/logo.png" name="Tailwind" />
            <Skill imagePath="/github-6980894_1280.webp" name="Github" />
          </div>
        </div>
     
    
        <div className="ml-20 xl:mx-0 xl:items-center flex flex-col md+:hidden">
          <h1 className="font-bold text-[2.7rem] z-[1] w-96 flex mt-48 mb-6 xl:justify-center">Other Skills</h1>
          <div className="mt-0 z-[1] text-center rounded-3xl flex flex-wrap gap-4">
            <Skill imagePath="/assembly-icon-1024x1024-lc5e1bk1.png" name="Assembly" />
            <Skill imagePath="/ISO_C++_Logo.svg" name="C++" />
            <Skill imagePath="/Google_Maps_icon_(2015-2020).svg" name="Google Maps API" />
          </div>
        </div>

        <div className="z-10  flex-col w-full hidden md+:block">
          <h1 className="font-bold text-[2.2rem] text-center"> Tech Stack </h1>
          <h2 className="font-semibold text-center">These are the technologies that I use most in my projects. currently I&apos;m learning SQL and PHP.</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6 ">
            <Skill imagePath="/react-1-logo.svg" name="React" />
            <Skill imagePath="/JavaScript-logo.png" name="Javascript" />
            <Skill imagePath="/if82cpbS_400x400.jpg" name="Next" />
            <Skill imagePath="/Typescript_logo_2020.svg.png" name="Typescript" />
            <Skill imagePath="/logo.png" name="Tailwind" />
            <Skill imagePath="/github-6980894_1280.webp" name="Github" />
          </div>
          <div className="border-y-[1px] border-black mt-12 "></div>
          <h1 className="font-bold text-[2.2rem] text-center mt-10 sm:mt-3">Other Skills </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-6 sm:mt-3">
            <Skill imagePath="/assembly-icon-1024x1024-lc5e1bk1.png" name="Assembly" />
            <Skill imagePath="/ISO_C++_Logo.svg" name="C++" />
            <Skill imagePath="/Google_Maps_icon_(2015-2020).svg" name="Google Maps API" />
          </div>
        </div>
  

    </div>
  );
}
