'use client'
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import 'yet-another-react-lightbox/styles.css';
import dynamic from 'next/dynamic';



const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
    ssr: false,
  });
  
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
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 768); // 假设小于等于 768px 为小屏幕
      };
  
      checkScreenSize(); // 初始检查
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    const getOptimizedImageUrl = useCallback((src: string) => {
      if (isSmallScreen) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=1000&q=75`;
      }
      return src; // 大屏幕返回原始 URL
    }, [isSmallScreen]);
  
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
                  quality={75}
                  loading="lazy" 
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300 * (photo.height / photo.width)))}`}
                  placeholder="blur"
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
          slides={photos.map(photo => ({ 
            src: getOptimizedImageUrl(photo.src),
          }))}
        />
      </div>
    );
  }
  
  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
  
  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)