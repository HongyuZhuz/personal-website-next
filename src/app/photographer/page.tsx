import { getTopEditPhotos } from '../lib/data';
import CoverPhoto from './coverPhoto';
export const revalidate = 10;


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

