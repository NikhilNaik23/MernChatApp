import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>

      {/* Centered Glass Card */}
      <div className="relative z-10 text-center px-8 py-12 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl max-w-xl mx-auto animate-fade-in-up">
        <h1 className="text-6xl font-extrabold text-blue-300 drop-shadow mb-4 animate-pulse">
          404
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Oops... You’ve wandered too far 🌲<br />
          This page doesn’t exist in our camp.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
        >
          🏕️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
