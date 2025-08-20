import React from 'react';


const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-2 text-white-text mb-4">
              {/* Logo removed */}
            </a>
            <p className="text-light-text text-sm">Transforming businesses with bespoke AI solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white-text mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-light-text hover:text-white-text transition-colors">Services</a></li>
              <li><a href="#process" className="text-light-text hover:text-white-text transition-colors">Our Process</a></li>
              <li><a href="#faq" className="text-light-text hover:text-white-text transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white-text mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-light-text hover:text-white-text transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-light-text hover:text-white-text transition-colors">Careers</a></li>
              <li><a href="#consultation" onClick={(e) => handleNavClick(e, '#consultation')} className="text-light-text hover:text-white-text transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-light-text hover:text-white-text transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-light-text hover:text-white-text transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-dark-border pt-8 text-center text-light-text text-sm">
          <p>&copy; {new Date().getFullYear()} Cognijin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;