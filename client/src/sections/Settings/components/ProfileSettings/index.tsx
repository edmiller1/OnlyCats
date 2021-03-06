import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CAT } from "../../../../graphql/queries";
import {
  Cat as CatData,
  CatVariables,
} from "../../../../graphql/queries/Cat/types";

export const ProfileSettings = () => {
  const { catId }: any = useParams();
  const { data, loading, error } = useQuery<CatData, CatVariables>(CAT, {
    variables: {
      id: catId,
    },
  });

  const cat = data ? data.cat : null;

  return (
    <div className="w-3/4 py-5 px-5 border-l-1">
      <h2 className="text-xl">
        Profile - <span className="font-bold">{cat?.profileName}</span>
      </h2>
      <span className="text-gray-500">
        Note: This information will be displayed publicly.
      </span>
      <div className="mt-5">
        <div className="flex items-center">
          <div className="flex flex-col w-4/6">
            <label htmlFor="username">Username</label>
            <input
              className="h-10 mb-5 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text"
              id="forms-labelOverInputCode"
              value={cat?.username}
            />
            <label htmlFor="username">About (Bio)</label>
            <textarea
              className="h-24 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              id="forms-labelOverInputCode"
              value={cat?.bio}
            />
            <span className="text-gray-500 text-xs">
              A brief description for your cat's profile.
            </span>
          </div>
          <div className="w-2/6 flex justify-center">
            <span className="text-base">photo</span>
            <img
              src={cat?.profileImage}
              alt="person"
              className="h-44 w-44 rounded-full cursor-pointer object-cover"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="profileName">Name</label>
          <input
            className="h-10 mb-5 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            id="forms-labelOverInputCode"
            value={cat?.profileName}
          />
          <div className="flex">
            <div className="flex flex-col w-1/2 mr-3">
              <label htmlFor="city">City</label>
              <input
                className="h-10 mb-5 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="forms-labelOverInputCode"
                value={cat?.city}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label htmlFor="country">Country</label>
              <input
                className="h-10 mb-5 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="forms-labelOverInputCode"
                value={cat?.country}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 mr-3">
              <label htmlFor="link">URL</label>
              <input
                className="h-10 px-3 text-xs placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="forms-labelOverInputCode"
                value={cat?.link.trim()}
              />
              <span className="text-gray-500 text-xs">
                It's best to just copy and paste the link to your cats preferred
                social media platform.
              </span>
            </div>
            <div className="flex flex-col w-1/2 ml-3">
              <label className="block text-left" style={{ maxWidth: "400px" }}>
                <span className="text-gray-700">Social Media</span>
                <select className="form-select block w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Youtube</option>
                  <option>Twitch</option>
                  <option>TikTok</option>
                </select>
                <span className="text-gray-500 text-xs">
                  Only one social media can be chosen at one time.
                </span>
              </label>
            </div>
          </div>
          <div className="mt-10">
            <h3>Banner Image</h3>
            <img
              src={cat?.bannerImage}
              alt="banner"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
          <div className="mt-10 flex justify-end">
            <button className="py-2 px-5 bg-main-purple rounded-xl text-white hover:bg-purple-4 transition-all">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
