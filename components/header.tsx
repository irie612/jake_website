import React from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";
import Image from "next/image";
import HeaderImg from "public/header.png";

// TODO: change header and gallery positioning so that gallery always starts from 135px before the end of the header image no matter the screen size
// TODO: make instagram and phone icons dissapear from header and appear in floating button when screen size is small
// TODO: make header take up most of screen width when screen size is small

const Header = () => {
	return (
		<nav className="top-0 flex w-full justify-center">
			{/* <ul className="flex justify-between w-full z-10">
				<li className="lg:text-6xl lg:pl-8 lg:py-12 md:text-5xl md:pl-8 md:py-8 pt- pl-5 text-3xl">
					<a href="https://instagram.com/jakecordal" target="_blank">
						<FaInstagram className="dark:text-white" />
					</a>
				</li>
				<li className=""> */}
					<Image
						src={HeaderImg}
						alt="Header Image"
						className="lg:max-h-72 md:max-h-40 sm:max-h-32 px-2 md:px-4 aspect-[3.88/1] w-auto"
					/>
				{/* </li>
				<li className="lg:text-6xl lg:pr-8 lg:py-12 md:text-5xl md:pr-8 md:py-8 pr-5 text-3xl">
					<a href="tel:+442077348180">
						<FaPhone className="dark:text-white" />
					</a>
				</li>
			</ul> */}
		</nav>
	);
};

export default Header;
