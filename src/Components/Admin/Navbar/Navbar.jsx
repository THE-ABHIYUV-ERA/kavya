import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom"; // ✅ Import NavLink for routing
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
        <div className="hidden lg:flex space-x-14 relative z-30">
          <NavLink
            to="/" 
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Home
          </NavLink>

          {/* ✅ Updated Admin Link */}
          <NavLink
            to="/admin/login"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Admin
          </NavLink>

          <NavLink
            to="#"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Teacher
          </NavLink>

          <NavLink
            to="#"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Student
          </NavLink>
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
          <NavLink
            to="/"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* ✅ Mobile Admin Link */}
          <NavLink
            to="/admin/login"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </NavLink>

          <NavLink
            to="#"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Teacher
          </NavLink>

          <NavLink
            to="#"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Student
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
