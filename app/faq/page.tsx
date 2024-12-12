import { Metadata } from "next";

const metadata: Metadata = {
	title: "FAQ",
	metadataBase: new URL("https://jakecordaltattoo.co.uk/faq"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		url: "/",
	},
}

const FaqPage = () => {
	return (
		<></>
	);
};

export default FaqPage;
export { metadata };