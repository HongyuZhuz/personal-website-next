interface SkillProps {
    name:string;
    p:string;
}
interface SkillsProps {
    s:Array<SkillProps>;
}
const developingSkill:Array<SkillProps> = [
    
    {name:"HTML,CSS,JavaScript Knowledge",
    p:"96%"
    },
    {name:"Experienced in React",
    p:"95%"
    },
    {name:"Profitiont with Git, implementing projects on GitHub",
    p:"100%"
    },
    {name:"Experienced in Next.js+Typescript+Tailwind project",
    p:"80%"
    },
    {name:"Build website through SST and AWS",
    p:"76%"
    },
    {name:"DevOps knowledge of Docker (IBM assessment)",
    p:"70%"
    },
]
const designSkill:Array<SkillProps> = [
    {name:"UI/UX Design Expertise",
    p:"100%"
    },
    {name:"Adobe Suite: PS,Ai,Id,Lightroom",
    p:"100%"
    },
    {name:"3D Modelling: SketchUp, Rhino",
    p:"94%"
    },
    {name:"Architeture-building: Autodesk CAD",
    p:"90%"
    },
    {name:"Strong Data Visualization skills",
    p:"100%"
    },

]


export const MyEducationSection = ()=>{
    return(
        <section id="education">
            <div className="bg-black bg-opacity-70 text-white p-10">
                    
                    <div className="flex flex-col md:flex-row md:ml-10">
                        <EducationList />
                        <SkillList />
                    </div>
            </div>
        </section>
        
    )
}

const EducationList = () =>{
    return (
        <div className="md:w-1/2 flex md:justify-end justify-center">
            <div>
                <div className="ml-3 md:ml-0">
                    <p className="text-red-500 text-xl font-bold ">BACKGROUND</p>
                    <h2 className="text-4xl md:mb-4">My Education</h2>
                </div>
                
                <div className="mb-6 flex flex-row">
                    <div className="md:flex hidden">
                        <Bar />
                    </div>
                <Education />
            </div>
            </div>
             
        </div>
    )
}

const Bar = ()=>{
    return(
        <div className="flex flex-col p-4 mt-5 max-h-[450px]">
            <div className="bg-red-500 h-screen w-px relative">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
</div>
    )
}

const Education = () =>{
    return(
        <div className="p-4 md:mr-10 max-w-md">
            <div className="my-4 mb-10">
                <h3 className="text-md text-white">As a developer</h3>
                <p className="text-red-500 font-bold">2018-2020</p>
                <h2 className="text-2xl font-bold">Master of Computing</h2>
                <p className="text-sm">A two-year Masters Degree provided by Australian National University, which enabled me to develop a deep and in-depth knowledge and understanding of professional software development and computing practices.</p>
                <a href="#more" className="text-red-500 underline">More</a>
            </div>
            <div className="my-4">
                <h3 className="text-md text-white">As a designer</h3>
                <p className="text-red-500 font-bold">2014-2018</p>
                <h2 className="text-2xl font-bold">Bachelor of Landscape Architecture</h2>
                <p className="text-sm">Beijing Forestry University offers the best Landscape Architecture program in China. This four-year curriculum enabled me to develop deep understanding in the area Architecture, Landscape Architecture and Digital Design.</p>
                <a href="#designer" className="text-red-500 underline">More</a>
            </div>
        </div>
    )
}

const SkillList = () =>{
    return (
        <div className="md:w-1/2 mt-8 flex md:justify-start justify-center mb-5">
            <div>
                <h2 className="text-4xl mb-4 ml-1">My Skills</h2>
                <div>
                    <Skills s ={developingSkill}/>
                </div>
                <div className="md:mt-10">
                    <Skills s= {designSkill}/>
                </div>
            </div>
            
        </div>
    )
}




    
const Skills:React.FC<SkillsProps> = ({s}) =>{
    return(
        <div className="m-2">
        {s.map(ss=>(<Skill key = {ss.name} name={ss.name} p={ss.p}/>))}
        </div>
       
    )
   
}


const Skill:React.FC<SkillProps> = ({name,p}) =>{
    return(
        <div className=" text-white max-w-md mt-4 md:mt-2">
            <div className="my-2">
                <div className="flex justify-between">
                    <span>{name} </span>
                    <span>{p}</span>
                </div>
                <div className="w-full bg-white h-1">
                    <div className="bg-red-500 h-1" style={{ width: p }}></div>
                </div>
            </div>
        </div>
    )
}
