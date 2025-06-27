import React from "react";
import { useNavigate } from "react-router-dom";

const HomeInfo = ({ text, heading }) => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/Loans');
    } else {
      navigate('/login');
    }
  };

  const handleCardClick = (idx) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    if (idx === 1) navigate('/GovScol');
    else if (idx === 2) navigate('/PriScol');
    else if (idx === 3) navigate('/Loans');
  };

  return (
    <div className="w-full flex flex-col items-start justify-center py-8">
      <span className="text-4xl md:text-6xl font-extrabold text-blue-900 font-[Kodchasan] mb-4 drop-shadow-lg">
        {heading[0]}
      </span>
      <span className="text-xl md:text-2xl text-blue-800 font-[Lexend] mb-6">
        {text[0]}
      </span>
      <button
        onClick={handleGetStarted}
        className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition mb-8"
      >
        Get Started
      </button>
      {/* Optionally show more info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => handleCardClick(i)}
            className="bg-white bg-opacity-80 rounded-xl shadow p-4 flex flex-col mb-2 text-left hover:bg-blue-100 hover:scale-105 transition cursor-pointer"
          >
            <span className="text-lg font-bold text-blue-800 mb-1">{heading[i]}</span>
            <span className="text-blue-700 text-base">{text[i]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeInfo;
