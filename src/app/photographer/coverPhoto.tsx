
import Image from 'next/image';
import Link from 'next/link';

export default function CoverPhoto ({topEditPhotos}:CoverPhotoProps) {
    return(
      <div>
        {topEditPhotos.map((photo:Photo)=>(
          <Link key={photo.id} href={`/photographer/${photo.documentId}`}>
          <div  className='relative aspect-[9/12] md:aspect-[2500/900] my-3 w-full group'>
            <Image src={photo.cover.url} alt='no image' fill className='object-cover'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300 * (900/2500)))}`}
            placeholder="blur"/> 
            <div className='absolute inset-0 bg-black opacity-30 group-hover:opacity-50'/>
            <div className='absolute inset-0 flex items-center justify-center '>
                <span className='flex items-center justify-center text-white text-l border-white border-[0.5px] w-[250px] h-[50px]'>{photo.topic}</span>
              </div>
          </div>
          </Link>
        )
        )}
      </div>
    )
}

interface Photo {
  id: number | string;
  documentId: string;
  topic: string;
  cover: {
    url: string;
    formats:{large:{url:string}}
  };
}

interface CoverPhotoProps {
  topEditPhotos: Photo[];
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