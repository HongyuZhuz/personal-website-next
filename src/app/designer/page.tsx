import { Designer } from "../ui/designer";

import { getGraphicDesignPortfolio } from '../lib/data';






export default async function Home() {
  

  const graphicDesignData = await getGraphicDesignPortfolio();
  console.log(graphicDesignData.data.attributes.design.data)
  
  

 

  return (
   
    <div className="backgroundImage">
      <Designer/>
     
    </div>
  );
}
