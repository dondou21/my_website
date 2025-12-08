import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [{
    name: 'Home',
    path: '/home'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Skills',
    path: '/skills'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Education',
    path: '/education'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="#home" className="text-xl font-bold text-gray-800">
              Dondou Abiyi
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map(item => (
                <li key={item.name}>
                  <NavLink 
                    to={item.path}
                    className={({isActive}) => 
                        `transition-colors duration-300 ${
                        isActive 
                          ? 'text-blue-600 font-bold border-b-2 border-blue-600' // Styles for the ACTIVE link
                          : 'text-gray-600 hover:text-blue-600'                // Styles for INACTIVE links
                      }`
                    }
                    >
                      {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-2 pb-4">
            <ul className="space-y-2">
              {menuItems.map(item => <li key={item.name}>
                  <a href={item.href} className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;