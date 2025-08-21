
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
