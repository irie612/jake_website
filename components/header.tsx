import React from "react";
import Image from "next/image";
import { header_img } from "@/components/image_loader";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex w-full justify-center">
			<Link href="/">
				<Image
					src={header_img}
					alt="Header Image"
					className="max-h-28 xl:max-h-72 lg:max-h-60 md:max-h-40 sm:max-h-32 px-2 md:px-4 aspect-[539/170] w-auto"
					priority={true}
				/>
			</Link>
		</header>
	);
};

export default Header;
