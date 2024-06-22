'use client'

import Image from "next/image";
import Home from "./_components/Home"
import Navbar from "./_components/Navbar"
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Aboutme from "./_components/AboutMe";
import Footer from "./_components/Footer";
import { useRef } from "react";
import React from 'react'
import AboutMe from "./_components/AboutMe";


export default function Website() {

  const skillsRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)


  return (
    <div>
      <Navbar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
      />
      <Home
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
      />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}
