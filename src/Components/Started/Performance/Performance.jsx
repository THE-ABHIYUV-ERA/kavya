import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Attendance: 90 },
  { name: "Feb", Attendance: 85 },
  { name: "Mar", Attendance: 95 },
  { name: "Apr", Attendance: 80 },
  { name: "May", Attendance: 92 },
  { name: "Jun", Attendance: 88 },
];

const PerformanceAnalytics = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 dark:text-sky-600 mb-6">Performance Analytics</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-12">
          Track attendance trends, monitor student participation, and analyze performance with real-time data insights.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Stats Section */}
        <div className="bg-gray-800 dark:bg-white p-8 rounded-lg shadow-lg duration-1000">
          <h3 className="text-2xl font-semibold text-gray-200 dark:text-gray-700 mb-4">Monthly Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Attendance" fill="#3182ce" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Progress Cards */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-800 dark:bg-white rounded-lg shadow-md duration-1000">
            <h4 className="text-xl font-medium text-gray-200 dark:text-gray-700">Average Attendance</h4>
            <p className="text-3xl font-bold text-blue-500">89%</p>
          </div>
          <div className="p-6 bg-gray-800 dark:bg-white rounded-lg shadow-md duration-1000">
            <h4 className="text-xl font-medium text-gray-200 dark:text-gray-700">Total Classes Tracked</h4>
            <p className="text-3xl font-bold text-green-500">120+</p>
          </div>
          <div className="p-6 bg-gray-800 dark:bg-white rounded-lg shadow-md duration-1000">
            <h4 className="text-xl font-medium text-gray-200 dark:text-gray-700">Top Performing Students</h4>
            <p className="text-3xl font-bold text-purple-500">95%+ Attendance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAnalytics;
