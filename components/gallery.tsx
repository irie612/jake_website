import Image, { StaticImageData } from "next/image";
import {
	flsh_img_0,
	flsh_img_1,
	flsh_img_2,
	flsh_img_3,
	flsh_img_4,
	flsh_img_5,
	flsh_img_6,
	flsh_img_7,
	flsh_img_8,
	flsh_img_9,
	flsh_img_10,
	flsh_img_11,
	flsh_img_12,
	flsh_img_13,
	flsh_img_14,
	flsh_img_15,
	flsh_img_16,
	flsh_img_17,
	flsh_img_18,
	flsh_img_19,
	flsh_img_20,
	flsh_img_21,
	flsh_img_22,
	flsh_img_23,
	flsh_img_24,
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
	tat_img_30,
	tat_img_31,
	tat_img_32,
	tat_img_33,
	tat_img_34,
	tat_img_35,
	tat_img_36,
	tat_img_37,
	tat_img_38,
	tat_img_39,
	tat_img_40,
	tat_img_41,
	tat_img_42,
	tat_img_43,
	tat_img_44,
} from "./image_loader";

type ImageData = {
	src: StaticImageData;
	alt: string;
};

const TattooGallery: React.FC = () => {
	const tat_images: ImageData[] = [
		{ src: tat_img_0, alt: "American traditional spread eagle chest tattoo with blue clouds and red sun" },
		{ src: tat_img_1, alt: "Black and grey American traditional and black work Borneo tribal feet tattoos of a grim reaper with flames and a Japanese mask with lightening" },
		{ src: tat_img_2, alt: "Full colour American traditional ship stomach tattoo with green Japanese waves and blue clouds" },
		{ src: tat_img_3, alt: "American traditional orange tiger head tattoo with green eyes" },
		{ src: tat_img_4, alt: "American traditional colour hand tattoos of a red swallow with flowers and a horse head with flowers" },
		{ src: tat_img_5, alt: "Colour American traditional ship tattoo with green waves a red burst and blue clouds" },
		{ src: tat_img_6, alt: "American traditional cowgirl lady head tattoo with a red scarf bandana and a cowboy hat" },
		{ src: tat_img_7, alt: "American traditional red swallow wrist tattoo with yellow flower and cherub with red flower" },
		{ src: tat_img_8, alt: "American traditional sailor Jerry geisha tattoo with purple kimono" },
		{ src: tat_img_9, alt: "American traditional red sacred heart tattoo with green thorns and blood drops" },
		{ src: tat_img_10, alt: "Pair of American traditional colour butterfly pin up girls on the shins" },
		{ src: tat_img_11, alt: "American traditional Bob Robert's flash tattoo of a forwards crawling tiger" },
		{ src: tat_img_12, alt: "Fine line single needle black and grey single stem rose tattoo on the hand"},
		{ src: tat_img_13, alt: "Pair of black and grey American traditional scorpion tattoos on the thighs with red blood drops" },
		{ src: tat_img_14, alt: "Bold American traditional cap Coleman flash tattoo of a butterfly lady head in full colour" },
		{ src: tat_img_15, alt: "Black and grey Bryony botanical plant and flower tattoo" },
		{ src: tat_img_16, alt: "Pair of black and grey wrist tattoos of a butterfly caught in a web and a fine line sacred heart" },
		{ src: tat_img_17, alt: "Black and grey American traditional picture machine flash tattoo of a snake wrapped around an eagle" },
		{ src: tat_img_18, alt: "American traditional red sacred heart tattoo with green thorns blue Japanese flames and blue blood drops" },
		{ src: tat_img_19, alt: "90s Borneo tribal black work of spiral on ankle bone" },
		{ src: tat_img_20, alt: "American traditional swooping eagle tattoo with blue Tibetan clouds and a red burst" },
		{ src: tat_img_21, alt: "Blonde American traditional pin up girl in red underwear" },
		{ src: tat_img_22, alt: "Fine line black and grey scorpion with American traditional colour rose tattoo on the stomach" },
		{ src: tat_img_23, alt: "Borneo black work tribal scorpion tattoo on the thigh" },
		{ src: tat_img_24, alt: "American traditional black and red butterfly tattoo with flowers" },
		{ src: tat_img_25, alt: "American traditional panther tattoo crawling forwards through leaves with a red burst behind" },
		{ src: tat_img_26, alt: "American traditional swallow and love heart tattoo with a banner and flower" },
		{ src: tat_img_27, alt: "Bold American traditional full colour patchwork sleeve tattoo of a ship eagle rose spiderweb heart and dagger butterfly and flowers" },
		{ src: tat_img_28, alt: "Simple American traditional picture machine flash tattoo of a red rose bud on the hand" },
		{ src: tat_img_29, alt: "Bold American traditional full colour patchwork sleeve tattoo of a ship eagle rose spiderweb heart and dagger butterfly and flowers" },
		{ src: tat_img_30, alt: "American traditional black and grey rose of no man's land nurse tattoo on the thigh with flowers and a cross" },
		{ src: tat_img_31, alt: "American traditional sacred heart tattoo with a red heart flowers a dagger and blue blood drops" },
		{ src: tat_img_32, alt: "American traditional sailor Jerry skull and butterfly hand tattoo with traditional pike style lettering on the fingers reading love" },
		{ src: tat_img_33, alt: "American traditional black and grey Spaulding and rogers flash tattoo of a skull and spiderweb" },
		{ src: tat_img_34, alt: "American traditional black and grey rose and dagger tattoo on the forearm" },
		{ src: tat_img_35, alt: "Fine line American traditional sailor Jerry wolf head" },
		{ src: tat_img_36, alt: "Black and grey Japanese phoenix half sleeve tattoo with flames" },
		{ src: tat_img_37, alt: "American traditional Joseph Hartley tattoo flash design of a cross with red and yellow roses" },
		{ src: tat_img_38, alt: "Fine line single needle skull gap filler tattoo with Tibetan style clouds on the back of the neck" },
		{ src: tat_img_39, alt: "American traditional black and grey Sailor Jerry tattoo flash design of a woman riding a flying eagle" },
		{ src: tat_img_40, alt: "American traditonal Dee Dee Ramone tattoo of a skull with playing cards reading too tough to die" },
		{ src: tat_img_41, alt: "American traditional black and grey flash tattoo of a rose" },
		{ src: tat_img_42, alt: "American traditonal black and grey National tattoo supply flash design of a skull a snake and a playing card" },
		{ src: tat_img_43, alt: "Borneo tribal blackwork tattoo filler on shoulder" },
		{ src: tat_img_44, alt: "Traditional Japanese Hannya mask tattoo design with red and yellow flames" },
	];

	return (
		<div className="grid grid-cols-3 gap-4 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12" data-nosnippet>
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
	);
};

