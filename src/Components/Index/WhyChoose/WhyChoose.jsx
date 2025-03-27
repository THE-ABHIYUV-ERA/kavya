import { ThumbsUp, Award, ShieldCheck, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ThumbsUp className="w-16 h-16 text-blue-500" />,
      title: "User-Friendly",
      description: "An intuitive interface designed for ease of use by teachers and students alike.",
    },
    {
      icon: <Award className="w-16 h-16 text-yellow-500" />,
      title: "Proven Excellence",
      description: "Trusted by institutions worldwide for seamless attendance management.",
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-green-500" />,
      title: "Secure & Reliable",
      description: "Top-tier security ensures data privacy and system reliability.",
    },
    {
      icon: <Zap className="w-16 h-16 text-purple-500" />,
      title: "Fast & Efficient",
      description: "Optimized for quick attendance marking and real-time analytics.",
    },
  ];

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
          Our platform is designed to make attendance management a breeze. With a user-friendly interface, proven excellenc Secure & Reliable, Fast & Efficient.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg transform transition-all hover:scale-105 hover:shadow-lg duration-300"
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-700">{reason.title}</h3>
              <p className="mt-2 text-gray-300 dark:text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
