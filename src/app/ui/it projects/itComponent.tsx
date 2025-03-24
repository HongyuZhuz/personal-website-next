
import { fetchITProjectData } from "@/app/lib/data";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';


export async function ItProjects () {
  const data = await fetchITProjectData();

  

    return(
      <div className="bg-black md:pb-20 pb-10 ">
        <div className="flex flex-col max-w-5xl  mx-4 md:mx-auto">
        <Header/>
        <div className="bg-black flex  flex-col justify-center  ">
          {data.map((project:Project)=>{

            const p = project
            console.log("????")
            console.log(p.showcase)
            const img =p.showcase[0].url
            const description: BlocksContent = p.Description;
            return (
              <ImageComponent key={project.id} title={p.Name} imageSrc={img} tags = {p.tags} url={p.url} description={description}/>
            )
          })}
        </div>
        </div>
        
      
        
        </div>
    )
}




const ImageComponent = ({ title, imageSrc, tags,url, description }:{title:string,imageSrc:string,tags:string[],url:string, description:BlocksContent}) => {

    return (
      <Link href={url} className="flex w-full relative  h-[400px] my-2 flex-wrap border border-red-500 rounded-md">
      <div className="relative inline-block w-full group h-full">
        <div className="absolute top-0 left-0 text-lg font-bold text-white bg-black rounded-tl-md rounded-br-md py-3 px-5">
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
      <div className="absolute inset-0 md:flex flex-col items-start justify-center text-white p-8 max-h-30 overflow-hidden hidden">
        <BlocksRenderer content={description} />
      </div>
        <div className="absolute bottom-0 left-0 text-white p-5 flex flex-row md:max-w-96 flex-wrap max-w-72">
          {tags.map((tag)=>(
            <p key={tag} className="text-sm border-white border p-1 m-1">{tag}</p>
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

  export const Header = () => (
    <header className="mt-4 ml-8 mb-10 text-white">
      <div className="flex flex-col mt-20">
        <h1 className="text-red-500 text-xl font-bold">MY PROJECTS</h1>
        <h2 className="text-4xl">As a <span className="font-bold">Developer</span></h2>
      </div>
    </header>
  );


  // 定义 Showcase 类型
type Showcase = ShowcaseItem[]
type ShowcaseItem = {
  url:string;
}


type Description = BlocksContent;


// 定义 Project 类型
type Project = {
  id: number;
  Name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
  url: string;
  Description: Description; // Description 是对象数组
  showcase: Showcase; // showcase 包含图片数据
  icon: {
    data: null | {
      attributes: {
        url: string;
      };
    };
  };
};