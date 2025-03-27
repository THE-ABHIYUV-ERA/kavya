import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-gray-900 dark:bg-gray-100 text-center py-20 px-6 transition-all duration-1000 w-full min-h-screen flex items-center justify-center">
      <div className="w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold text-gray-200 dark:text-gray-600">
        Welcome to <span className="text-sky-600 hover:text-sky-600 transition-all">AttendMaster</span>
      </h1>
        <p className="mt-4 text-lg text-gray-300 dark:text-gray-600">
          The ultimate platform for seamless and efficient attendance management.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/get-started")}
            className="px-6 py-3 text-white bg-sky-500 no-underline rounded-lg shadow-md hover:bg-sky-600 hover:scale-105 transform transition-all duration-300">
            Get Started
          </button>
          <a
            href="#about"
            className="px-6 py-3 text-sky-500 border-2 no-underline border-sky-500 rounded-lg shadow-md hover:bg-sky-500 hover:text-white hover:scale-105 transform transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
