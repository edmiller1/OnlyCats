import React from "react";
import { UserCats } from "..";
import { User as UserData } from "../../../../graphql/queries/User/types";

interface Props {
  user: UserData["user"];
}

export const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="px-20 py-10">
      <div className="flex justify-center rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center w-full">
          <div className="flex px-10 py-5">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col px-5">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <span className="text-gray-600 text-base">{user.contact}</span>
              <span className="text-black text-base font-semibold">
                Account Balance: &nbsp;
                <span className="text-gray-600 text-base">{user.catBucks}</span>
              </span>
            </div>
          </div>
          <div className="px-10 py-5">
            <button className="py-2 px-4 rounded-lg text-white text-base bg-main-purple hover:bg-purple-600 transition-all">
              Add catbucks
            </button>
          </div>
        </div>
      </div>
      <UserCats user={user} />
    </div>
  );
};
