import Header from "@/components/header";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import { ArrowUpButton } from "@/components/floating_button";
import { DM_Serif_Display } from "next/font/google";

const dm_serif_display_400_italic = DM_Serif_Display({ weight: ["400"], style: "italic", subsets: ["latin"] });

const Home = () => {
	return (
		<main className="">
			<Header />
			<Navbar />
			<div className="text-center">
				<br />
				<h1>Jake Cordal</h1>
				<p>Frith Street Tattoo</p>
				<p>Soho, London</p>
				<br />
				<p>Tel: <em className={dm_serif_display_400_italic.className}>02077348180</em></p>
				<p>Email: <a href="mailto:jcordal@icloud.com"><em className={dm_serif_display_400_italic.className}>jcordal@icloud.com</em></a></p>
				<p>Instagram: <em className={dm_serif_display_400_italic.className}>@jakecordal</em></p>
				<br />
			</div>
			<Gallery />
			<ArrowUpButton />
		</main>
	);
};

export default Home;
