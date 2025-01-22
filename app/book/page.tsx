import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/booking_form";

const metadata: Metadata = {
    title: "Booking Form",
    metadataBase: new URL("https://jakecordaltattoo.co.uk/book"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        url: "/",
    },
};

const BookingFormPage = () => {
    return (
        <div className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 float-left px-4 py-4">
			<h1 className="font-bold mb-6 text-gold text-center">Booking Form</h1>
            <p className="pb-8">Please fill out the booking form below to help me understand your design preferences and arrange an appointment. Your information will help me to create the best tattoo for you.</p>
			<BookingForm />
            <p>You can find me working at Frith Street Tattoo in Soho, Central London. Just a short walk from both Tottenham Court Road station and Leicester Square station. For any other queries please call the shop, or view my <Link href="/faq" className="nav underline">FAQ section</Link>.</p>
        </div>
    );
};

export default BookingFormPage;
export { metadata };