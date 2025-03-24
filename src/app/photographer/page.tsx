import dynamic from 'next/dynamic';
import { getTopEditPhotos } from '../lib/data';
// import { MyHobbyPage } from '../ui/hobbie';

const MasonryGallery = dynamic(() => import('./masonry'), { ssr: false });

export default async function Page() {
    const topEditPhotosData = await getTopEditPhotos();
    const photos = topEditPhotosData[0].photo.map(
      (photo:{id:string,url:string,width:string,height:string}
      ) => ({
      src: photo.url,
      width: photo.width,
      height: photo.height,
      key: photo.id
    }));
    
    /*const photos = topEditPhotosData.data.attributes.photos.data.map((photo: { attributes: { url: string; width: number; height: number; }; id: string | number; }) => ({
      src: photo.attributes.url,
      width: photo.attributes.width,
      height: photo.attributes.height,
      key: photo.id
    }));*/

    return (
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-6 mt-20 text-left border-l-4 border-red-500 pl-4 text-red-500">Photographic Explorations</h1>
          <MasonryGallery photos={photos} />
        </div>
        {/*<MyHobbyPage/>*/}
      </div>
    );
  }