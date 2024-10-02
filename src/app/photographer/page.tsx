
import { getTopEditPhotos } from '../lib/data';
import ClientPhotoAlbum from './getTopEditPhotos';

export default async function Page() {
    const topEditPhotosData = await getTopEditPhotos();
    
    const photos = topEditPhotosData.data.attributes.photos.data.map((photo: any) => ({
      src: photo.attributes.url,
      width: photo.attributes.width,
      height: photo.attributes.height
    }));
  
    return (
      <div className="min-h-screen bg-white"> {/* 新增的白色背景容器 */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 mt-10">我的顶级编辑照片</h1>
          <ClientPhotoAlbum photos={photos} />
        </div>
      </div>
    );
  }
