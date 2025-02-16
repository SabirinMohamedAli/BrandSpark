import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-blue-900 text-white z-50 font-bold text-xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
        BrandSpark Tech
        </a>

        {/* Menu button (visible only on small screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-6 absolute md:static bg-blue-900 md:bg-transparent w-full md:w-auto left-0 top-16 p-4 md:p-0 space-y-4 md:space-y-0 text-center md:text-left transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}>
          <li><a href="#home" className="hover:text-gray-300 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300 transition duration-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
