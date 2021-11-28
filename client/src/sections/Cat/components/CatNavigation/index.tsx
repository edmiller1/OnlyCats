import React from "react";
import { Link } from "react-router-dom";
import { Cat as CatData } from "../../../../graphql/queries/Cat/types";

interface Props {
  cat: CatData["cat"];
  isCatOwner: boolean;
}

export const CatNavigation: React.FC<Props> = ({ cat, isCatOwner }) => {
  const additionalInfoElement = isCatOwner ? (
    <ul className="w-40">
      <li className="text-2xl my-6 pl-5 pr-2 cursor-pointer rounded-3xl hover:bg-gray-200 transition-all">
        <i className="fas fa-home mr-2"></i>Home
      </li>
      <Link to={`/user/${cat.owner}`}>
        <li className="text-2xl my-6 pl-5 pr-2 cursor-pointer rounded-3xl text-gray-900 hover:bg-gray-200 transition-all">
          <i className="fas fa-paw mr-2"></i>Profile
        </li>
      </Link>
      <Link to={`/user/${cat.owner}/settings`}>
        <li className="text-2xl my-6 pl-5 pr-2 cursor-pointer rounded-3xl text-gray-900 hover:bg-gray-200 transition-all">
          <i className="fas fa-cog mr-2"></i>Settings
        </li>
      </Link>
    </ul>
  ) : (
    <ul className="w-40">
      <li className="text-2xl my-6 pl-5 pr-2 cursor-pointer rounded-3xl hover:bg-gray-200 transition-all">
        <i className="fas fa-home mr-2"></i>Home
      </li>
    </ul>
  );

  return <div className="mx-5">{additionalInfoElement}</div>;
};
