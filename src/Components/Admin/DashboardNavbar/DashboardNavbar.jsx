import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "./logo.jpeg"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
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

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        Swal.fire("Logged Out!", "You have been successfully logged out.", "success");
        navigate("/admin/login");
      }
    });
  };

  return (
    <nav className="bg-gray-800 dark:bg-white shadow-md fixed top-0 w-full z-30 transition-all duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={Logo} alt="AttendMaster Logo" className="w-10 h-10 object-contain rounded-lg" />
          <span className="text-2xl font-bold text-sky-500 dark:text-sky-600">
            AttendMaster
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-14 relative z-30">
          <NavLink
            to="/admin/dashboard" 
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Admin
          </NavLink>

          {/* ✅ Updated Admin Link */}
          <NavLink
            to="/admin/course"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Course
          </NavLink>

          <NavLink
            to="/admin/subject"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Subject
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

          <NavLink
            to="#"
            className="text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
          >
            Attendance
          </NavLink>
        </div>

        {/* Right-Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 focus:outline-none duration-700"
          >
            {darkMode ? <FiSun className="text-yellow-500" size={20} /> : <FiMoon className="text-gray-100" size={20} />}
          </button>

          {/* Logout / Login Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hidden lg:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="#"
              className="hidden lg:block bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all duration-300"
            >
              Login
            </NavLink>
          )}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-200 dark:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-700 ${isMenuOpen ? "block" : "hidden"}`}>
      <div className="lg:hidden bg-gray-900 dark:bg-gray-100 p-4 space-y-2 duration-700 transform transition-all z-40">
          <NavLink
            to="/admin/dashboard"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </NavLink>

          {/* ✅ Mobile Admin Link */}
          <NavLink
            to="/admin/course"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Course
          </NavLink>

          <NavLink
            to="/admin/subject"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Subject
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

          <NavLink
            to="#"
            className="block text-gray-200 dark:text-gray-600 no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Attendance
          </NavLink>
          {/* Logout button for mobile */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/admin/login"
              className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-all duration-300 block"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
