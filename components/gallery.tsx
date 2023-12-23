import Image, { StaticImageData } from 'next/image';
import { img_0, img_1, img_2, img_3, img_4, img_5, 
    img_6, img_7, img_8, img_9, img_10, img_11, 
    img_12, img_13, img_14, img_15, img_16, img_17, 
    img_18} from './image_loader';

type ImageData = {
    src: StaticImageData;
    alt: string;
};

const Gallery = () => {
    const images: ImageData[] = [
        { src: img_0, alt: 'Image 1' },
        { src: img_1, alt: 'Image 2' },
        { src: img_2, alt: 'Image 3' },
        { src: img_3, alt: 'Image 4' },
        { src: img_4, alt: 'Image 5' },
        { src: img_5, alt: 'Image 6' },
        { src: img_6, alt: 'Image 7' },
        { src: img_7, alt: 'Image 8' },
        { src: img_8, alt: 'Image 9' },
        { src: img_9, alt: 'Image 10' },
        { src: img_10, alt: 'Image 11' },
        { src: img_11, alt: 'Image 12' },
        { src: img_12, alt: 'Image 13' },
        { src: img_13, alt: 'Image 14' },
        { src: img_14, alt: 'Image 15' },
        { src: img_15, alt: 'Image 16' },
        { src: img_16, alt: 'Image 17' },
        { src: img_17, alt: 'Image 18' },
        { src: img_18, alt: 'Image 19' },
    ];

    return (
        <div className="flex justify-center -mt-8 lg:mt-40 md:mt-[125px] pb-4">
            <div className="grid grid-cols-3 gap-4 lg:w-9/12 md:w-10/12 w-11/12">
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image.src} alt={image.alt} className="aspect-[6/9] object-contain"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
