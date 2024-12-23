import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactInfo from "@/components/contact_info";
import { ArrowUpButton } from "@/components/floating_button";
import { GoogleTagManager } from '@next/third-parties/google'


const title: string = "Jake Cordal | Tattoo Artist | Soho, London"
const description: string = "Jake Cordal can be found working at the world famous Frith Street Tattoo in Soho, Central London."

const metadata: Metadata = {
	title: {
		default: title,
		template: "Jake Cordal | Tattoo %s | Soho, London",
	},
	description: description,
	keywords: "Jake Cordal, tattoo artist, Soho tattoo, Frith Street Tattoo, London tattoos, American traditional tattoos, black and grey tattoos, Borneo tribal tattoos, tattoo flash sheets, vintage tattoo designs, traditional tattoo art, pin-up tattoos, sacred heart tattoos, Japanese dragon tattoos, skull tattoos, eagle tattoos, geisha tattoos, sailor jerry tattoos, bold tattoo designs, custom tattoo work",
	robots: {
		index: true,
		follow: true,
	},
	metadataBase: new URL("https://jakecordaltattoo.co.uk"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: title,
		description: description,
		url: "/",
		locale: "en_GB",
		type: "website",
		siteName: "Jake Cordal Tattoo"
	},
	twitter: {
		title: title,
		description: description,
		card: "summary_large_image",
	}
};
  
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="G-MQT9Z1PNLC"/>
			<body className="h-full flex flex-col lg:tracking-[0.050em] tracking-[0.030em] bg-ivory dark:bg-maire dark:text-ivory 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm">
				<Header />
				<Navbar />
				<ContactInfo />
				<div className="flex grow shrink-0 justify-center lg:pb-8 pb-4" >
					{children}
				</div>
				<ArrowUpButton />
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
export { metadata };
