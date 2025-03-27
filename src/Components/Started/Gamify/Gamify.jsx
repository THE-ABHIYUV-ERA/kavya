import { useState } from "react";
import { Trophy, Star, Gift, Target, ShieldCheck } from "lucide-react";

const GamificationSection = () => {
  const [xp, setXp] = useState(250);
  const levels = ["Beginner", "Pro", "Master", "Legend"];
  const currentLevel = Math.min(Math.floor(xp / 100), levels.length - 1);

  return (
    <section className="bg-gray-900 dark:bg-gray-50 py-20 px-6 transition-all duration-1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-sky-600 mb-6">Gamify Your Experience</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-12">Earn rewards, level up, and engage with AttendMaster like never before!</p>
      </div>

      {/* XP Progress & Level */}
      <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-white p-10 rounded-lg shadow-lg duration-1000">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-sky-400">Level: {levels[currentLevel]}</h3>
          <p className="text-gray-300 dark:text-gray-600">XP: {xp} / 400</p>
        </div>
        <div className="bg-gray-700 dark:bg-gray-100 h-4 rounded-lg overflow-hidden mb-6">
          <div className="bg-sky-500 h-full" style={{ width: `${(xp / 400) * 100}%` }}></div>
        </div>
      </div>
      
      {/* Badges Section */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="p-4 bg-gray-800 dark:bg-white rounded-lg duration-1000 shadow-md">
          <Trophy className="w-10 h-10 text-yellow-400 mx-auto" />
          <p className="mt-2 text-gray-300 dark:text-gray-600">Top Performer</p>
        </div>
        <div className="p-4 bg-gray-800 dark:bg-white rounded-lg duration-1000 shadow-md">
          <Star className="w-10 h-10 text-purple-400 mx-auto" />
          <p className="mt-2 text-gray-300 dark:text-gray-600">Daily Streak</p>
        </div>
        <div className="p-4 bg-gray-800 dark:bg-white rounded-lg duration-1000 shadow-md">
          <Gift className="w-10 h-10 text-green-400 mx-auto" />
          <p className="mt-2 text-gray-300 dark:text-gray-600">First Referral</p>
        </div>
        <div className="p-4 bg-gray-800 dark:bg-white rounded-lg duration-1000 shadow-md">
          <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto" />
          <p className="mt-2 text-gray-300 dark:text-gray-600">Verified User</p>
        </div>
      </div>

      {/* Challenges */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-sky-400 text-center mb-6">Ongoing Challenges</h3>
        <ul className="space-y-4">
          <li className="bg-gray-800 dark:bg-white p-4 rounded-lg flex items-center justify-between shadow-md duration-1000">
            <span className="text-gray-300 dark:text-gray-600 flex items-center gap-2"><Target className="w-6 h-6 text-red-400" /> Complete Daily Check-in</span>
            <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 text-white">Claim</button>
          </li>
          <li className="bg-gray-800 dark:bg-white p-4 rounded-lg flex items-center justify-between shadow-md duration-1000">
            <span className="text-gray-300 dark:text-gray-600 flex items-center gap-2"><Target className="w-6 h-6 text-yellow-400" /> Refer a Friend</span>
            <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 text-white">Claim</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GamificationSection;
