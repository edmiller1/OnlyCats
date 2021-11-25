import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { RANDOM_CATS } from "../../../../graphql/queries";
import { RandomCats as CatsData } from "../../../../graphql/queries/RandomCats/types";

export const RecommendedCats: React.FC = () => {
  const { data, loading, error } = useQuery<CatsData>(RANDOM_CATS);

  const recommendedCats = data ? data.randomCats : null;

  let recommendedCatsElement = recommendedCats ? (
    <div className="mx-10 my-5 h-96 rounded-2xl bg-gray-100">
      <h1 className="py-2 px-2 font-bold text-2xl">
        Other cats you might like
      </h1>
      <div>
        {recommendedCats?.map((cat) => (
          <Link to={`/cat/${cat.id}`}>
            <div className="flex items-center w-full px-3 py-5 cursor-pointer hover:bg-gray-200 transition-all">
              <img
                src={cat.profileImage}
                alt="cat avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="recommended-cat leading-none w-32">
                <h4 className="font-semibold">{cat.profileName}</h4>
                <span className="text-gray-500">@{cat.username}</span>
              </div>
              <div className="flex float-right ml-20">
                <button className="bg-main-purple rounded-3xl py-1 px-3 font-semibold text-white hover:bg-purple-4 transition-all">
                  Follow
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center mx-5 my-5 h-80 rounded-2xl bg-gray-100">
      <span className="text-6xl">🙀</span>
      <span className="mt-5 font-semibold text-base">
        Failed to query cats. Try again later.
      </span>
      <button className="mt-32">Reload</button>
    </div>
  );

  if (loading) {
    recommendedCatsElement = (
      <div className="flex flex-col justify-center items-center mx-5 my-5 h-80 rounded-2xl bg-gray-100">
        <i className="fas fa-spinner animate-spin text-main-purple text-4xl"></i>
      </div>
    );
  }

  return <div>{recommendedCatsElement}</div>;
};
