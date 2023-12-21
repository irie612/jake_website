import React from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Header from "public/temp_header.png";

const Navbar = () => {
	//maybe use state to change whether contact or portfolio is active depending on scroll position

	return (
		<nav className="top-0 static lg:fixed md:fixed flex justify-center w-full z-10 ease-in duration-300 bg-white dark:bg-zinc-800">
			<ul className="flex items-center">
				<li className="lg:text-6xl lg:px-16 lg:py-12 md:text-5xl md:px-12 md:py-8 px-1 text-3xl">
					<a
						href="https://instagram.com/jakecordal"
						target="_blank"
					>
						<FaInstagram className="dark:text-white"/>
					</a>
				</li>
				<li className="">
					<Image
						src={Header}
						alt="Header Image"
						className="lg:max-h-52 md:max-h-40 sm:max-h-32 "
					/>
				</li>
				<li className="lg:text-6xl lg:px-16 lg:py-12 md:text-5xl md:px-12 md:py-8 px-1 text-3xl">
					<a href="tel:+442077348180">
						<FaPhone className="dark:text-white"/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
