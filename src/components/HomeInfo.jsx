import React from "react";

const HomeInfo = ({ text, heading }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center py-8">
      <span className="text-4xl md:text-6xl font-extrabold text-blue-900 font-[Kodchasan] mb-4 drop-shadow-lg">
        {heading[0]}
      </span>
      <span className="text-xl md:text-2xl text-blue-800 font-[Lexend] mb-6">
        {text[0]}
      </span>
      <a href="#how-it-works" className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition mb-8">
        Get Started
      </a>
      {/* Optionally show more info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white bg-opacity-80 rounded-xl shadow p-4 flex flex-col mb-2">
            <span className="text-lg font-bold text-blue-800 mb-1">{heading[i]}</span>
            <span className="text-blue-700 text-base">{text[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInfo;
