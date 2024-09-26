import { fetchITProjectData } from "@/app/lib/data";


export async function ItProjects ({projects}:{projects?:any}) {
  const data = await fetchITProjectData();

  

    return(
      
        <div className="bg-black flex justify-center">
          {data.map((project:any)=>{
            const p = project.attributes
            return (
              <ImageComponent title={p.Name} imageSrc="/bg.jpg" icon="test"/>
            )
          })}
        </div>
    )
}



const ImageComponent = ({ title, imageSrc, icon }:{title:string,imageSrc:string,icon:string}) => {
  
    return (
      <div className="relative inline-block h-36 overflow-hidden mx-5 w-full">
        <div className="absolute top-0 left-0 text-lg font-bold text-white bg-black rounded-br-md py-3 px-5">
          {title}
        </div>
        <img
          src={imageSrc}
          alt="Description"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-0 right-0 text-xl text-white bg-black rounded-tl-md py-3 px-5">
          {icon}
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-br-full"></div>



        
      </div>
    );
  };