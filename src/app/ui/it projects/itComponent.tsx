import { fetchITProjectData } from "@/app/lib/data";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


export async function ItProjects ({projects}:{projects?:any}) {
  const data = await fetchITProjectData();

  

    return(
      <div className="bg-black md:pb-20 pb-10 ">
        <div className="flex flex-col max-w-5xl  mx-4 md:mx-auto">
        <Header/>
        <div className="bg-black flex  flex-col justify-center">
          {data.map((project:any)=>{
            const p = project.attributes
            const img =p.showcase.data[0].attributes.url
            console.log(p)
            return (
              <ImageComponent key={project.id} title={p.Name} imageSrc={img} icon="test" tags = {p.tags} url={p.URL} description={p.Description}/>
            )
          })}
        </div>
        </div>
        
      
        
        </div>
    )
}



const ImageComponent = ({ title, imageSrc, icon,tags,url, description }:{title:string,imageSrc:string,icon:string,tags:string[],url:string, description:string}) => {

    return (
      <Link href={url} className="flex w-full relative  h-[400px] my-2 flex-wrap">
      <div className="relative inline-block w-full group max-h-[400px]">
        <div className="absolute top-0 left-0 text-lg font-bold text-white bg-black rounded-tl-md  rounded-br-md py-3 px-5">
          {title}
        </div>
        <img
          src={imageSrc}
          alt="Description"
          className="w-full h-full object-cover rounded-md object-center"
        />
        <div className="absolute bottom-0 right-0 text-xl text-white bg-black rounded-br-md rounded-tl-md py-3 px-5">
          <GoArrowUpRight className=" text-3xl"/>
        </div>
        {/* 半透明遮罩和左下角的文本，只有在 hover 时才显示 */}
  <div className="absolute inset-0 bg-red-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
  <div className="absolute top-0 left-0 text-lg font-bold text-white bg-black rounded-tl-md  rounded-br-md py-3 px-5">
          {title}
        </div>
    <div className="absolute inset-0 flex items-center justify-center text-white p-8">
      {description}
    </div>
    <div className="absolute bottom-0 left-0 text-white p-5 flex flex-row max-w-96 flex-wrap">
      {/* 自定义的几行文本 */}
      {tags.map((tag)=>(
        <p key={tag} className="text-sm border-white border-2 p-1 m-1">{tag}</p>
      ))}
    </div>
    <div className="absolute bottom-0 right-0 text-xl text-white bg-black rounded-br-md rounded-tl-md py-3 px-5">
          <GoArrowUpRight className=" text-3xl"/>
        </div>

  </div>
      </div>
      </Link>
      
    );
  };

  const Header = () => (
    <header className="mt-4 ml-8 mb-10 text-white">
      <div className="flex flex-col mt-20">
        <h1 className="text-red-500 text-xl font-bold">MY PROJECTS</h1>
        <h2 className="text-4xl">As a <span className="font-bold">Developer</span></h2>
      </div>
    </header>
  );