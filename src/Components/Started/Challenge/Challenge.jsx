import { useState } from "react";
import { MessageCircle, Smile, Meh, Frown, Phone, Mail, User } from "lucide-react";

const FeedbackSection = () => {
  const [rating, setRating] = useState(null);

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-500 mb-6">Facing Any Challenges?</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-12">
          Let us know your experience or any issues you're facing. We’re here to help!
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-white p-10 rounded-lg shadow-lg duration-1000">
        <form className="space-y-6">
          <div>
            <div className="flex items-center border rounded-lg dark:bg-gray-100 bg-gray-600 p-3 duration-1000">
              <User className="w-5 h-5 text-gray-300 dark:text-gray-500 mr-2" />
              <input 
                type="text" 
                className="w-full bg-transparent text-gray-300 dark:text-gray-600 focus:outline-none"
                placeholder="Enter your name" 
              />
            </div>
          </div>
          <div>
            <div className="flex items-center border rounded-lg dark:bg-gray-100 bg-gray-600 p-3 duration-1000">
              <Mail className="w-5 h-5 text-gray-300 dark:text-gray-500 mr-2" />
              <input 
                type="email" 
                className="w-full bg-transparent text-gray-300 dark:text-gray-600 focus:outline-none"
                placeholder="Enter your email" 
              />
            </div>
          </div>
          <div>
            <div className="flex items-center border rounded-lg dark:bg-gray-100 bg-gray-600 p-3 duration-1000">
              <Phone className="w-5 h-5 text-gray-300 dark:text-gray-500 mr-2" />
              <input 
                type="tel" 
                className="w-full bg-transparent text-gray-300 dark:text-gray-600 focus:outline-none"
                placeholder="Enter your phone number" 
              />
            </div>
          </div>
          <div>
            <textarea 
              className="w-full p-3 border rounded-lg dark:bg-gray-100 bg-gray-600 text-white focus:outline-none duration-1000"
              rows="4"
              placeholder="Describe your issue or feedback"
            ></textarea>
          </div>

          <div className="text-left">
            <label className="block mb-2">Rate Your Experience</label>
            <div className="flex space-x-4 text-xl">
              <button type="button" className={`p-3 rounded-lg ${rating === "good" ? "bg-green-500" : "bg-gray-700"}`} onClick={() => setRating("good")}>
                <Smile className="w-6 h-6 text-white" />
              </button>
              <button type="button" className={`p-3 rounded-lg ${rating === "neutral" ? "bg-yellow-500" : "bg-gray-700"}`} onClick={() => setRating("neutral")}>
                <Meh className="w-6 h-6 text-white" />
              </button>
              <button type="button" className={`p-3 rounded-lg ${rating === "bad" ? "bg-red-500" : "bg-gray-700"}`} onClick={() => setRating("bad")}>
                <Frown className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full px-6 py-3 text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 transition-all text-lg">
            Submit Feedback
          </button>
        </form>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-300 dark:text-gray-600">Need immediate help? <a href="mailto:support@attendmaster.com" className="text-sky-400 underline">Contact Support</a></p>
      </div>
    </section>
  );
};

export default FeedbackSection;
