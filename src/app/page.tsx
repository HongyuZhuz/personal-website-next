import HeroSection from "@/app/ui/heroSection";
import { AboutMe } from "./ui/about";
import { MyEducationSection } from "./ui/education";
import { MyCareer } from "./ui/myCareer";
import { Designer } from "./ui/designer";
import { MyHobbyPage } from "./ui/hobbie";
import { ContactInfo } from "./ui/contactInfo";
import { Footer } from "./ui/footer";
import SideNav from "./ui/navBar";
import { fetchPortfolioData } from "./lib/data";



export default async function Home() {
  const data = await fetchPortfolioData();

 

  return (
   
    <div>
      <SideNav/>
      <HeroSection/>
      <AboutMe/>
      <MyEducationSection/>
      <MyCareer/>
      <Designer/>
      <MyHobbyPage/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
}
