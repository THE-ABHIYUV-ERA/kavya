import contact from './contact.jpg';

const ContactUs = () => {
    return (
      <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Get in Touch</h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
            Have questions or need assistance? Contact us anytime – we're here to help!
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <img 
              src={contact} 
              alt="Contact Us" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-800 dark:bg-white p-10 rounded-lg shadow-md duration-1000">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg dark:bg-gray-100 bg-gray-600 dark:text-gray-600 text-gray-300 duration-1000 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg dark:bg-gray-100 bg-gray-600 dark:text-gray-600 focus:outline-none text-gray-300 duration-1000"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <input 
                  type="number" 
                  className="w-full p-3 border rounded-lg dark:bg-gray-100 bg-gray-600 dark:text-gray-600 focus:outline-none text-gray-300 duration-1000"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div>
                <textarea 
                  className="w-full p-3 rounded-lg dark:bg-gray-100 bg-gray-600 dark:text-gray-600 focus:outline-none text-gray-300 duration-1000"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 transition-all text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;