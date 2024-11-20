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
              I&apos;m a junior at UNLV with a passion for programming. While I was first introduced to coding in college, i&apos;ve always been facinated with technology. As a kid I would spend hours modding some of my favorite games.
              </p>
              <p className="mt-4">
              I began learning JavaScript and web development while in college, and it quickly became a major interest of mine. I&apos;m always improving my front end skills, and I&apos;m currently learning about the realm of back-end development.
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
