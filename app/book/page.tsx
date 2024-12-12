import { Metadata } from "next";

const metadata: Metadata = {
	title: "Booking Form",
	metadataBase: new URL("https://jakecordaltattoo.co.uk/book"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		url: "/",
	},
}

const BookingFormPage = () => {
	return (
		<></>
	);
};

export default BookingFormPage;
export { metadata };