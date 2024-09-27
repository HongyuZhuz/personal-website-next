
import { fetchPortfolioData } from "../lib/data";
import { ImageGalleryClient } from "./imageGalleryClient";



async function convetUrl ():Promise<Array<{ original: string }>> {
  const data = await fetchPortfolioData();

  const formattedImages = data.map((url:string) => ({ original: url }));
  return formattedImages

}
export const Designer= async ()=>{
  const images = await convetUrl()
    return(
        <div className=" bg-black bg-opacity-70 flex-col" id="portfolio">
          <div className='flex flex-col  max-w-5xl mx-auto' id="designer">
            <Header />
          </div>
          <ImageGalleryClient images={images} />
        </div>
        )
}

const Header = () =>(
  <>
    <header className="text-white mt-20 ml-8 ">
        <div className=" flex flex-col md:mt-10">
            <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
            <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
            <p className="text-white text-md max-w-xl">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
        </div>
    </header>
  </>
    
)
        
