import { getTopEditPhotos } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';


export default async function Page() {
    const topEditPhotosData = await getTopEditPhotos();
    
    

    return (
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-6 mt-20 text-left border-l-4 border-red-500 pl-4 text-red-500">Photographic Explorations</h1>
          <CoverPhoto topEditPhotos = {topEditPhotosData}/>
        </div>
      </div>
    );
  }


  function CoverPhoto ({topEditPhotos}:any) {
      return(
        <div>
          {topEditPhotos.map((photo:any)=>(
            <Link key={photo.id} href={`/photographer/${photo.documentId}`}>
            <div  className='relative aspect-[2500/900] my-3 w-full group'>
              <Image src={photo.cover.url} alt='no image' fill className='object-cover'/> 
              <div className='absolute inset-0 bg-black opacity-30 group-hover:opacity-50'/>
              <div className='absolute inset-0 flex items-center justify-center '>
                  <span className='flex items-center justify-center text-white text-2xl border-white border w-[300px] h-[50px]'>{photo.topic}</span>
                </div>
            </div>
            </Link>
          )
          )}
        </div>
      )
  }