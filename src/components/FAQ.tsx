
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqData = [
  {
    question: 'What is Cognijin?',
    answer: 'Cognijin is a specialized AI agency and consulting firm. We partner with businesses to design, build, and implement custom artificial intelligence solutions that drive efficiency, innovation, and growth.'
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We work with a diverse range of clients, from innovative startups to established enterprises, across various industries who are looking to leverage AI for a competitive advantage.'
  },
  {
    question: 'How do we get started on a project?',
    answer: 'The best way to start is by booking a free, no-obligation consultation through our website. We\'ll discuss your needs, identify opportunities, and outline a potential roadmap for your project.'
  },
  {
    question: 'Is our data secure and confidential?',
    answer: 'Absolutely. We prioritize data security and confidentiality. All client data is handled under strict protocols, and we are committed to signing non-disclosure agreements to ensure your intellectual property is protected.'
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-dark-border">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-2"
      >
        <span className="text-lg font-medium text-white-text">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-light-text transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 px-2 text-light-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-dark-card border-y border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text">Frequently Asked Questions</h2>
          <p className="text-lg text-light-text mt-4">Have questions? We've got answers.</p>
        </div>
        <div>
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;