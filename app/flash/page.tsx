import { FlashGallery } from "@/components/gallery";
import { Metadata } from "next";

const metadata: Metadata = {
	title: "Flash",
}

const FlashPage = () => {
	return (
		<FlashGallery />
	);
};

export default FlashPage;
export { metadata };