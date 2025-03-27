import { CheckCircle, Clock, Shield, Layers, Bell, Globe } from "lucide-react";

const OurFeatures = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Seamless Attendance Tracking",
      description: "Easily mark attendance with QR codes, GPS verification, and manual entry options.",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Real-Time Reports Generator",
      description: "Generate instant attendance reports and track student participation effortlessly.",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Secure & Reliable Attendance System",
      description: "Your data is protected with industry-grade encryption and cloud backups.",
    },
    {
      icon: <Layers className="w-12 h-12 text-yellow-500" />,
      title: "Multi-Layer Access Control",
      description: "Role-based permissions ensure secure and structured access to data.",
    },
    {
      icon: <Bell className="w-12 h-12 text-red-500" />,
      title: "Automated Notifications",
      description: "Receive instant alerts for low attendance, upcoming events, and schedule changes.",
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-500" />,
      title: "Cloud-Based Accessibility",
      description: "Access attendance records anytime, anywhere with cloud integration.",
    },
  ];

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Our Features</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
        AttendMaster offers a comprehensive suite of features, including real-time attendance tracking, cloud-based data storage, and automated reporting to streamline attendance management for organizations.
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
