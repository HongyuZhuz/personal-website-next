'use client'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const ImageGalleryClient = ({ images }:{images:any}) => {
    return (
      <div className="pb-10 md:pb-20 mt-5 md:px-10 text-red-500">
        <ImageGallery items={images} showThumbnails={false} lazyLoad={true} showPlayButton={false} />
      </div>
    );
  };