"use client";
import { useState } from 'react';

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
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-2">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left text-lg font-medium text-blue-600 hover:underline"
                    >
                        {faq.question}
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 pl-4 text-gray-700">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQDropDown;
