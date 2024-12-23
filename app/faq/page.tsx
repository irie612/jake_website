import FAQDropDown from "@/components/faq_dropdown";
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

const FAQPage = () => {
	const faqData = [
		{
			question: 'What types of tattoos do you specialize in?',
			answer:
				"I focus on American Traditional, Black and Grey, Tribal, or Fineline tattoos, whether they're custom or picked from flash. I am open to working in any style so don't hesitate to contact me.",
		},
		{
			question: 'Where is your studio located?',
			answer:
				'I am based at Frith Street Tattoo in Soho, Central London. In between Oxford Street, Chinatown, Piccadilly Circus, and Tottenham Court Road.',
		},
		{
			question: 'How can I schedule a tattoo appointment?',
			answer:
				"To book an appointment, please visit our studio in Central London or fill out the contact form on this website. I'm more than happy to discuss your tattoo ideas and find a time that works for you.",
		},
		{
			question: 'Do you provide consultations for tattoos?',
			answer:
				'Absolutely! I offer consultations to discuss design ideas, answer your questions, and ensure we create a custom tattoo that meets your expectations.',
		},
		{
			question: 'Are your tattoos affordable?',
			answer:
				'I am always happy to work with a budget and create a tattoo that will work for you.',
		},
		{
			question: 'Can you create custom tattoo designs?',
			answer:
				"Yes, I pride myself on delivering custom tattoos. Whether you're seeking a detailed floral design or an American traditional piece, I'm here to turn your ideas into reality.",
		},
		{
			question: 'Do you travel?',
			answer:
				'Yes, I regularly participate in tattoo conventions across the country, and do guest spots. Keep an eye on my Instagram for any travel plans.',
		},
		{
			question: 'How do I look after my tattoo?',
			answer:
				'Following your session, we will provide you with detailed aftercare instructions, which generally include maintaining cleanliness. It is important to stick to our instructions, and if you have any issues, contact us rather than seeking advice online.',
		},
	];

	return (
		<div className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 float-left px-4 py-8">
			<h1 className="font-bold mb-6 text-gold text-center">FAQ</h1>
			<FAQDropDown faqs={faqData} />
		</div>
	);
};

export default FAQPage;
export { metadata };
