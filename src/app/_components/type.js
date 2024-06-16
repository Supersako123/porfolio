"use client"
import React from "react";
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

export default function TypingEffect() {

  return (
    <div>
      <Typewriter
        options={{
          delay: 35,
        }}
        onInit={(typewriter) => {
          typewriter.pauseFor("1650")
          typewriter.typeString("<span style = 'color: violet;'>import</span> <span style = 'color: SkyBlue;'>React</span><span>,</span> <span style = 'color: gold;'>{</span> <span style = 'color: SkyBlue;'>  useEffect</span>, <span style = 'color: SkyBlue;'>useState</span> <span style = 'color: gold;'>}</span> <span style = 'color: violet;'>from</span> <span style = 'color: lightsalmon;'>'react'</span>;<br/>")
          typewriter.pauseFor("500")
          typewriter.typeString("<span style = 'color: violet;'>import</span> <span style = 'color: SkyBlue;'>aboutMe</span> <span style = 'color: violet;'>from</span> <span style = 'color: lightsalmon;'>'./aboutMe'</span>; <br/> ")
          typewriter.pauseFor("500")
          typewriter.typeString("<span style = 'color: violet;'>import</span> <span style = 'color: gold;'>{</span> <span style = 'color: SkyBlue;'>Hobbies</span>, <span style = 'color: SkyBlue;'>Skills</span> <span style = 'color: gold;'>}</span> <span style = 'color: violet;'>from</span> <span style = 'color: lightsalmon;'>'./Components'</span>;<br/><br/>")
          typewriter.pauseFor("500")
          typewriter.typeString("<span style = 'color: violet;'>export default</span> <span style = 'color: CornflowerBlue;'>function</span> <span style = 'color: #fff892;'>AboutMe</span><span style = 'color: gold;'>() {<br/><br/></span>")
          typewriter.pauseFor("500")
          typewriter.typeString("<span style = 'color: CornflowerBlue;'>&ensp;&ensp;const</span> <span style = 'color: violet;'>[</span><span style = 'color: SkyBlue;'>hobbies</span>, <span style = 'color: #fff892;'>setHobbies</span><span style = 'color: violet;'>]</span> = <span style = 'color: #fff892;'>useState</span><span style = 'color: violet;'>(</span><span style = 'color: SkyBlue;'>aboutMe</span>.<span style = 'color: SkyBlue;'>hobbies</span><span style = 'color: violet;'>)</span>;<br/>")
          typewriter.pauseFor("500")
          typewriter.typeString("<span style = 'color: CornflowerBlue;'>&ensp;&ensp;const</span> <span style = 'color: violet;'>[</span><span style = 'color: SkyBlue;'>skills</span>, <span style = 'color: #fff892;'>setSkills</span><span style = 'color: violet;'>]</span> = <span style = 'color: #fff892;'>useState</span><span style = 'color: violet;'>(</span><span style = 'color: SkyBlue;'>aboutMe</span>.<span style = 'color: SkyBlue;'>skills</span><span style = 'color: violet;'>)</span>;<br/><br/>")
          typewriter.pauseFor("500")
          typewriter.typeString("&ensp;&ensp;<span style = 'color: #fff892;'>useEffect</span><span style = 'color: violet;'>(</span><span style = 'color: CornflowerBlue;'>()</span><span style = 'color: SkyBlue;'> =＞</span> <span style = 'color: CornflowerBlue;'>(</span><br/>")
          typewriter.pauseFor("500")
          typewriter.typeString('<span style = "color: #fff892;">&ensp;&ensp;&ensp;&ensp;addHobbies</span><span style = "color: gold;">(</span><span style = "color: lightsalmon;">"Bowling"</span><span style = "color: gold;">)</span>,<br/>')
         
          typewriter.typeString('<span style = "color: #fff892;">&ensp;&ensp;&ensp;&ensp;addHobbies</span><span style = "color: gold;">(</span><span style = "color: lightsalmon;">"Gaming"</span><span style = "color: gold;">)</span>,<br/>')
        
          typewriter.typeString('<span style = "color: #fff892;">&ensp;&ensp;&ensp;&ensp;addHobbies</span><span style = "color: gold;">(</span><span style = "color: lightsalmon;">"Guitar"</span><span style = "color: gold;">)</span><br/>')
        
          typewriter.typeString('<span style = "color: CornflowerBlue;">&ensp;&ensp;)</span>, <span style = "color: CornflowerBlue;">[]</span><span style = "color: violet;">)</span><br/><br/>')
          typewriter.pauseFor("500")
          typewriter.typeString('<span style = "color: CornflowerBlue;">&ensp;&ensp;function</span> <span style = "color: #fff892;">addHobbies</span><span style = "color: violet;">(</span><span style = "color: SkyBlue;">newHobby</span><span style = "color: violet;">)</span> <span style = "color: violet;">{</span><br/>')
          typewriter.pauseFor("500")
          typewriter.typeString('<span style = "color: #fff892;">&ensp;&ensp;&ensp;&ensp;setHobbies</span>')
          typewriter.typeString('<span style = "color: CornflowerBlue">(</span><span style = "color: SkyBlue">prevHobbies</span> <span style = "color: CornflowerBlue">=＞</span> <span style = "color: gold">[</span>...<span style = "color: SkyBlue">prevHobbies</span>, <span style = "color: SkyBlue">newHobby</span><span style = "color: gold">]</span><span style = "color: CornflowerBlue">)</span><br/>')
          typewriter.typeString('<span style = "color: violet">&ensp;&ensp;}</span><br/><br/>')
          typewriter.typeString('<span style = "color: violet">&ensp;&ensp;return (</span><br/>')
          typewriter.typeString('<span style = "color: grey">&ensp;&ensp;＜</span><span style = "color: CornflowerBlue">div</span> <span style = "color: SkyBlue">className</span>=<span style = "color: lightsalmon">"Sako"</span><span style = "color: grey">＞<br/></span>')
          typewriter.typeString('<span style = "color: grey">&ensp;&ensp;&ensp;&ensp;＜</span><span style = "color: Turquoise">Hobbies</span> </span><span style = "color: SkyBlue">list</span>=<span style = "color: CornflowerBlue">{</span><span style = "color: SkyBlue">hobbies</span><span style = "color: CornflowerBlue">}</span> <span style = "color: grey">/＞</span> <br/>')
          typewriter.pauseFor("500")
          typewriter.typeString('<span style = "color: grey">&ensp;&ensp;&ensp;&ensp;＜</span><span style = "color: Turquoise">Skills</span> </span><span style = "color: SkyBlue">list</span>=<span style = "color: CornflowerBlue">{</span><span style = "color: SkyBlue">skills</span><span style = "color: CornflowerBlue">}</span> <span style = "color: grey">/＞</span> <br/>')
          typewriter.typeString('<span style = "color: grey">&ensp;&ensp;＜/</span><span style = "color: CornflowerBlue">div</span><span style = "color: grey">＞</span>')
          .start();
        }}
      />
    </div>
  );
}


