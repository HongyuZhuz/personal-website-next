'use client'
import { ColumnsPhotoAlbum } from "react-photo-album";

interface Photo {
  src: string;
  width: number;
  height: number;
}

export default function ClientPhotoAlbum({ photos }: { photos: Photo[] }) {
  return (
    <div className="w-full">
      {photos.length > 0 ? (
        <ColumnsPhotoAlbum
          photos={photos}
          
          spacing={10}
          columns={3}
    
        />
      ) : (
        <div className="text-center py-10">暂无照片</div>
      )}
    </div>
  );
}