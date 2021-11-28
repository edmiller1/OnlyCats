import React from "react";

export const ProfileSettingsBlank: React.FC = () => {
  return (
    <div className="w-3/4 flex flex-col justify-center items-center py-5 px-5 border-l-1">
      <h1 className="text-3xl">
        Select one of your cats to start editing their account.
      </h1>
      <h1 className="text-6xl">🐱</h1>
    </div>
  );
};
