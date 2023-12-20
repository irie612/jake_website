import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";

const Home = () => {
	return (
		<main className="bg-white dark:bg-slate-800">
			<Banner />
			<Navbar />
			<Gallery />
		</main>
	);
};

export default Home;
