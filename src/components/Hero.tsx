import React from 'react';
import Logo from '../Logo.svg';

const Hero: React.FC = () => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-dark-bg">

      {/* Logo outside container constraints */}
      <div className="w-full flex justify-center animate-fade-in-up">
        <img src={Logo} alt="Cognijin Logo" className="h-96 w-auto max-w-none mb-8" />
      </div>

  <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white-text leading-tight mb-4">
            AI Transformation for Your Business.
            <br />
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text">We Build Your Competitive Edge.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-light-text mb-12">
            Cognijin is your strategic partner in leveraging artificial intelligence. We design, build, and implement custom AI solutions to solve your most complex challenges and drive growth.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#consultation"
            onClick={(e) => handleNavClick(e, '#consultation')}
            className="inline-block px-8 py-4 bg-accent text-white-text font-semibold rounded-md hover:bg-accent-hover transition-colors text-lg shadow-lg shadow-accent/20"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;