'use client';

import { MasonryPhotoAlbum } from "react-photo-album";
import { useState, useEffect } from "react";

interface Photo {
  src: string;
  width: number;
  height: number;
}

export default function ClientPhotoAlbum({ photos }: { photos: Photo[] }) {
    const [columns, setColumns] = useState(3);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setColumns(getColumns(width));
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const getColumns = (width: number) => {
      if (width < 640) return 1;
      if (width < 768) return 2;
      return 3;
    };
  
    return (
      <div className="">
        {photos.length > 0 ? (
          <MasonryPhotoAlbum
            photos={photos}
          />
        ) : (
          <div className="text-center py-10">暂无照片</div>
        )}
      </div>
    );
  }