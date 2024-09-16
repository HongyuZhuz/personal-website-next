declare module 'react-image-gallery';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



const images = [{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-1+.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-2.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-3.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-4.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-5.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-6.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-7.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio-8.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio+-9.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio+-10.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio+-11.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio+-12.webp"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio-webp/Portfolio+-13.webp"},]

export const Designer=()=>{
    return(
        <div className=" bg-black bg-opacity-70 flex-col" id="portfolio">
          <div className='flex flex-col  max-w-5xl mx-auto' id="designer">
            <Header />
          </div>
          <div className=" pb-10 md:pb-20 mt-5 md:px-10 text-red-500">
          <ImageGallery items={images} showThumbnails={false} lazyLoad = {true} showPlayButton={false}/>
          </div>
        </div>
        )
}

const Header = () =>(
  <>
    <header className="text-white mt-8 ml-8">
        <div className=" flex flex-col md:mt-10">
            <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
            <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
            <p className="text-white text-md max-w-xl">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
        </div>
    </header>
  </>
    
)
        
