import HeroSection from "@/app/ui/heroSection";
import SideNav from "../ui/navBar";
import { ItProjects } from "../ui/it projects/itComponent";
import Footer from "../ui/footer";
import SmallHeroSection from "../ui/smallHeroSection";



export default async function Home() {

 

  return (
   
    <div>
      <ItProjects />
      <Footer/>
    </div>
  );
}
