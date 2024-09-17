import { FlashGallery } from "@/components/gallery";
import { Metadata } from "next";

const metadata: Metadata = {
	title: "Flash",
	metadataBase: new URL("https://jakecordaltattoo.co.uk/flash"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		url: "/",
	},
}

const FlashPage = () => {
	return (
		<FlashGallery />
	);
};

export default FlashPage;
export { metadata };