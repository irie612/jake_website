import React from "react";
import Image from "next/image";
import { header_img } from "@/components/image_loader";

const Header = () => {
	return (
		<div className="top-0 flex w-full justify-center">
			<Image
				src={header_img}
				alt="Header Image"
				className="lg:max-h-72 md:max-h-40 sm:max-h-32 px-2 md:px-4 aspect-[3.88/1] w-auto"
				priority={true}
			/>
		</div>
	);
};

export default Header;
