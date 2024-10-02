import HeroSection from "@/app/ui/heroSection";
import { AboutMe } from "./ui/about";
import { MyEducationSection } from "./ui/education";
import { MyCareer } from "./ui/myCareer";
import { Designer } from "./ui/designer";
import { MyHobbyPage } from "./ui/hobbie";
import { ItProjects } from "./ui/it projects/itComponent";



export default async function Home() {

 

  return (
   
    <div className="backgroundImage">
      <HeroSection/>
      <AboutMe/>
      <MyEducationSection/>
      <MyCareer/>
      <ItProjects/>
      <Designer/>
      <MyHobbyPage/>
    </div>
  );
}
