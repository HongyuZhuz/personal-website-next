'use client'
import { useState } from 'react';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Photo {
  src: string;
  key: number;
  width: number;
  height: number;
}

interface MasonryProps {
  photos: Photo[];
}

export default function MasonryGallery({ photos }: MasonryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="photo-album-container">
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry>
          {photos.map((photo, index) => (
            <div key={photo.key} className="mb-4">
              <Image
                src={photo.src}
                alt="摄影作品"
                width={300}
                height={300 * (photo.height / photo.width)}
                className="w-full h-auto p-2 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={photos.map(photo => ({ src: photo.src }))}
      />
    </div>
  );
}
