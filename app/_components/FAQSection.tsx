'use client'

import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }


  const faqs = [
    {
      question: "Is the app safe for kids?",
      answer:
        "Yes, the app is designed with kid-friendly content and adheres to strict privacy standards to ensure a safe experience for children.",
    },
    {
      question: "Can I select my own flow of story?",
      answer:
        "Absolutely! you will be the one to decide the flow of the story, choose your own adventure and make the story yours.",
    },
    {
      question: "How much does the app cost?",
      answer:
        "The app is free for students under West Visayas State University , and for others it is 249 pesos per month.",
    },
    {
      question: "Is the app available on both Android and iOS?",
      answer:
        "For now, it is only available on web , but we are working on making it available on both Android and iOS soon. Thank you!",
    },
  ];

  return (
    <section className="bg-pink-100 py-16 px-6 lg:px-20 flex flex-col lg:flex-row gap-10 h-screen">
      {/* Left Image Section */}
      <div className="flex-shrink-0 w-full lg:w-1/3 mt-6">
        <Image
          src="/Images/question.gif"
          alt="FAQs Illustration"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* FAQs Section */}
      <div className="w-full lg:w-2/3 mt-12">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center lg:text-left">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-third rounded-lg shadow-lg"
            >
              {/* Question Section */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-medium text-black">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="text-primary text-2xl" />
                ) : (
                  <FiChevronDown className="text-primary text-2xl" />
                )}
              </button>

              {/* Answer Section with Smooth Transition */}
              <div
                className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
              >
                <p
                  className={`text-gray-700 text-base ${openIndex === index ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300 mb-4`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;