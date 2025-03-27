import { Eye, Globe, TrendingUp } from "lucide-react";

const OurVision = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Our Vision</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
          Our Vision is to revolutionize the way attendance is managed with cutting-edge technology and innovative solutions
        </p>
        <div className="relative flex flex-col space-y-20 md:space-y-0 md:flex-row items-center justify-between">
          <div className="relative flex flex-col items-center text-center max-w-lg">
            <div className="bg-gray-800 dark:bg-white p-12 rounded-full shadow-md transform transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <div className="flex justify-center items-center">
               <Eye className="w-20 h-20 text-blue-500 mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Clarity & Innovation</h3>
              <p className="mt-2 text-gray-300 dark:text-gray-600">
                We envision a future where attendance tracking is seamless and fully automated.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center text-center max-w-lg ml-4">
            <div className="bg-gray-800 dark:bg-white p-12 rounded-full shadow-md transform transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <div className="flex justify-center items-center">
               <Globe className="w-20 h-20 text-green-500 mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Bridging Education</h3>
              <p className="mt-2 text-gray-300 dark:text-gray-600">
                solutions across institutions worldwide, ensuring accessibility and efficiency.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center text-center max-w-lg ml-4">
            <div className="bg-gray-800 dark:bg-white p-12 rounded-full shadow-md transform transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <div className="flex justify-center items-center">
                <TrendingUp className="w-20 h-20 text-purple-500 mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Continuous Growth</h3>
              <p className="mt-2 text-gray-300 dark:text-gray-600">
                Constantly evolving with AI and smart solutions to redefine attendance tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
