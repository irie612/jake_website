import Image, { StaticImageData } from "next/image";
import {
	img_0,
	img_1,
	img_2,
	img_3,
	img_4,
	img_5,
	img_6,
	img_7,
	img_8,
	img_9,
	img_10,
	img_11,
	img_12,
	img_13,
	img_14,
	img_15,
	img_16,
	img_17,
	img_18,
	img_19,
	img_20,
	img_21,
	img_22,
	img_23,
	img_24,
	img_25,
	img_26,
	img_27,
	img_28,
	img_29,
} from "./image_loader";
	

type ImageData = {
	src: StaticImageData;
	alt: string;
};

const Gallery = () => {
	const images: ImageData[] = [
		{ src: img_0, alt: "Image 1" },
		{ src: img_1, alt: "Image 2" },
		{ src: img_2, alt: "Image 3" },
		{ src: img_3, alt: "Image 4" },
		{ src: img_4, alt: "Image 5" },
		{ src: img_5, alt: "Image 6" },
		{ src: img_6, alt: "Image 7" },
		{ src: img_7, alt: "Image 8" },
		{ src: img_8, alt: "Image 9" },
		{ src: img_9, alt: "Image 10" },
		{ src: img_10, alt: "Image 11" },
		{ src: img_11, alt: "Image 12" },
		{ src: img_12, alt: "Image 13" },
		{ src: img_13, alt: "Image 14" },
		{ src: img_14, alt: "Image 15" },
		{ src: img_15, alt: "Image 16" },
		{ src: img_16, alt: "Image 17" },
		{ src: img_17, alt: "Image 18" },
		{ src: img_18, alt: "Image 19" },
		{ src: img_19, alt: "Image 20" },
		{ src: img_20, alt: "Image 21" },
		{ src: img_21, alt: "Image 22" },
		{ src: img_22, alt: "Image 23" },
		{ src: img_23, alt: "Image 24" },
		{ src: img_24, alt: "Image 25" },
		{ src: img_25, alt: "Image 26" },
		{ src: img_26, alt: "Image 27" },
		{ src: img_27, alt: "Image 28" },
		{ src: img_28, alt: "Image 29" },
		{ src: img_29, alt: "Image 30" },
	];

	return (
		<div className="flex justify-center lg:pb-8 pb-4">
			<div className="grid grid-cols-3 gap-4 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
				{images.map((image, index) => (
					<div key={index}>
						<Image
							src={image.src}
							alt={image.alt}
							className="aspect-[6/9] object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