const FlashGallery: React.FC = () => {
	const flsh_images: ImageData[] = [
		{ src: flsh_img_0, alt: "Bold American traditional tattoo flash sheet of a black panther, a British bulldog, a memorial tattoo with black cross, red heart, and banner, a skull and dagger, and a rest in peace memorial tattoo with a cross, love hearts, and a banner" },
		{ src: flsh_img_1, alt: "Bold American traditional full colour tattoo flash sheet of a Bob Shaw butterfly and rose, a picture machine mouse, a picture machine crawling panther with a snake wrapped around it, a Spaulding and Rogers skull with 70s style bubble and lightening background, a winged cherry, and a winged heart" },
		{ src: flsh_img_2, alt: "Bold American traditional full colour Spaulding and Rogers and picture machine tattoo flash sheet of a smoking skull wearing a top hat, a Rosie Camanga pair of lips, a nude reclining pin-up girl, a skull, snake, and dagger, a silhouette of a woman's face smoking with a skull inside, and an eagle perching on a branch with a sunset" },
		{ src: flsh_img_3, alt: "Bold American traditional full colour tattoo flash sheet of a gypsy lady head with a head scarf, a snake and skull, a Bob Roberts spider in a web, a Spaulding and Rogers lady head, and a simple Sailor Jerry butterfly" },
		{ src: flsh_img_4, alt: "Bold American traditional tattoo flash sheet of a flaming Ed Hardy butterfly, a winged WW1 pilot or biker skull, a flying eagle, an eye swallow Ed Hardy design, and an Ed Hardy butterfly" },
		{ src: flsh_img_5, alt: "Bold American traditional tattoo flash sheet of a Spaulding and Rogers hannya, a green dragon head with purple Tibetan clouds, a red picture machine rose, a skull and web, and a red swallow with blue rose" },
		{ src: flsh_img_6, alt: "Bold American traditional vintage style tattoo flash sheet of a pin-up girl with snake, a pin-up red devil girl standing on a skull, and a geisha lady head with a dragon and flames" },
		{ src: flsh_img_7, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_8, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_9, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_10, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_11, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_12, alt: "90s Borneo tribal black work tattoo flash sheet" },
		{ src: flsh_img_13, alt: "" },
		{ src: flsh_img_14, alt: "" },
		{ src: flsh_img_15, alt: "" },
		{ src: flsh_img_16, alt: "" },
		{ src: flsh_img_17, alt: "" },
		{ src: flsh_img_18, alt: "" },
		{ src: flsh_img_19, alt: "Bold American traditional vintage style tattoo flash sheet of a Bob Roberts Spanish lady holding a fan, a flaming heart with an arrow through it, a Bob Roberts crawling tiger, a grim reaper holding a noose with flames, and a Spaulding and Roger's star" },
		{ src: flsh_img_20, alt: "Bold American traditional vintage style tattoo flash sheet of a hula pin-up girl with a palm tree and a sunset, a forwards tiger crawling through bushes, and a pinky yin pin-up girl undressing" },
		{ src: flsh_img_21, alt: "Bold American traditional vintage style tattoo flash sheet of a spread eagle with blue clouds, a mountain, and a red sunset" },
		{ src: flsh_img_22, alt: "Bold American traditional vintage style tattoo flash sheet of a Sailor Jerry peacock pin-up girl" },
		{ src: flsh_img_23, alt: "Bold American traditional vintage style tattoo flash sheet of a Sailor Jerry tiger head biting a Japanese dragon surrounded by flames and blue clouds" },
		{ src: flsh_img_24, alt: "Bold American traditional vintage style tattoo flash sheet with Japanese background of cowgirl pin-up, a matador pin-up girl, a girl head with a Japanese dragon in her hair, a pin-up geisha girl with a dragon wrapped around her, and a skull and snake with flames, blue Japanese water, and purple Tibetan clouds" },
	];

	return (
		<div className="grid grid-cols-2 gap-4 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12" data-nosnippet>
			{flsh_images.slice(1).map((image, index) => (
				<div key={index}>
					<Image
						src={image.src}
						alt={image.alt}
						className="object-contain"
						placeholder="blur"
					/>
				</div>
			))}
			<div key={0} className="row-span-2 col-span-2">
				<Image
					src={flsh_images[0].src}
					alt={flsh_images[0].alt}
					className="aspect-[3/4] object-contain"
					placeholder="blur"
				/>
			</div>
		</div>
	);
};

export { TattooGallery, FlashGallery };
