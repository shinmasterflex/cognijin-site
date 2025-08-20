
import React from 'react';
import { CheckIcon } from './Icons';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0',
    frequency: '/ month',
    description: 'For individuals and hobbyists starting out.',
    features: [
      '10,000 words/month',
      'Basic content generation',
      'Community support',
    ],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    frequency: '/ month',
    description: 'For professionals and small teams.',
    features: [
      '100,000 words/month',
      'Advanced AI models',
      'Code generation',
      'Priority email support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    frequency: '',
    description: 'For large organizations needing custom solutions.',
    features: [
      'Unlimited usage',
      'Dedicated account manager',
      'API access & integrations',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-dark-bg">
  <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text">Flexible Pricing for Teams of All Sizes</h2>
          <p className="text-lg text-light-text mt-4">Choose the plan that's right for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`relative flex flex-col bg-dark-card rounded-lg border ${tier.popular ? 'border-accent animate-subtle-shine' : 'border-dark-border'} p-8`}>
              {tier.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-sm text-white-text bg-accent rounded-full font-semibold">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white-text mb-2">{tier.name}</h3>
              <p className="text-light-text mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white-text">{tier.price}</span>
                <span className="text-light-text">{tier.frequency}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-accent mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`w-full text-center py-3 px-6 rounded-md font-semibold transition-colors ${tier.popular ? 'bg-accent text-white-text hover:bg-accent-hover' : 'bg-dark-border text-white-text hover:bg-accent hover:border-accent'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
