
import { getTopEditPhotoById } from "@/app/lib/data"
import MasonryGallery from "../masonry"
import Link from "next/link"


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
          <Link href={"/photographer"}><h2 className="text-xl  underline hover:font-bold mb-6 mt-20 text-left pl-4 text-red-500">
          &lt; back
  </h2></Link>
          <MasonryGallery photos={photos} />
        </div>
      </div>
    )
  }
  