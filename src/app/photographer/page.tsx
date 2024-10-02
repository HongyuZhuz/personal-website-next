
import { getTopEditPhotos } from '../lib/data';
import MasonryGallery from './masonry';




export default async function Page() {
    const topEditPhotosData = await getTopEditPhotos();
    
    const photos = topEditPhotosData.data.attributes.photos.data.map((photo: any) => ({
      src: photo.attributes.url,
      width: photo.attributes.width,
      height: photo.attributes.height,
      key: photo.id
    }));
    console.log(photos)
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6 mt-12 text-left border-l-4 border-gray-800 pl-4">Photographic Explorations</h1>
          <MasonryGallery photos={photos} />
        </div>
      </div>
    );
  }
