import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';

const MainPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
    </main>
  );
};

export default MainPage;