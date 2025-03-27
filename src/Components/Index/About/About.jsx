import { Briefcase, Users, CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-2">About Us</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
          AttendMaster is dedicated to transforming attendance management through technology, ensuring efficiency and accuracy for institutions worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg transform transition-all hover:scale-105 hover:shadow-lg duration-300">
            <div className="mb-4 flex justify-center"><Briefcase className="w-12 h-12 text-blue-500" /></div>
            <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-600">Our Mission</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-600">
              We aim to provide a seamless and efficient attendance management system for institutions and organizations.
            </p>
            <a
              href="#mission"
              className="mt-4 inline-block px-5 py-2 no-underline text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 transition-all"
            >
              Learn More
            </a>
          </div>
          
          {/* Our Features */}
          <div className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg transform transition-all hover:scale-105 hover:shadow-lg duration-300">
            <div className="mb-4 flex justify-center"><Users className="w-12 h-12 text-green-500" /></div>
            <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-600">Our Features</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-600">
              Packed with powerful features to make attendance tracking effortless and efficient.
            </p>
            <a
              href="#features"
              className="mt-4 inline-block px-5 py-2 no-underline text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              Learn More
            </a>
          </div>
          
          {/* Our Vision */}
          <div className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg transform transition-all hover:scale-105 hover:shadow-lg duration-300">
            <div className="mb-4 flex justify-center"><CheckCircle className="w-12 h-12 text-purple-500" /></div>
            <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-600">Our Vision</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-600">
              To revolutionize the way attendance is managed with cutting-edge technology and innovative solutions.
            </p>
            <a
              href="#vision"
              className="mt-4 inline-block px-5 py-2 no-underline text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-600 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;