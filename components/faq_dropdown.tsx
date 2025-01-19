"use client";
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
}

const FAQDropDown: React.FC<FAQProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="space-y-4 lg:tracking-[0.050em] tracking-[0.030em] 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm">
            {faqs.map((faq, index) => (
                <div key={index} className={`border-b pb-2 ${openIndex === index ? 'border-gold' : 'border-maire dark:border-ivory'}`}>
                    <button
                        onClick={() => toggleFAQ(index)}
                        className={`w-full text-left flex justify-between hover:text-gold active:text-gold transition-color duration-400 ease-ease ${openIndex === index ? 'text-gold' : 'text-maire dark:text-ivory'}`}
                    >
                        {faq.question}
                        {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 pl-4 dark:text-ivory">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQDropDown;
