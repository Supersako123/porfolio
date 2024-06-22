import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-[#e0f4fb] w-auto h-[800px] lg:h-[1150px] items-center flex">
    <div className="relative w-full flex justify-center gap-32 xl:gap-6 lg:flex-col-reverse lg:items-center">
      <div className="">
        <p className="relative text-left font-bold text-[4rem] top-[-20px] lg:text-center lg:text-[3rem] lg:mt-4">About Me</p>
        <div className="flex gap-56 h-auto">
          <div style={{ width: 'clamp(350px, 50vw, 650px)' }} className="lg:text-center lg:p-4 text-black font-semibold text-[17px]">
            <p>
            Hi, I&apos;m a junior at UNLV with a lifelong passion for technology. I started learning JavaScript and web development in college, and it quickly became a major interest of mine.
            
            </p>
            <p className="mt-4 indent-4">
            I love the turning ideas into reality through code. The more I learn, the more fascinated I become with the endless possibilities in the tech world. Every new concept or tool I encounter sparks my curiosity and drives me to dig deeper.
            </p>
            <p className="mt-4 indent-4">
              When i&apos;m not coding. I like to bowl, play table tennis, and play videogames.
            </p>
          </div>
        </div>
      </div>
      <img src="\jad.jpg" className="h-[400px] p-2 bg-[#0f172a] mt-4 lg:mt-0 " />
    </div>
  </div>
  
  );
}
