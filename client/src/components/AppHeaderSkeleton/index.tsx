import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/onlycats_logo.png";

export const AppHeaderSkeleton: React.FC = () => {
  return (
    <div className="w-full h-20 border-gray-400 shadow-lg">
      <div className="flex justify-between mx-5 mt-2 items-center">
        <img src={logo} alt="logo" className="h-16 w-16" />
      </div>
    </div>
  );
};
