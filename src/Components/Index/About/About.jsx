import { Briefcase, Users, CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400 mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-sky-600">AttendMaster</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming attendance management through innovative technology, ensuring efficiency and accuracy for institutions worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              To provide a seamless, efficient attendance management system that saves time and reduces errors for institutions worldwide.
            </p>
            <a
              href="#mission"
              className="inline-flex items-center text-sm font-medium text-sky-600 dark:text-sky-400 group-hover:underline"
            >
              Learn more <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Features Card */}
          <div className="group relative overflow-hidden rounded-xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Features</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Packed with powerful, user-friendly features that make attendance tracking effortless and insightful.
            </p>
            <a
              href="#features"
              className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400 group-hover:underline"
            >
              Explore features <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              To revolutionize attendance management with cutting-edge technology that adapts to your institution's needs.
            </p>
            <a
              href="#vision"
              className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:underline"
            >
              See our vision <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* Stats Section - Updated for Attendance System */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-300">Attendance Records</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.7%</div>
            <div className="text-gray-600 dark:text-gray-300">Accuracy Rate</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5K+</div>
            <div className="text-gray-600 dark:text-gray-300">Classes Managed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;