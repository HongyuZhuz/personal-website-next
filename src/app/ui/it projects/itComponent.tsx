


export function ItProjects ({projects}:{projects?:any}) {

    return(
        <div className="bg-black flex justify-center">
        <ImageComponent title="test" imageSrc="/bg.jpg" icon="test"/>
        </div>
    )

}


const ImageComponent = ({ title, imageSrc, icon }:{title:string,imageSrc:string,icon:string}) => {
    return (
      <div className="relative inline-block w-72 h-96 overflow-hidden">
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