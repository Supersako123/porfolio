// @ts-nocheck
import type { Metadata } from "next";

export default function Navbar(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-[4rem] pl-16 pr-24 sm:pl-4 sm:pr-4 shadow-md z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-sm text-white">
      <div className="w-full flex items-center h-full">
        <div className="flex items-center font-bold text-[1.3rem] ml-1">JS</div>
        <div className="flex-grow"></div> 
        <div className="md:hidden">
          <div className="flex space-x-7 text-[1.1rem] font-semibold">
            <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => scroll({top: 0, behavior: 'smooth'})}>Home</div>
            <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => scroll({top: 730, behavior: 'smooth'})}>Skills</div>
            <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => scroll({top: 1500, behavior: 'smooth'})}>About</div>
            <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => scroll({top: 2420, behavior: 'smooth'})}>Projects</div>
            <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]">Contact</div>
          </div>
        </div>
        <img className="w-[35px] ml-12 md:block hidden" src="\Hamburger_icon.svg"></img>
      </div>
    </div>
  );
}
