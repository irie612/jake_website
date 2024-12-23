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
        <div>
            <h1>Booking Form</h1>
            <p>Please fill out the booking form below to help me understand your design preferences and arrange an appointment. Your information will help me to create the best tattoo for you.</p>
			<BookingForm />
            <p>You can find me working at Frith Street Tattoo in Soho, Central London. Just a short walk from both Tottenham Court Road station and Leicester Square station. For any other queries please call the shop, or view my <Link href="/faq">FAQ section</Link>.</p>
        </div>
    );
};

export default BookingFormPage;
export { metadata };