import React from "react";
import Link from "next/link";
import { FaInstagram, FaPhone } from "react-icons/fa";

const Navbar = () => {
	//maybe use state to change whether contact or portfolio is active depending on scroll position

	return (
		<nav className="fixed flex w-full z-10 ease-in duration-300 bg-slate-400 dark:bg-slate-900">
			<div className="max-w[1240px] m-auto flex justify-between items-center p-4 dark:text-white">
				<ul className="flex">
					<li className="p-4 text-3xl">
						<a
							href="https://instagram.com/jakecordal"
							target="_blank"
						>
							<FaInstagram size="30px"/>
						</a>
					</li>
					<li className="p-4 text-3xl">
						<a href="tel:+442077348180">
							<FaPhone />
						</a>
					</li>
				</ul>
			</div>
			# TODO: change this to remove portfolio button, move top to a floating button that shows on scroll
			<div className="max-w[1240px] m-auto flex justify-between items-center p-4 dark:text-white">
				<ul className="flex">
					<li className="p-4">
						<Link href="/#portfolio">Portfolio</Link>
					</li>
					<li className="p-4">
						<Link href="/#contact">Top</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
