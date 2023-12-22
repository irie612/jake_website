import Header from "@/components/header";
import Gallery from "@/components/gallery";
import { ArrowUpButton } from "@/components/floating_button";



/* TODO: implement a floating to top button that shows on scroll */

const Home = () => {
	return (
		<main className="bg-white dark:bg-zinc-800">
			<Header />
			<Gallery />
			<ArrowUpButton />
		</main>
	);
};

export default Home;
