import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";

/* TODO: implement a floating to top button that shows on scroll */

const Home = () => {
	return (
		<main className="bg-white dark:bg-zinc-800">
			<Navbar />
			<Gallery />
		</main>
	);
};

export default Home;
