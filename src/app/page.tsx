'use client'

import Image from "next/image";
import Home from "./_components/Home"
import Navbar from "./_components/Navbar"
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Aboutme from "./_components/AboutMe";
import React from 'react'
import AboutMe from "./_components/AboutMe";


export default function Website() {



  return (
    <div>
      <Navbar />
      <Home/>
      <Skills />
      <AboutMe />
      <Projects />
    </div>
  );
}
