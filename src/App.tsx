
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConsultationPage from './components/ConsultationPage';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange, false);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const renderPage = () => {
    switch (page) {
      case '#consultation':
        return <ConsultationPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
