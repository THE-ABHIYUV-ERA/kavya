import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from "./logo.jpeg"; // Import your logo

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 dark:bg-white shadow-md fixed top-0 w-full z-30 transition-all duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={Logo} alt="AttendMaster Logo" className="w-12 h-12 object-contain rounded-lg" />
          <span className="text-3xl text-sky-600 font-bold dark:text-sky-600">
            AttendMaster
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 relative z-30">
          {["Home", "About", "Features", "Pricing", "FAQ"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right-Side Buttons */}
        <div className="flex items-center space-x-4 z-30">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 focus:outline-none duration-700"
          >
            {darkMode ? (
              <FiSun className="text-yellow-500" size={20} />
            ) : (
              <FiMoon className="text-gray-100" size={20} />
            )}
          </button>

          {/* Contact Button (Visible on Tablets & Larger) */}
          <Link
            to="contact"
            className="hidden md:block px-4 cursor-pointer py-2 text-md font-semibold text-white bg-gradient-to-r no-underline from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg dark:text-white dark:from--green-400 dark:to-blue-500"
          >
            Contact Us
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-200 dark:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 dark:bg-gray-100 p-4 space-y-2 duration-700 transform transition-all z-40">
          {/* Nav Links in Mobile View */}
          {["Home", "About", "Features", "Pricing", "FAQ"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Contact Button (Mobile View) */}
          <Link
            to="contact"
            duration={400}
            className="block mt-4 text-center text-md cursor-pointer font-semibold no-underline text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 rounded-lg py-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:text-white dark:from-green-400 dark:to-blue-500"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
