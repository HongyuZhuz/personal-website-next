import { getTopEditPhotoById } from "@/app/lib/data"
import MasonryGallery from "../masonry"
interface PhotographerPageProps {
    params: { subdomain: string }
  }



  export default async function PhotographerPage({ params }: PhotographerPageProps) {
    const { subdomain } = params
    const data =  await getTopEditPhotoById(subdomain)
    const photos = data.photo.map(
        (photo:{id:string,url:string,width:string,height:string}
        ) => ({
        src: photo.url,
        width: photo.width,
        height: photo.height,
        key: photo.id
      }));
  
    return (
        <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-6 mt-20 text-left border-l-4 border-red-500 pl-4 text-red-500">Photographic Explorations</h1>
          <MasonryGallery photos={photos} />
        </div>
      </div>
    )
  }
  