
import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0 footertext">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
