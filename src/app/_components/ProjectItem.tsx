import React from "react";
import MyButton from "./MyButton";


type ProjectInfo = {

  title: string
  tools: Array<string>
  projectType: string
  description: string
  note: string

}


export default function ProjectItem(props: ProjectInfo) {


  const Tags = props.tools.map(tool => {
  return(
  <div key={crypto.randomUUID()} className=" text-[13px] bg-gray-500 text-white flex text-center align-middle border-black border-[0.1rem] w-auto px-2 py-1 font-bold m-[0.2rem]">{tool}</div>
)})

  return (
    <div className="flex mt-16 xl:flex-col xl:items-center xl:justify-center xl:text-center">
      <div className="flex flex-col w-96 xl:w-auto mr-44 xl:mx-0">
        <h1 className="font-bold text-3xl mb-2 flex flex-wrap xl:justify-center">{props.title}</h1>
        <div className="flex flex-wrap xl:justify-center">{Tags}</div>
        <p className="mt-3 text-[1.1rem]"><span className="font-bold">Project Type:</span> {props.projectType}</p>
        <p className="mt-3 text-[1.02rem] mb-4 sm:w-[300px] self-center">{props.description}</p>
        <p className="mb-3">{props.note}</p>
        <div className="flex xl:justify-center">
        <MyButton variant="small">See Live</MyButton>
        <MyButton variant="small">Source Code</MyButton>
     
         </div>
      </div>

      <div className="mr-auto sm:ml-auto items-center h-[390px] w-[630px] sm:w-[320px] sm:h-[220px] ml-auto ">

      <iframe width="100%" height="100%" className="pt-4 self-center"  src="https://www.youtube.com/embed/zSgx8U16stk" title="Youtube API Project - How to Scrape Youtube Videos Data" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin"></iframe>

      </div>

    </div>
  )


}