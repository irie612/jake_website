"use client";
import React from "react";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaArrowUp, FaInstagram, FaPhone } from "react-icons/fa";

interface FloatingButtonProps {
	position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	icon: IconType;
	onClick: () => void;
	className: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
	position,
	icon: Icon,
	onClick,
	className,
}) => {
	const getPositionStyles = () => {
		switch (position) {
			case "top-left":
				return "top-8 left-8";
			case "top-right":
				return "top-8 right-8";
			case "bottom-left":
				return "bottom-8 left-8";
			case "bottom-right":
				return "bottom-8 right-8";
			default:
				return "";
		}
	};

	return (
		<button
			onClick={onClick}
			className={`fixed z-10 p-2 rounded-full dark:bg-ivory bg-maire shadow-lg hover:bg-gold active:bg-gold ${className} ${getPositionStyles()}`}
		>
			<Icon className="w-8 h-8 text-ivory dark:text-maire" />
		</button>
	);
};

const ArrowUpButton: React.FC = () => {
	const [hiddenState, setHiddenState] = useState("hidden");

	// useEffect that will unhide the button on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setHiddenState("animate-slide-in-bottom");
			} else {
				setHiddenState("animate-slide-out-bottom");
			}
		};

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<FloatingButton
			position="bottom-right"
			icon={FaArrowUp}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
			className={hiddenState}
		/>
	);
};

export { ArrowUpButton };
