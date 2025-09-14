import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dondou Abiyi</h3>
            <p className="text-gray-400">Software Engineer & UI/UX Designer</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Dondou Abiyi. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;