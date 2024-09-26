import { fetchITProjectData } from "@/app/lib/data";


export async function ItProjects ({projects}:{projects?:any}) {
  const data = await fetchITProjectData();

  

    return(
      
        <div className="bg-black flex justify-center">
          {data.map((project:any)=>{
            const p = project.attributes
            return (
              <ImageComponent title={p.Name} imageSrc="/bg.jpg" icon="test" tags = {p.tags} url={p.url}/>
            )
          })}
        </div>
    )
}



const ImageComponent = ({ title, imageSrc, icon,tags,url }:{title:string,imageSrc:string,icon:string,tags:string[],url:string}) => {

    return (
      <div className="relative inline-block h-36 overflow-hidden mx-5 w-full group">
        <div className="absolute top-0 left-0 text-lg font-bold text-black bg-white rounded-tl-md py-3 px-5">
          {title}
        </div>
        <img
          src={imageSrc}
          alt="Description"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-0 right-0 text-xl text-black bg-white rounded-br-md py-3 px-5">
          {icon}
        </div>

        {/* 半透明遮罩和左下角的文本，只有在 hover 时才显示 */}
  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="absolute bottom-0 left-0 text-white p-5 flex flex-row gap-4">
      {/* 自定义的几行文本 */}
      {tags.map((tag)=>(
        <p className="text-sm border-white border-2 p-1">{tag}</p>
      ))}
    </div>
  </div>
      </div>
    );
  };