import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-white text-black sticky"
      style={{ top: "0%", zIndex: "999999" }}
    >
      <div className="container mx-auto flex justify-between items-center h-[80px]">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">My Website</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`md:flex z-50 md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0 text-lg">
            <li onClick={toggleMenu}>
              <Link to="/" className="block py-2 md:py-0 hover:text-gray-300">
                Home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/event"
                className="block py-2 md:py-0 hover:text-gray-300"
              >
                Events
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/fund"
                className="block py-2 md:py-0 hover:text-gray-300"
              >
                Funds
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/expense"
                className="block py-2 md:py-0 hover:text-gray-300"
              >
                Expenses
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/gallery"
                className="block py-2 md:py-0 hover:text-gray-300"
              >
                Gallery
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/contact"
                className="block py-2 md:py-0 hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
