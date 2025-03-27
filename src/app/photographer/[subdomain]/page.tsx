
import { getTopEditPhotoById } from "@/app/lib/data"
import MasonryGallery from "../masonry"
import Link from "next/link"
import { Suspense } from "react"
import LoadingSpinner from "@/app/ui/loadingSpinner"

interface PhotographerPageProps {
    params: { subdomain: string }
  }



  export default function PhotographerPage({ params }: PhotographerPageProps) {
    const { subdomain } = params
    const dataPromise = getTopEditPhotoById(subdomain)
    
  
    return (
        <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href={"/photographer"}><h2 className="text-xl  underline hover:font-bold mb-6 mt-20 text-left pl-4 text-red-500">
          &lt; back
  </h2></Link>
      <Suspense fallback={<LoadingSpinner/>}>
        <Photos dataPromise={dataPromise}></Photos>
      </Suspense>
        </div>
      </div>
    )
  }

  interface Photo {
    id: number | string;
    url: string;
    width: number;
    height: number;
  }
  
  interface FetchedData {
    photo: Photo[];
  }

  interface PhotosProps {
    dataPromise: Promise<FetchedData>;
  }

  async function Photos({ dataPromise }: PhotosProps) {
    const data = await dataPromise;
    const photos = data.photo.map((photo) => ({
      src: photo.url,
      width: photo.width,
      height: photo.height,
      key: photo.id,
    }));
  
    return <MasonryGallery photos={photos} />;
  }
  