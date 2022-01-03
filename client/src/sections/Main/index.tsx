import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../assets/cat1.jpg";
import cat2 from "../../assets/cat2.jpg";
import cat3 from "../../assets/cat3.jpg";

export const Main: React.FC = () => {
  return (
    <div>
      <div className="main-page-header py-5 px-20">
        {/* <img src={logo} alt="logo" className="h-20 w-20" /> */}
        <div className="my-10 flex justify-between">
          <h1 className="text-white text-5xl font-black">
            Welcome To OnlyCats
          </h1>
          <Link to="/login" className="text-black">
            <button className="google-button border-4 border-black bg-white px-14 py-3 rounded-full flex items-center font-semibold text-lg">
              Log In
            </button>
          </Link>
        </div>
        <div className="mt-56 flex">
          <p className="w-1/2 text-white text-4xl font-semibold leading-10">
            Follow all your favourite Feline friends from all around the world.
            🌎
          </p>
          <div className="m-auto">
            <img
              src={cat1}
              className="absolute top-96 right-20 w-32 h-32 rounded-full"
              alt="beau"
            />
            <img
              src={cat2}
              className="absolute top-44   w-32 h-32 rounded-full"
              alt="beau"
            />
            <img
              src={cat3}
              className="absolute top-3/4 right-96 w-32 h-32 rounded-full"
              alt="beau"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
