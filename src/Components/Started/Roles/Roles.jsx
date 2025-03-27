import React from "react";
import { User, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
    title: "Admin",
    description: "Manage the entire attendance system, oversee reports, and control user access.",
    buttonText: "Admin Login",
    link: "/admin/login"
  },
  {
    icon: <User className="w-12 h-12 text-green-500" />,
    title: "Teacher",
    description: "Mark attendance, view reports, and manage student records efficiently.",
    buttonText: "Teacher Login",
    link: "/teacher-login"
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
    title: "Student",
    description: "Check your attendance records, track progress, and stay updated.",
    buttonText: "Student Login",
    link: "/student-login"
  }
];

const RolesSection = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-100 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-200 dark:text-gray-700 mb-6">
          Roles in <span className="text-sky-600">AttendMaster</span>
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-12">
          Different users have different roles. Log in to access your personalized dashboard.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <div
            key={index}
            className="p-8 bg-gray-800 dark:bg-white shadow-md rounded-lg text-center transform transition-all hover:scale-105 hover:shadow-lg duration-300"
          >
            <div className="mb-4 flex justify-center">{role.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-200 dark:text-gray-600">{role.title}</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-600">{role.description}</p>
            <Link 
              to={role.link} 
              className="mt-4 inline-block px-6 py-2 text-white no-underline bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 transition-all"
            >
              {role.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RolesSection;
