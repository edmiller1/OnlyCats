import React from "react";

export const AddNewCat: React.FC = () => {
  return (
    <div className="addCat flex justify-center items-center cursor-pointer py-9 bg-gray-100 border-r-8 border-purple-2 rounded-t-sm rounded-b-sm hover:text-gray-800">
      <i className="fas fa-plus text-4xl text-gray-300"></i>
    </div>
  );
};
