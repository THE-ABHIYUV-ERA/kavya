import { FaShieldAlt, FaChartLine, FaUserGraduate, FaCloud, FaQrcode, FaLayerGroup } from "react-icons/fa";

const OurFeatures = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-blue-500" />,
      title: "Secure User Authentication",
      description: "Industry-standard JWT authentication keeps user data secure and protected.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-green-500" />,
      title: "Admin Dashboard Analytics",
      description: "Comprehensive analytics dashboard for monitoring attendance patterns and trends.",
    },
    {
      icon: <FaUserGraduate className="w-12 h-12 text-purple-500" />,
      title: "SStudent Portal System",
      description: "Personalized student portal for tracking individual attendance records.",
    },
    {
      icon: <FaCloud className="w-12 h-12 text-yellow-500" />,
      title: " Real-time Cloud Updates",
      description: "Cloud integration ensures attendance data is synchronized in real-time.",
    },
    {
      icon: <FaQrcode className="w-12 h-12 text-red-500" />,
      title: "Future QR & Biometric",
      description: "Upcoming features include QR code scanning and biometric attendance options.",
    },
    {
      icon: <FaLayerGroup className="w-12 h-12 text-indigo-500" />,
      title: "Multi-Layer Access Control",
      description: "Role-based permissions ensure secure and structured access to data.",
    },
  ];

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3">
          <span className="text-gray-200 dark:text-gray-700">Powerful</span> <span className="text-sky-600 dark:text-sky-600">Features</span>
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
        AttendMaster provides everything you need to streamline attendance management
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg transform transition-all hover:scale-105 hover:shadow-lg duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-600">{feature.title}</h3>
              <p className="mt-2 text-gray-300 dark:text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
