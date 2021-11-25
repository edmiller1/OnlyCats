import React from "react";
import { Tab } from "@headlessui/react";
import { Cat as CatData } from "../../../../graphql/queries/Cat/types";
import { CatNavigation, RecommendedCats } from "..";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  isCatOwner: boolean;
  cat: CatData["cat"];
}

export const CatProfile: React.FC<Props> = ({ cat, isCatOwner }) => {
  const additionalProfileInfo = !isCatOwner ? (
    <div className="float-right py-4 px-8">
      <button className="bg-main-purple rounded-3xl py-2 px-5 font-semibold text-white hover:bg-purple-4 transition-all">
        Follow
      </button>
    </div>
  ) : (
    <div className="flex float-right py-4 px-8">
      <button className="bg-main-purple rounded-3xl mr-2 py-2 px-5 font-semibold text-white hover:bg-purple-4 transition-all">
        New Post
      </button>
    </div>
  );

  return (
    <div className="pageLength flex w-full">
      <div className="w-3/12 border-1">
        <CatNavigation cat={cat} isCatOwner={isCatOwner} />
      </div>
      <div className="w-5/12 border-1 overflow-y-auto">
        <div>
          <img
            src={cat.bannerImage}
            alt="banner"
            className="w-full h-72 object-cover"
          />
          <div className="rounded-full absolute top-72 mx-4 border-4 border-white">
            <img
              src={cat.profileImage}
              alt="profile"
              className="rounded-full w-40 h-40"
            />
          </div>
          {additionalProfileInfo}
        </div>
        <div className="mt-24 ml-6">
          <div className="cat-profile">
            <h3 className="font-extrabold">{cat.profileName}</h3>
            <span className="text-gray-500 text-base">@{cat.username}</span>
          </div>
          <div className="py-5">
            <span className="text-base">{cat.bio}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-gray-500 text-lg"></i>
            <span className="px-1 text-base text-gray-500">
              {cat.city}, {cat.country}
            </span>
            <span className="mx-2">|</span>
            <i className="fas fa-link text-gray-500 text-lg"></i>
            <span className="px-1 text-base text-gray-500">
              <a href={cat.link}>Instagram</a>
            </span>
            <span className="mx-2">|</span>
            <i className="fas fa-calendar-alt text-gray-500 text-lg"></i>
            <span className="px-1 text-base text-gray-500">
              {cat.dateJoined}
            </span>
          </div>
          <div className="py-5">
            <span className="font-bold text-base">
              Followers: {cat.followers}
            </span>
          </div>
        </div>
        <div className="w-full border-b-1">
          <Tab.Group>
            <Tab.List className="flex">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base text-gray-500 font-semibold",
                    selected
                      ? "border-b-4 border-main-purple"
                      : "hover:bg-gray-200 transition-all"
                  )
                }
              >
                Posts
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base text-gray-500 font-semibold",
                    selected
                      ? "border-b-4 border-main-purple"
                      : "hover:bg-gray-200 transition-all"
                  )
                }
              >
                Comments
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base text-gray-500 font-semibold ",
                    selected
                      ? "border-b-4 border-main-purple"
                      : "hover:bg-gray-200 transition-all"
                  )
                }
              >
                Media
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>
      </div>
      <div className="w-4/12 border-1">
        <RecommendedCats />
      </div>
    </div>
  );
};
