import React, { useState, useEffect } from 'react';
import { Menu, X, Apple } from 'lucide-react';
import { NavLink } from './NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Apple className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">NutriLife</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" label="Home" />
            <NavLink href="#nutrition" label="Nutrition" />
            <NavLink href="#recipes" label="Recipes" />
            <NavLink href="#plans" label="Diet Plans" />
            <NavLink href="#calculator" label="BMI Calculator" />
            <NavLink href="#blog" label="Blog" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <NavLink href="#home" label="Home" mobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#nutrition" label="Nutrition" mobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#recipes" label="Recipes" mobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#plans" label="Diet Plans" mobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#calculator" label="BMI Calculator" mobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#blog" label="Blog" mobile onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;