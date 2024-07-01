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
import { ContactUs } from "./_components/Contact";


export default function Website() {

  const skillsRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)


  return (
    <div>
      <Navbar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Home
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
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
      <div ref={contactRef}>
      <ContactUs/>
      </div>
      <Footer/>
    </div>
  );
}
