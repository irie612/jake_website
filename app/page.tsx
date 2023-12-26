import Header from "@/components/header";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import { ArrowUpButton } from "@/components/floating_button";
import { DmSerifDisplay400Italic } from "@/app/layout";

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
				<p>Tel: <em className={DmSerifDisplay400Italic.className}>02077348180</em></p>
				<p>Email: <a href="mailto:jcordal@icloud.com"><em className={DmSerifDisplay400Italic.className}>jcordal@icloud.com</em></a></p>
				<p>Instagram: <em className={DmSerifDisplay400Italic.className}>@jakecordal</em></p>
				<br />
			</div>
			<Gallery />
			<ArrowUpButton />
		</main>
	);
};

export default Home;
