import { Target, Lightbulb, Users, Globe, ShieldCheck, Rocket } from "lucide-react";

const OurMission = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Our Mission</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
          We aim to provide a seamless and efficient attendance management system for institutions and organizations.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-12">
            <div className="flex items-center space-x-6">
              <Target className="w-20 h-20 text-blue-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Our Goal</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  We strive to simplify and enhance attendance tracking with cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Lightbulb className="w-20 h-20 text-yellow-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Innovation</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  Our platform leverages smart solutions like AI and cloud technology for efficiency.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Users className="w-20 h-20 text-green-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Community</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  We aim to create a seamless and user-friendly experience for educators and students alike.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-12">
            <div className="flex items-center space-x-6">
              <Globe className="w-20 h-20 text-indigo-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Global Reach</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  Expanding our platform to support institutions worldwide with seamless access.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <ShieldCheck className="w-20 h-20 text-red-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Security</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  Ensuring data privacy and protection with top-tier security protocols.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Rocket className="w-20 h-20 text-orange-500" />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">Future Growth</h3>
                <p className="mt-2 text-gray-300 dark:text-gray-600">
                  Continuously evolving to bring new innovations and improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;