'use client'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
type ReactImageGalleryItem = {
  original: string; // 原图 URL
  thumbnail?: string; // 缩略图 URL，非必需
  description?: string; // 描述文本，非必需
};

export const ImageGalleryClient = ({ images }:{images:ReactImageGalleryItem[]}) => {
    return (
      <div className="pb-10 md:pb-20 mt-5 md:px-10 text-red-500">
        <ImageGallery items={images} showThumbnails={false} lazyLoad={true} showPlayButton={false} />
      </div>
    );
  };