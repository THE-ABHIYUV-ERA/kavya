import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">AttendMaster</h2>
          <p className="mt-2 text-gray-400">
            AttendMaster is a highly cutting-edge student attendance management system designed to simplify and automate attendance tracking for students and teachers.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="text-gray-400 no-underline hover:underline hover:text-white transition">About Us</a></li>
            <li><a href="#features" className="text-gray-400 no-underline hover:underline hover:text-white transition">Features</a></li>
            <li><a href="#pricing" className="text-gray-400 no-underline hover:underline hover:text-white transition">Pricing</a></li>
            <li><a href="#faq" className="text-gray-400 no-underline hover:underline hover:text-white transition">Mission</a></li>
            <li><a href="#contact" className="text-gray-400 no-underline hover:underline hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-2 space-y-2 text-gray-400">
            <p className="flex items-center justify-center md:justify-start"><Mail className="w-5 h-5 mr-2" /> attendmaster750@gmail.com</p>
            <p className="flex items-center justify-center md:justify-start"><Phone className="w-5 h-5 mr-2" /> +91 7505784698</p>
            <p className="flex items-center justify-center md:justify-start">152107, AttendMaster HQ, Malout India</p>
          </div>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition bg-gray-700 hover:bg-blue-600 p-2 rounded-full">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition bg-gray-700 hover:bg-sky-500 p-2 rounded-full">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition bg-gray-700 hover:bg-blue-700 p-2 rounded-full">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition bg-gray-700 hover:bg-pink-500 p-2 rounded-full">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
           {/* Newsletter Subscription */}
        <div>
          <p className="mt-2 text-gray-400 mr-4">Get the latest updates and offers.</p>
          <div className="mt-4 flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 transition-all">Subscribe</button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} <span className="font-bold text-gray-300">AttendMaster</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;