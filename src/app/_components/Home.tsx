
// @ts-nocheck
"use client"
import MyButton from "./MyButton"
import Image from "next/image";
import TypingEffect from './type';



export default function Home(props) {


  return (
    <div className="flex w-full h-[95vh] homePageGradient items-center justify-evenly Slanted">

      <div>
        <div className="text-[1.2rem] flex flex-col mt-40 fadein-left sm:text-center sm:mt-10">
          <div className="text-[21px] font-semibold">Hi, my name is</div>
          <h1 className="text-[clamp(35px,4.5vw,4.5vw)] min-text font-bold">Jonathan Sako.</h1>
          <div className="flex w-[42rem] pb-8 text-[1.2rem] font-semibold sm:hidden sm:px-5">
          I am a computer science major with an interest in web developement. I enjoy solving problems and take pride in creating reliable, well-crafted web experiences.

            </div>
            <div className="w-[40rem] pb-8 text-[1.2rem] font-semibold sm:w-[20rem] sm:block hidden sm:self-center sm:px-5">
            I am a computer science major with an interest in web developement.
            </div>
        </div>
        <div className="flex fade-in-button gap-6 sm:flex-col sm:columns-1 sm:gap-2 sm:w-56 sm:ml-auto sm:mr-auto">
          <MyButton onClick={() =>props.skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center"})}>Skills</MyButton>
          <MyButton onClick={() =>props.aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center"})}>About</MyButton>
          <MyButton onClick={() =>props.projectRef.current.scrollIntoView({ behavior: "smooth", block: "start"})}>Projects</MyButton>   
          <MyButton onClick={() =>props.contactRef.current.scrollIntoView({ behavior: "smooth", block: "center"})}>Contact</MyButton> 
        </div>
      </div>
      <div className="flex flex-col relative pt-60 fadein-right z-[1] xl:hidden ">
        <div className="relative custom-shadow z-[1]">
          <div className="border-black border-b-[1px] w-[470px] h-[35px] bg-[#3B3B3B] z-10 flex ">
          <div className="bg-red-500 border-red-500 border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          <div className="bg-yellow-500 border-yellow-500 border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          <div className="bg-green-500 border-green-500 border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          </div>
          <div className="border-black w-[470px] h-[518px] bg-[#2B2B2B] px-3 py-2 text-white leading-[15px] z-10">
            {TypingEffect()}
          </div>
        </div>

        <div className="absolute bottom-[170px] left-[90px] custom-shadow z-0">
          <div className="border-black border-b-[1px] w-[470px] h-[35px] bg-[#3B3B3B] flex">
          <div className="bg-[#9c9c9c] border-[#9c9c9c] border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          <div className="bg-[#9c9c9c] border-[#9c9c9c] border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          <div className="bg-[#9c9c9c] border-[#9c9c9c] border-4 w-[14px] h-[14px] rounded-full self-center ml-3"></div>
          </div>
          <div className="border-black w-[470px] h-[518px] bg-[#2B2B2B] px-3 py-2 text-white leading-[15px] font-mono text-[13px]">
            <p><span className="text-[violet]">@tailwind</span> <span className="text-[skyblue]">base</span>;</p>
            <p><span className="text-[violet]">@tailwind</span> <span className="text-[skyblue]">components</span>;</p>
            <p><span className="text-[violet]">@tailwind</span> <span className="text-[skyblue]">utilities</span>;</p><br/>
            <p><span className="text-yellow-300">btn-0</span> <span className="text-[gold]">&#123;</span></p>
            <p><span className="text-[skyblue]">&ensp;&ensp;position</span>: <span className="text-[lightsalmon]">relative</span>;</p>
            <p><span className="text-[skyblue]">&ensp;&ensp;overflow</span>: <span className="text-[lightsalmon]">hidden</span>;</p>
            <p><span className="text-[cornflowerblue]">&ensp;&ensp;&ensp;&ensp;&</span>:<span className="text-yellow-300">before</span><span className="text-[violet]"> &#123;</span></p>
            <p><span className="text-[skyblue]">&ensp;&ensp;&ensp;&ensp;z-index</span>: <span className="text-green-200">-1</span>;</p>


          </div>
        </div>

      </div>
    </div>
  );
}



