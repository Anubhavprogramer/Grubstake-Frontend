import React from "react";
import HomeInfo from "./HomeInfo";
import HomeSvg from "./HomeSvg";
import { useNavigate } from "react-router-dom";

const heroText = [
  "Empowering Your Financial Future, One Innovation at a Time.",
  "Explore Opportunities: Unlock the door to educational success with our comprehensive scholarship database.",
  "Invest in Your Future: Discover the power of compound interest with our investment calculator.",
  "Get Ahead: Learn how to manage your student loans and avoid debt.",
];

const heroHeading = [
  "Welcome to Grubstake",
  "Scholarships",
  "Institutional Aid",
  "Banks And Loans",
];

const howItWorks = [
  {
    title: "Browse Scholarships & Loans",
    desc: "Explore a curated list of government and private scholarships, as well as loan options tailored for students.",
    icon: "🎓",
  },
  {
    title: "Apply Easily",
    desc: "Get all the information you need and apply directly through the platform or via official links.",
    icon: "📝",
  },
  {
    title: "Track & Succeed",
    desc: "Track your applications and get tips on maximizing your chances for financial aid.",
    icon: "🚀",
  },
];

const featured = [
  {
    title: "National Merit Scholarship",
    desc: "A prestigious government scholarship for top-performing students.",
    type: "Scholarship",
  },
  {
    title: "Student Success Loan",
    desc: "Low-interest loan for undergraduate students from partner banks.",
    type: "Loan",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleFeaturedClick = (idx) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    if (idx === 0) navigate('/GovScol');
    else if (idx === 1) navigate('/Loans');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 pt-8 pb-2 md:pb-4">
        <div className="flex-1 flex flex-col items-start justify-center z-10">
          <HomeInfo text={heroText} heading={heroHeading} />
        </div>
        <div className="flex-1 flex justify-center items-center w-full h-full z-0 hidden md:flex">
          <HomeSvg />
        </div>
      </div>
      {/* How it Works Section */}
      <section className="w-full max-w-5xl py-4 md:py-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 font-[Kodchasan]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <span className="text-5xl mb-4">{step.icon}</span>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-blue-700 text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Scholarships & Loans */}
      <section className="w-full max-w-5xl py-4 md:py-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 font-[Kodchasan]">Featured Scholarships & Loans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
              <span className="text-xs px-3 py-1 bg-blue-900 text-white rounded-full mb-2 font-semibold">{item.type}</span>
              <h3 className="text-xl font-bold text-blue-900 mb-1">{item.title}</h3>
              <p className="text-blue-800 text-base mb-2">{item.desc}</p>
              <button
                className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition"
                onClick={() => handleFeaturedClick(idx)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
