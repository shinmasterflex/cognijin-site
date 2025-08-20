
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your goals and challenges to co-create a strategic AI roadmap.',
    },
    {
      number: '02',
      title: 'Develop & Implement',
      description: 'Our team develops, tests, and deploys your custom AI solution, ensuring seamless integration.',
    },
    {
      number: '03',
      title: 'Measure & Scale',
      description: 'We monitor performance, measure ROI, and help you scale your AI capabilities for long-term success.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text">Our Collaborative Process</h2>
          <p className="text-lg text-light-text mt-4">From idea to implementation, we partner with you every step of the way.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dark-border -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-dark-bg px-4 z-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-dark-card border-2 border-accent text-accent text-2xl font-bold rounded-full">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white-text mb-2">{step.title}</h3>
                <p className="text-light-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;