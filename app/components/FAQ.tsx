"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is a Musical Devotional?",
    answer:
      "A musical devotional is a gathering where we come together to explore spiritual and philosophical writings through reading and musical expression. It's not only focused on the Baha'i faith but also welcomes and celebrates other belief systems and philosophical viewpoints. It's a cozy, friendly space where we celebrate our shared humanity through words and music, without any preaching or proselytizing.",
  },
  {
    question: "Who can attend a Musical Devotional?",
    answer:
      "Absolutely everyone! Whether you’re coming from a specific faith perspective, hold secular viewpoints, or are simply curious, you’re warmly welcome. There is no prerequisite belief or practice needed to join us. It's a judgment-free, inclusive space where all can explore and express their spirituality or philosophical perspectives freely.",
  },
  {
    question: "Do I have to participate or can I just listen?",
    answer:
      "Your level of participation is entirely up to you! If you wish to share a piece of writing, prayer, or music, you're most welcome to. If you prefer to simply listen and absorb, that’s completely fine too. The Musical Devotional is meant to be a comfortable space where you can engage in a way that feels right for you.",
  },
  {
    question: "Are there any costs involved?",
    answer:
      "No, there are no costs to attend a Musical Devotional. It’s entirely free. Our gatherings are simple and informal, and we want them to be accessible to everyone, regardless of financial means.",
  },
  {
    question: "How do I know the location of the next event?",
    answer:
      "Our Musical Devotionals are currently held in Oakland, in the Bay Area. To get the exact location of the next event, please get in touch with us through the contact information provided on our website. We'd be thrilled to welcome you!",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <section className="mb-40 mt-40 w-full max-w-2xl text-start">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Frequently Asked Questions
      </h2>
      <dl className="max-w-xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex w-full max-w-xl flex-col rounded-md border border-black p-4 text-left shadow-sm"
          >
            <dt
              className="flex w-full cursor-pointer items-center justify-between"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <span className="font-medium">{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </dt>
            {expandedIndex === index && (
              <dd className="mt-2 text-black">{faq.answer}</dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
