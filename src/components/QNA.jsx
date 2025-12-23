
import { useState } from 'react';

export default function QNA() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why Work With Me?",
      answer: [
        "I focus on business results, not only visuals",
        "Every design decision is clearly explained",
        "Clean communication & on-time delivery",
        "You work directly with the designer (no middlemen)",
        "I treat every project like my own business",
        "Honesty > fake social proof"
      ],
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      question: "Do you also develop the website?",
      answer: "Currently I provide design only, in developer-ready Figma format.",
      bgColor: "bg-neutral-800",
      hoverColor: "hover:bg-neutral-700"
    },
    {
      question: "What if I don’t like the first version?",
      answer: "You get up to 3 revision rounds included.",
      bgColor: "bg-neutral-800",
      hoverColor: "hover:bg-neutral-700"
    },
    {
      question: "Is $400 the final price?",
      answer: "Yes, for a standard landing page with up to 7 sections.",
      bgColor: "bg-neutral-800",
      hoverColor: "hover:bg-neutral-700"
    },
    {
      question: "Can you start immediately?",
      answer: "Yes, if project slots are available.",
      bgColor: "bg-neutral-800",
      hoverColor: "hover:bg-neutral-700"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='more' className="bg-[#141414] text-white py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          More Info
        </h1>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className={`${faq.bgColor} overflow-hidden`}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between ${faq.hoverColor} transition-colors duration-200`}
              >
                <span className="text-lg md:text-2xl text-left font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`w-8 h-8 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-6 md:px-8 md:pb-8 pt-2 text-lg md:text-xl ${faq.bgColor} border-t border-black`}>
                  {Array.isArray(faq.answer) ? (
                    <ul className="space-y-2">
                      {faq.answer.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}