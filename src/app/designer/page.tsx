import { Designer } from "../ui/designer";
import dynamic from 'next/dynamic';

const MasonryGallery = dynamic(() => import('../photographer/masonry'), { ssr: false });
import { getGraphicDesignPortfolio } from '../lib/data';






export default async function Home() {
  

  const graphicDesignData = await getGraphicDesignPortfolio();
  console.log(graphicDesignData.data.attributes.design.data)
  
  const photos = graphicDesignData.data.attributes.design.data.map((photo: { attributes: { url: string; width: number; height: number; }; id: string | number; }) => ({
    src: photo.attributes.url,
    width: photo.attributes.width,
    height: photo.attributes.height,
    key: photo.id
  }));

 

  return (
   
    <div className="backgroundImage">
      <Designer/>
      <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-6 mt-20 text-left border-l-4 border-red-500 pl-4 text-red-500">Graphic Design Portfolio</h1>
        <MasonryGallery photos={photos} />
      </div>
    </div>
    </div>
  );
}
