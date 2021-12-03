import React from "react";
import { NavLink } from "react-router-dom";
import { User as UserData } from "../../../../graphql/queries/User/types";

interface Props {
  user: UserData["user"];
  url: string;
}

export const SettingsNavigation = ({ user, url }: Props) => {
  return (
    <div className="w-1/4 py-2">
      <div>
        {user.accounts?.map((cat) => (
          <div key={cat.id}>
            <NavLink
              to={`${url}/${cat.id}`}
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
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
