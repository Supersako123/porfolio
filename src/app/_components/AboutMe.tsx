import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-[#e0f4fb] w-auto h-[800px] lg:h-[1150px] items-center flex">
      <div className="relative w-full flex justify-center gap-32 xl:gap-6 lg:flex-col-reverse lg:items-center">
        <div className="">
          <p className="relative text-left font-bold text-[4rem] top-[-20px] lg:text-center lg:text-[3rem] lg:mt-4">About Me</p>
          <div className="flex gap-56 h-auto">
            <div style={{ width: "clamp(350px, 50vw, 650px)" }} className="lg:text-center lg:p-4 text-black font-semibold text-[17px]">
              <p>
              I&apos;m a junior at UNLV with a passion for programming. While I first discovered coding in college, my interest in technology developed gradually. As I grew older, I became increasingly curious about how the tools and platforms I used every day were built, which inspired me to pursue a deeper understanding of programming and web development.
              </p>
              <p className="mt-4">
             I started with JavaScript while in college, and it quickly became a major interest of mine. Over time, I&apos;ve developed a balanced skillset of both front-end and back-end development.
              </p>
              <p className="mt-4">
                besides coding, I enjoy bowling, learning songs from spongebob on my guitar, and playing video games.
              </p>
            </div>
          </div>
        </div>
        <div>
        <img src="\xCRHIiRh7X.jpg" className="h-[400px] sm:h-[350px] p-2 bg-[#0f172a] mt-4 lg:mt-0 " />
        </div>
      </div>
    </div>

  );
}
