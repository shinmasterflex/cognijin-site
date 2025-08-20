
import React from 'react';
import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from './Icons';

const servicesData = [
  {
  icon: <FeatureIcon1 className="h-10 w-10 text-accent" />,
    title: 'AI Strategy & Consulting',
    description: 'Our experts help you identify opportunities for AI integration, creating a roadmap for successful implementation and digital transformation.',
  },
  {
  icon: <FeatureIcon2 className="h-10 w-10 text-accent" />,
    title: 'Custom AI Development',
    description: 'We build bespoke AI models and solutions tailored to your unique business needs, from natural language processing to computer vision.',
  },
  {
  icon: <FeatureIcon3 className="h-10 w-10 text-accent" />,
    title: 'AI-Powered Automation',
    description: 'We automate your workflows and processes using intelligent systems, increasing efficiency and reducing operational costs.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-card border-y border-dark-border">
  <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text">Our AI Services</h2>
          <p className="text-lg text-light-text mt-4 max-w-2xl mx-auto">
            We offer end-to-end AI solutions to transform your business operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-dark-bg p-8 rounded-lg border border-dark-border transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white-text mb-2">{service.title}</h3>
              <p className="text-light-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;