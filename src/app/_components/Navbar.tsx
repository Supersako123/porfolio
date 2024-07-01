// @ts-nocheck
import type { Metadata } from "next";
import React from "react";

export default function Navbar(props) {

  const [isMenuActive, setIsMenuActive] = React.useState(false)

  function handleMenuActive() {

    setIsMenuActive(!isMenuActive)

  }


  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[4rem] pl-16 pr-24 sm:pl-4 sm:pr-4 shadow-md z-40 bg-[#0f172a] bg-opacity-90 backdrop-blur-sm text-white">
        <div className="w-full flex items-center h-full">
          <div className="flex items-center font-bold text-[1.3rem] ml-1">JS</div>
          <div className="flex-grow"></div>
          <div className="md:hidden">
            <div className="flex space-x-7 text-[1.1rem] font-semibold">
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => scroll({ top: 0, behavior: 'smooth' })}>Home</div>
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => props.skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Skills</div>
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => props.aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>About</div>
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => props.projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>Projects</div>
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => props.contactRef.current.scrollIntoView({ behavior: "smooth", block: "center"})} >Contact</div>
              <div className="flex items-center cursor-pointer  hover:bg-white hover:text-[#0f172a]" onClick={() => window.open("\Resume_JS.pdf", "_blank")}>Resume</div>
            </div>
          </div>
          <img className="w-[35px] ml-12 md:block hidden cursor-pointer" onClick={handleMenuActive} src={isMenuActive ? `\cross.svg` : `\Hamburger_icon.svg`}></img>
        </div>
        <div className={`fixed left-0 w-full h-screen z-50 bg-slate-800 transform transition-transform duration-[0.5s]  ${isMenuActive ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col gap-3 text-[18px]">
            <div className="flex text-white justify-end font-bold mt-5">
            </div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold transition-colors duration-700 active:bg-slate-400 active:duration-0 cursor-pointer" onClick={() => {scroll({ top: 0, behavior: 'smooth' }); handleMenuActive() }}>Home</div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold transition-colors duration-700 active:bg-slate-400 active:duration-0 cursor-pointer" onClick={() => { props.skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" }); handleMenuActive() }}>Skills</div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold transition-colors duration-700 active:bg-slate-400 active:duration-0 cursor-pointer" onClick={() => { props.aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); handleMenuActive() }}>About</div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold transition-colors duration-700 active:bg-slate-400 active:duration-0 cursor-pointer" onClick={() => { props.projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); handleMenuActive() }}>Projects</div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold" onClick={() =>{props.contactRef.current.scrollIntoView({ behavior: "smooth", block: "center"}); handleMenuActive()}} >Contact</div>
            <div className="flex justify-center items-center w-full h-[70px] bg-slate-600 text-white font-semibold" onClick={() => window.open("\Resume_JS.pdf", "_blank")} >Resume</div>
          </div>
        </div>
      </div>

    </div>
  );
}
