'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx";
import { useState ,useEffect} from "react";
import Image from "next/image";


const links = [
  { name: 'Home', href: '/' },
  {name:'Developer',href:'/developer'},
  {name:'Designer',href:'/designer'},

];

export default function SideNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () =>{
    setMenuOpen(!menuOpen)
  }

  useEffect(()=>{
    setMenuOpen(false)
  },[pathname])


    return(
        <nav className="bg-white dark:bg-black top-0 left-0 right-0 z-50   fixed">
            <div className="w-screen flex flex-wrap items-center justify-between md:mx-auto md:p-4">
              <div className="flex flex-row justify-between p-4 md:p-0 w-screen md:w-auto">
                <Link href="/" className="flex  items-center space-x-3 rtl:space-x-reverse">
                <Image src='/favicon.ico' alt="icon" width={20} height={20}></Image>
                      <span className="self-center   font-bold text-xl whitespace-nowrap dark:text-white">Hongyu Zhu</span>
                      {pathname==="/developer"&&<span className="text-red-500 font-bold text-xl">| Developer</span>}
                      {pathname==="/designer"&&<span className="text-red-500 font-bold text-xl">| Designer</span>}
                  </Link>
                  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleMenuClick}>
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
                </div>
                
                {menuOpen?<div className="block md:hidden w-screen bg-black">
                            <ul className="font-medium flex flex-col m-2">
                              {links.map((link)=>(
                                <li key={link.name}>
                                  <a href={link.href} className={clsx("block  text-black  pl-2 py-2  border-black border-0 dark:text-white hover:text-red-500",{"  border-l-red-600 border-l-4":pathname===link.href})}>{link.name}</a>
                                </li>
                              ))
                              }
                            </ul>
                          </div>
                :<div></div>}
    <div className="hidden w-full md:block md:w-auto mr-4" id="navbar-default">
      <ul className="font-medium flex flex-row gap-4">
        {links.map((link)=>{
          console.log("pathname is: "+pathname)
          console.log("link href is: "+link.href)
          return(<li key={link.name} className="text-white ">
            <a href={link.href} className={clsx(" hover:text-red-500 ",{"text-red-500":pathname===link.href})}>{link.name}</a>
          </li>)
          
        })
        }
      </ul>
    </div>
  </div>
</nav>
    )
}
