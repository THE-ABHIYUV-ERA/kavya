import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Logo from "./logo.jpeg"; // Import your logo

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // For Login Navigation

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
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={Logo} alt="AttendMaster Logo" className="w-12 h-12 object-contain rounded-lg" />
          <span className="text-3xl text-sky-600 font-bold dark:text-sky-600">
            AttendMaster
          </span>
        </div>

        {/* Right Side - Nav Links + Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 ">
          {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
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

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-sky-600 text-white rounded-lg shadow-md hover:bg-sky-700 transition"
          >
            Login
          </button>

          {/* Dark/Light Mode Toggle (Desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 focus:outline-none duration-500"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" size={22} />
            ) : (
              <FiMoon className="text-gray-200" size={22} />
            )}
          </button>
        </div>

        {/* Mobile Dark Mode Toggle + Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Dark Mode Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 focus:outline-none duration-500"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" size={22} />
            ) : (
              <FiMoon className="text-gray-700" size={22} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-200 dark:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 dark:bg-gray-100 p-4 space-y-3 duration-500 transform transition-all">
          {["Home", "About", "Features", "Pricing", "FAQ"].map((item) => (
            <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="block text-gray-200 dark:text-gray-600 text-center no-underline hover:underline transition hover:text-amber-600 dark:hover:text-amber-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </Link>
          ))}

          {/* Mobile Login Button */}
          <button
            onClick={() => {
              navigate("/#");
              setIsMenuOpen(false);
            }}
            className="w-full px-5 py-2 bg-sky-600 text-white rounded-lg shadow-md hover:bg-sky-700 transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
