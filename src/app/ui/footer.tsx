'use client'
import Link from "next/link"
import Image from "next/image"

export default function Footer () {
    return(
        <div className="flex flex-col justify-center text-center pb-20 font-normal bg-black">
            <hr className=" md:mx-36 mx-10 opacity-30"/>
            <p className="text-white text-xl pt-20 ">Hongyu&apos;s personal website</p>
            <Link className=" text-gray-300 text-xl pt-3 underline hover:text-gray-500" href = "/api/resume">Download Resume</Link>
            <IconList />
        </div>
    )
}

function IconList () {
    return (
        <div className="flex justify-center flex-row pt-3 ">
            <Link key={"personal website"} className="" href={"https://www.hongyu-zhu.com"}><Image key = "personal website" alt = "missing git icon"src={"/cool.png"} className="p-2 opacity-90 filter-white hover:filter-red" width={40} height={40}
            /></Link> 
           <Link key={"github"} className="" href={"https://github.com/HongyuZhuz"}><Image key = "git" alt = "missing git icon"src={"/github-mark.svg"} className="p-2  filter-white hover:filter-red" width={40} height={40}/></Link> 
           <Link key={"linkedIn"} className="" href={"https://www.linkedin.com/in/hongyu-zhu-180817173/"}><Image key = "linkedIn" alt = "missing git icon"src={"/iconmonstr-linkedin-3.svg"} className="p-2 opacity-80 filter-white hover:filter-red text-red-500" width={40} height={40}/></Link> 
        </div>
    )
}