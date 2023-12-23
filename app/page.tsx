import Header from "@/components/header";
import Gallery from "@/components/gallery";
import { ArrowUpButton } from "@/components/floating_button";

const Home = () => {
	return (
		<main className="bg-zinc-100 dark:bg-zinc-800">
			<Header />
			<Gallery />
			<ArrowUpButton />
		</main>
	);
};

export default Home;
