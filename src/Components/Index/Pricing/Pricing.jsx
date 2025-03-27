const PricingPlan = () => {
    return (
      <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">Simple & Transparent Pricing</h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
            Enjoy all premium features for free! No hidden charges, no premium plans – just seamless attendance management at zero cost.
          </p>
          <div className="relative w-full max-w-3xl mx-auto bg-gray-800 dark:bg-white p-10 duration-1000 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-3xl font-semibold text-gray-300 dark:text-gray-600">Free Forever</h3>
            <p className="text-lg text-gray-300 dark:text-gray-600 mt-4">All features unlocked, forever free.</p>
            <ul className="mt-6 space-y-4 text-gray-300 dark:text-gray-700 text-center">
              <li className="flex items-center justify-center mr-2"><span className="text-green-500 mr-2">✔</span> Attendance Tracking</li>
              <li className="flex items-center justify-center mr-4"><span className="text-green-500 mr-2">✔</span> Roles Based Access</li>
              <li className="flex items-center justify-center ml-1"><span className="text-green-500 mr-2">✔</span> GPS-Based Verification</li>
              <li className="flex items-center justify-center mr-4"><span className="text-green-500 mr-2">✔</span> Analytics & Reports</li>
              <li className="flex items-center justify-center mr-8"><span className="text-green-500 mr-2">✔</span> Multi-User Access</li>
              <li className="flex items-center justify-center mr-4"><span className="text-green-500 mr-2">✔</span> Cloud based Backup</li>
              <li className="flex items-center justify-center mr-10"><span className="text-green-500 mr-2">✔</span> API based Access</li>
              <li className="flex items-center justify-center mr-12"><span className="text-green-500 mr-2">✔</span> Priority Support</li>
            </ul>
            <button className="mt-8 px-6 py-3 w-full text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 transition-all text-lg">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingPlan;
  