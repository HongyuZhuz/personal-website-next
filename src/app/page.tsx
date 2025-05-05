import HeroSection from "@/app/ui/heroSection";
import { AboutMe } from "./ui/about";
import { MyEducationSection } from "./ui/education";
import { MyCareer } from "./ui/myCareer";
import { fetchCareerData } from "./lib/data";
import { Designer } from "./ui/designer";
import { ItProjects } from "./ui/it projects/itComponent";

export default async function Home() {
  const careerData = await fetchCareerData();

  return (
    <div className="backgroundImage">
      <HeroSection/>
      <AboutMe/>
      <MyEducationSection/>
      <MyCareer careerData={careerData} />
      <ItProjects/>
      <Designer/>
    </div>
  );
}
