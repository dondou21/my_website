import React from 'react';
import { GithubIcon, Mail, Phone } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-40 left-1/4 w-32 h-32 bg-indigo-100 rounded-full opacity-30 blur-xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile picture section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                {/* Replace with your actual image URL */}
                <img src="../photopassport.jpg" alt="Dondou Abiyi" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="font-bold">UI/UX</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-indigo-300 rounded-full"></div>
            </div>
          </div>
          {/* Text content section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              <span className="block mb-2">DONDOU ABIYI</span>
              <span className="text-blue-600">SOFTWARE ENGINEER</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              UI/UX & Graphics Designer with a strong foundation in software
              engineering and a passion for user-centered design.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300">
                Get in Touch
              </a>
              <a href="#projects" className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md transition-colors duration-300">
                View Projects
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600">
              <a href="mailto:dondouabiyi@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Mail size={18} />
                <span>dondouabiyi@gmail.com</span>
              </a>
              <a href="tel:+250791591966" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Phone size={18} />
                <span>+250 (0) 791 591 966</span>
              </a>
              <a href="https://github.com/dondou21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <GithubIcon size={18} />
                <span>github.com/dondou21</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;