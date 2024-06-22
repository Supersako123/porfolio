
import React from "react"

export default function Footer() {

return (


<div className=" flex flex-col w-full h-[300px] bg-[#0f172a] text-white justify-around items-center ">
<img src="\up-arrow.svg" className="w-10 cursor-pointer animate-hover" onClick={() => scroll({ top: 0, behavior: 'smooth' })} alt="" />
<p className="pb-14">Created by Jonathan Sako @ 2024</p>

</div>


)


  
}