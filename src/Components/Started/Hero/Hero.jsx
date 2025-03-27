import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r dark:from-blue-900 dark:to-sky-500 from-gray-900 to-gray-700 text-white py-24 px-6 min-h-screen flex flex-col items-center justify-center text-center transition duration-1000">
      
      {/* Main Content */}
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Revolutionize <span className="text-amber-500">Attendance</span> Management
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Say goodbye to manual tracking. Automate, simplify, and optimize attendance management effortlessly.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
          <Link 
            to="/get-started" 
            className="px-6 py-3 text-white bg-amber-500 no-underline rounded-lg shadow-md hover:bg-amber-600 hover:scale-105 transform transition-all duration-300">
            Get Started
          </Link>
          <a
            href="#features"
            className="px-6 py-3 border-2 border-amber-500 no-underline text-amber-500 rounded-lg shadow-md hover:bg-amber-500 hover:text-white hover:scale-105 transform transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
