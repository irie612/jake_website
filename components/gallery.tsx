import Image, { StaticImageData } from "next/image";
import {
	flsh_img_0,
	tat_img_0,
	tat_img_1,
	tat_img_2,
	tat_img_3,
	tat_img_4,
	tat_img_5,
	tat_img_6,
	tat_img_7,
	tat_img_8,
	tat_img_9,
	tat_img_10,
	tat_img_11,
	tat_img_12,
	tat_img_13,
	tat_img_14,
	tat_img_15,
	tat_img_16,
	tat_img_17,
	tat_img_18,
	tat_img_19,
	tat_img_20,
	tat_img_21,
	tat_img_22,
	tat_img_23,
	tat_img_24,
	tat_img_25,
	tat_img_26,
	tat_img_27,
	tat_img_28,
	tat_img_29,
} from "./image_loader";
	
type ImageData = {
	src: StaticImageData;
	alt: string;
};

//TODO: add proper alt text
const tat_images: ImageData[] = [
	{ src: tat_img_0, alt: "Tattoo Image 1" },
	{ src: tat_img_1, alt: "Tattoo Image 2" },
	{ src: tat_img_2, alt: "Tattoo Image 3" },
	{ src: tat_img_3, alt: "Tattoo Image 4" },
	{ src: tat_img_4, alt: "Tattoo Image 5" },
	{ src: tat_img_5, alt: "Tattoo Image 6" },
	{ src: tat_img_6, alt: "Tattoo Image 7" },
	{ src: tat_img_7, alt: "Tattoo Image 8" },
	{ src: tat_img_8, alt: "Tattoo Image 9" },
	{ src: tat_img_9, alt: "Tattoo Image 10" },
	{ src: tat_img_10, alt: "Tattoo Image 11" },
	{ src: tat_img_11, alt: "Tattoo Image 12" },
	{ src: tat_img_12, alt: "Tattoo Image 13" },
	{ src: tat_img_13, alt: "Tattoo Image 14" },
	{ src: tat_img_14, alt: "Tattoo Image 15" },
	{ src: tat_img_15, alt: "Tattoo Image 16" },
	{ src: tat_img_16, alt: "Tattoo Image 17" },
	{ src: tat_img_17, alt: "Tattoo Image 18" },
	{ src: tat_img_18, alt: "Tattoo Image 19" },
	{ src: tat_img_19, alt: "Tattoo Image 20" },
	{ src: tat_img_20, alt: "Tattoo Image 21" },
	{ src: tat_img_21, alt: "Tattoo Image 22" },
	{ src: tat_img_22, alt: "Tattoo Image 23" },
	{ src: tat_img_23, alt: "Tattoo Image 24" },
	{ src: tat_img_24, alt: "Tattoo Image 25" },
	{ src: tat_img_25, alt: "Tattoo Image 26" },
	{ src: tat_img_26, alt: "Tattoo Image 27" },
	{ src: tat_img_27, alt: "Tattoo Image 28" },
	{ src: tat_img_28, alt: "Tattoo Image 29" },
	{ src: tat_img_29, alt: "Tattoo Image 30" },
];

const flsh_images: ImageData[] = [
	{ src: flsh_img_0,  alt: "Flash Image 1" },
]

const TattooGallery = () => {
	return (
		<div className="flex justify-center lg:pb-8 pb-4">
			<div className="grid grid-cols-3 gap-4 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
				{tat_images.map((image, index) => (
					<div key={index}>
						<Image
							src={image.src}
							alt={image.alt}
							className="aspect-[6/9] object-contain"
							placeholder="blur"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

const FlashGallery = () => {
	return (
		<div className="flex justify-center lg:pb-8 pb-4">
			<div className="grid grid-cols-2 gap-4 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
				{flsh_images.map((image, index) => (
					<div key={index}>
						<Image
							src={image.src}
							alt={image.alt}
							className="aspect-[6/9] object-contain"
							placeholder="blur"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export { TattooGallery, FlashGallery };
