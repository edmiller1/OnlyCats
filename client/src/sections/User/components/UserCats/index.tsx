import React from "react";
import { Link } from "react-router-dom";
import { User as UserData } from "../../../../graphql/queries/User/types";
import { AddNewCat } from "..";

interface Props {
  user: UserData["user"];
}

let userCatsElement: any;

export const UserCats: React.FC<Props> = ({ user }) => {
  if (user.accounts?.length === 0) {
    userCatsElement = (
      <div>
        <AddNewCat />
        <hr />
        <AddNewCat />
        <hr />
        <AddNewCat />
      </div>
    );
  }

  if (user.accounts?.length === 1) {
    userCatsElement = (
      <div>
        {user.accounts?.map((cat) => (
          <div>
            <div className="flex justify-between items-center py-4 px-7 border-r-8 border-main-purple rounded-t-sm rounded-b-sm">
              <div className="flex items-center">
                <img
                  src={cat.profileImage}
                  alt="cat avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col px-5">
                  <span className="text-base font-semibold">
                    {cat.profileName}
                  </span>
                  <span className="text-gray-500">
                    Followers: {cat.followers}
                  </span>
                  <span className="text-gray-500">{cat.bio}</span>
                </div>
              </div>
              <div>
                <Link to={`/cat/${cat.id}`}>
                  <button className="py-2 px-4 rounded-lg text-white  bg-main-purple hover:bg-purple-4 transition-all">
                    profile
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-500" />
          </div>
        ))}
        <AddNewCat />
        <AddNewCat />
      </div>
    );
  }

  if (user.accounts?.length === 2) {
    userCatsElement = (
      <div>
        {user.accounts?.map((cat) => (
          <div>
            <div className="flex justify-between items-center py-4 px-7 border-r-8 border-main-purple rounded-t-sm rounded-b-sm">
              <div className="flex items-center">
                <img
                  src={cat.profileImage}
                  alt="cat avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col px-5">
                  <span className="text-base font-semibold">
                    {cat.profileName}
                  </span>
                  <span className="text-gray-500">
                    Followers: {cat.followers}
                  </span>
                  <span className="text-gray-500">{cat.bio}</span>
                </div>
              </div>
              <div>
                <Link to={`/cat/${cat.id}`}>
                  <button className="py-2 px-4 rounded-lg text-white  bg-main-purple hover:bg-purple-4 transition-all">
                    profile
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-500" />
          </div>
        ))}
        <AddNewCat />
      </div>
    );
  }

  if (user.accounts?.length === 3) {
    userCatsElement = (
      <div>
        {user.accounts?.map((cat) => (
          <div>
            <div className="flex justify-between items-center py-4 px-7 border-r-8 border-main-purple rounded-t-sm rounded-b-sm">
              <div className="flex items-center">
                <img
                  src={cat.profileImage}
                  alt="cat avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col px-5">
                  <span className="text-base font-semibold">
                    {cat.profileName}
                  </span>
                  <span className="text-gray-500">
                    Followers: {cat.followers}
                  </span>
                  <span className="text-gray-500">{cat.bio}</span>
                </div>
              </div>
              <div>
                <Link to={`/cat/${cat.id}`}>
                  <button className="py-2 px-4 rounded-lg text-white  bg-main-purple hover:bg-purple-4 transition-all">
                    profile
                  </button>
                </Link>
              </div>
            </div>
            <hr className="bg-gray-500" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="my-6">
      <h1 className="text-xl font-semibold">Cats</h1>
      <div className="flex flex-col rounded-xl shadow-2xl bg-white">
        {userCatsElement}
      </div>
    </div>
  );
};
