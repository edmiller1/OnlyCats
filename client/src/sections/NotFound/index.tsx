import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/onlycats-logo.png";

export const NotFound: React.FC = () => {
  const history = useHistory();
  return (
    <div className="full-profile-gradient flex justify-center items-center">
      <div className="w-3/8 h-full bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col  justify-center items-center px-8 py-8">
          <img src={logo} alt="onlycats logo" className="w-20 h-20 mb-10" />
          <h1 className="text-3xl font-semibold mb-10">
            Oops! This page doesn't exist!
          </h1>
          <button
            className="py-3 px-20 border-1 border-gray-300 rounded-full text-gray-800 hover:bg-main-purple hover:text-white transition-all"
            onClick={() => history.push("/")}
          >
            Take me back to safety
          </button>
        </div>
      </div>
    </div>
  );
};
