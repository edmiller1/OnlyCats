import React from "react";
import { UserCats } from "..";
import { User as UserData } from "../../../../graphql/queries/User/types";

interface Props {
  user: UserData["user"];
}

export const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="profile-gradient flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-between items-center px-5 py-4">
          <div className="flex">
            <img
              className="rounded-full h-36 w-36"
              src={user.avatar}
              alt="user avatar"
            />
            <div className="flex flex-col pt-3 px-3">
              <h2 className="text-3xl">{user.name}</h2>
              <h3 className="text-xl text-gray-600 pl-1">{user.contact}</h3>
              <h3 className="text-lg text-gray-600 ">
                CatBucks: {user.catBucks}
              </h3>
            </div>
          </div>
          <div>
            <button className="py-3 px-6 border-1 border-gray-300 rounded-full text-gray-800 hover:bg-main-purple hover:text-white transition-all">
              <span className="text-lg">+ Add CatBucks</span>
            </button>
          </div>
        </div>
      </div>
      <UserCats user={user} />
    </div>
  );
};
