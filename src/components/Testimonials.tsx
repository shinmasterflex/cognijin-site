import React from 'react';

const testimonialsData = [
  {
    quote: "Cognijin has revolutionized our content pipeline. We're producing higher quality content in a fraction of the time. It's a game-changer.",
    name: 'Sarah Johnson',
    title: 'CMO, TechSolutions Inc.',
    img: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: "As a developer, the code assistant is phenomenal. It's like having a senior engineer available 24/7. My productivity has skyrocketed.",
    name: 'David Chen',
    title: 'Lead Developer, AppWorks',
    img: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: "The ability to quickly analyze market data and get clear insights has given us a significant competitive edge. I can't imagine our workflow without it.",
    name: 'Maria Rodriguez',
    title: 'Founder, DataDriven Co.',
    img: 'https://picsum.photos/id/1027/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-card border-y border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-text">What Our Partners Say</h2>
          <p className="text-lg text-light-text mt-4 max-w-2xl mx-auto">
            See how leading companies are leveraging our expertise to achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-dark-bg p-8 rounded-lg border border-dark-border flex flex-col">
              <p className="text-light-text italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.img} alt={testimonial.name} className="w-1 h-1 rounded-full mr-1 min-w-4 min-h-4" />
                <div>
                  <h4 className="font-bold text-white-text">{testimonial.name}</h4>
                  <p className="text-light-text text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;