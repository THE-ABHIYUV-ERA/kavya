const DemoVideo = () => {
    return (
      <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-3">See AttendMaster in Action</h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto mb-10">
            Watch our demo video to explore how AttendMaster simplifies attendance tracking with QR codes, real-time analytics, and secure cloud integration.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <video className="w-full h-72 sm:h-96" controls>
              <source src="./Video/attendmaster.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  };
  
  export default DemoVideo;
  