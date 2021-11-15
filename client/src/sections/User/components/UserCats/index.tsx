import React from "react";
import { User as UserData } from "../../../../graphql/queries/User/types";
import { AddNewCat } from "..";

interface Props {
  user: UserData["user"];
}

let userCatsElement: any;

export const UserCats: React.FC<Props> = ({ user }) => {
  if (user.accounts?.length === 0) {
    userCatsElement = (
      <div className="w-1/2">
        <div className="flex flex-col justify-center -mb-8">
          <h1 className="text-2xl text-white m-auto">
            Create a Profile for your fluffy friends!
          </h1>
          <i className="fas fa-chevron-down animate-bounce pt-1 text-2xl text-white m-auto"></i>
        </div>
        <div className="flex justify-center">
          <AddNewCat />
        </div>
      </div>
    );
  }

  if (user.accounts?.length === 3) {
    userCatsElement = (
      <div className="w-1/2 flex justify-center">
        {user.accounts?.map((cat) => (
          <div className="w-1/3 h-80 mx-5 bg-white mt-10 -mb-5 rounded-2xl cursor-pointer hover:shadow-2xl transition-all">
            <img
              src={cat.profileImage}
              alt="Cat"
              className="m-auto my-2 h-36 w-36 rounded-full"
            />
            <div className="flex flex-col px-5">
              <h3 className="text-lg text-gray-700">{cat.profileName}</h3>
              <span className="text-gray-400 text-xs py-1">{cat.bio}</span>
              <span className="text-gray-400 text-xs py-1">
                {cat.city}, {cat.country}
              </span>
              <span className="pt-6 text-sm text-gray-600">
                Followers: {cat.followers}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (user.accounts?.length === 1) {
    userCatsElement = (
      <div className="w-1/2 flex justify-center">
        {user.accounts?.map((cat) => (
          <div className="w-1/3 h-80 mx-5 bg-white mt-10 -mb-5 rounded-2xl cursor-pointer hover:shadow-2xl transition-all">
            <img
              src={cat.profileImage}
              alt="Cat"
              className="m-auto my-2 h-36 w-36 rounded-full"
            />
            <div className="flex flex-col px-5">
              <h3 className="text-lg text-gray-700">{cat.profileName}</h3>
              <span className="text-gray-400 text-xs py-1">{cat.bio}</span>
              <span className="text-gray-400 text-xs py-1">
                {cat.city}, {cat.country}
              </span>
              <span className="pt-6 text-sm text-gray-600">
                Followers: {cat.followers}
              </span>
            </div>
          </div>
        ))}
        <AddNewCat />
        <AddNewCat />
      </div>
    );
  }

  if (user.accounts?.length === 2) {
    userCatsElement = (
      <div className="w-1/2 flex justify-center">
        {user.accounts?.map((cat) => (
          <div className="w-1/3 h-80 mx-5 bg-white mt-10 -mb-5 rounded-2xl cursor-pointer hover:shadow-2xl transition-all">
            <img
              src={cat.profileImage}
              alt="Cat"
              className="m-auto my-2 h-36 w-36 rounded-full"
            />
            <div className="flex flex-col px-5">
              <h3 className="text-lg text-gray-700">{cat.profileName}</h3>
              <span className="text-gray-400 text-xs py-1">{cat.bio}</span>
              <span className="text-gray-400 text-xs py-1">
                {cat.city}, {cat.country}
              </span>
              <span className="pt-6 text-sm text-gray-600">
                Followers: {cat.followers}
              </span>
            </div>
          </div>
        ))}
        <AddNewCat />
      </div>
    );
  }

  return <div className="w-full flex justify-center">{userCatsElement}</div>;
};
