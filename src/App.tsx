import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ConsultationPage from './components/ConsultationPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header />
      {hash === '#consultation' ? <ConsultationPage /> : <MainPage />}
      <Footer />
    </div>
  );
}
