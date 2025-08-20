import React from 'react';


const Header: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo moved to Hero section */}
          <nav className="hidden md:flex md:space-x-8">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-light-text hover:text-white-text transition-colors font-semibold">Home</a>
            <a href="#services" className="text-light-text hover:text-white-text transition-colors">Services</a>
            <a href="#process" className="text-light-text hover:text-white-text transition-colors">Our Process</a>
            <a href="#faq" className="text-light-text hover:text-white-text transition-colors">FAQ</a>
          </nav>
          <div>
            <a href="#consultation" onClick={(e) => handleNavClick(e, '#consultation')} className="px-4 py-2 text-white-text bg-accent rounded-md hover:bg-accent-hover transition-colors font-semibold">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;