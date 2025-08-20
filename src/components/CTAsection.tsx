import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-card rounded-lg p-10 md:p-16 text-center border border-dark-border">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-light-text mb-8 max-w-2xl mx-auto">
            Let's discuss how a custom AI strategy can drive growth, efficiency, and innovation for your organization.
          </p>
          <a
            href="#consultation"
            className="inline-block px-8 py-4 bg-accent text-white-text font-semibold rounded-md hover:bg-accent-hover transition-colors text-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;