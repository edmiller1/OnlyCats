import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { User as UserData } from "../../../../graphql/queries/User/types";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  user: UserData["user"];
  url: string;
}

export const SettingsNavigation: React.FC<Props> = ({ user, url }) => {
  console.log(url);
  return (
    <div className="w-1/4 py-5">
      <div>
        {user.accounts?.map((cat) => (
          <NavLink
            to={`/cat/${cat.id}`}
            className="settings-nav"
            activeClassName="settings-nav-active"
          >
            <img
              src={cat.profileImage}
              alt="cat"
              className="w-16 h-16 rounded-full ml-3"
            />
            <span className="pl-2 text-base">{cat.profileName}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
