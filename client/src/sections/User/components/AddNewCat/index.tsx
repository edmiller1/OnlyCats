import React from "react";

export const AddNewCat: React.FC = () => {
  return (
    <div className="w-1/3 h-80 mx-5 flex justify-center items-center bg-gray-200 mt-10 -mb-5 rounded-2xl cursor-pointer hover:shadow-2xl hover:bg-gray-100 transition-all">
      <i className="fas fa-plus text-gray-400 text-6xl"></i>
    </div>
  );
};
