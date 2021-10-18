import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://i.imgur.com/a5CaqSQh.jpg"
        alt="404 cat"
        style={{ width: "500px", height: "525px" }}
      />
      <h1 className="text-2xl text-purple-700 font-bold">404 Error</h1>
      <h1 className="text-6xl font-bold">Page not found</h1>
      <span className="text-gray-400">
        Sorry, we couldn't find the page you were looking for.
      </span>
      <Link to="/" className="mt-10">
        <span className="text-purple-500 cursor-pointer">
          Go back home {"->"}
        </span>
      </Link>
    </div>
  );
};
