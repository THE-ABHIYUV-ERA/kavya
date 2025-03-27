import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    { question: "What is AttendMaster?", answer: "AttendMaster is an advanced attendance management system designed for institutions and organizations." },
    { question: "Is AttendMaster free to use?", answer: "Yes! AttendMaster offers a free plan with all essential features included." },
    { question: "How does QR Code attendance work?", answer: "Teachers generate a QR code that students scan using their devices to mark attendance." },
    { question: "Does AttendMaster support GPS-based attendance?", answer: "Yes, it allows location verification to ensure students are present in the designated area." },
    { question: "Can I export attendance reports?", answer: "Absolutely! You can download attendance reports in CSV or PDF format." },
    { question: "Is there a mobile app available?", answer: "Currently, AttendMaster is web-based, but a mobile app is in development." },
    { question: "How secure is my data?", answer: "We use industry-grade encryption to ensure all data remains safe and private." },
    { question: "Can multiple teachers manage the same class?", answer: "Yes, multiple teachers can be assigned to the same class for attendance tracking." },
    { question: "Does AttendMaster integrate with third-party apps?", answer: "Yes, AttendMaster provides API access for integration with various platforms." },
    { question: "How do I get support if I face issues?", answer: "You can contact our support team via email or live chat for assistance." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
          Find answers to commonly asked questions about AttendMaster.
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 dark:bg-gray-100 p-3 rounded-lg shadow-md duration-1000">
              <button
                className="w-full flex justify-between items-center text-md font-semibold text-sky-600 dark:text-sky-600"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
              </button>
              {openIndex === index && <p className="mt-3 text-gray-300 dark:text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
