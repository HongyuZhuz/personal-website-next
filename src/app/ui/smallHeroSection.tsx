
import Link from "next/link"
 export default function HeroSection () {
    return(
        <div>
            <section id="home">
            <div className="w-full bg-black bg-opacity-50 bg-cover bg-no-repeat text-white p-12 ">
                <div className="md:w-1/2 md:mx-auto mt-96">
                    <p className="text-3xl ml-1">My Project</p>
                    <div className="text-6xl mb-3 md:text-8xl mt-0">
                        
                    
                        <p className="text-red-500 font-bold transition duration-300 transform hover:scale-110 hover:text-red-700 origin-left">As a Developer</p>
                    
                    </div>
                   
                </div>

            </div>
            </section> 
        </div>
    )
}

