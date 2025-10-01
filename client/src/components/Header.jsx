import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50" aria-label="Main header">
      <div className="backdrop-blur-sm bg-white/30 rounded-sm py-3 max-w-[80%] mx-auto flex justify-between items-center px-4 shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6"
          aria-label="Primary navigation"
        >
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors duration-300"
            aria-label="Home page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors duration-300"
            aria-label="About section"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors duration-300"
            aria-label="Services section"
          >
            Services
          </a>
        </nav>

        {/* Desktop Sign In Button */}
        <button
          className="hidden md:block text-gray-500 hover:text-black border border-gray-300 px-4 py-2 rounded-sm transition-all duration-300 ease-in hover:px-6 hover:py-3"
          aria-label="Sign in to your account"
        >
          Sign In
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-500 hover:text-black transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-sm bg-white/30 max-w-[80%] mx-auto mt-2 rounded-sm shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-4" aria-label="Mobile navigation">
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors duration-300 py-2"
              onClick={toggleMenu}
              aria-label="Home page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors duration-300 py-2"
              onClick={toggleMenu}
              aria-label="About section"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition-colors duration-300 py-2"
              onClick={toggleMenu}
              aria-label="Services section"
            >
              Services
            </a>
            <button
              className="text-gray-500 hover:text-black border border-gray-300 px-4 py-2 rounded-sm transition-colors duration-300 text-left"
              aria-label="Sign in to your account"
              onClick={toggleMenu}
            >
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;