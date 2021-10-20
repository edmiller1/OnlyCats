import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/onlycats_logo.png";
import { Viewer } from "../../lib/types";
import { Menu } from "@headlessui/react";
import { MenuItems } from "../../components";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader: React.FC<Props> = ({ viewer, setViewer }) => {
  const dropDownMenu =
    viewer.id && viewer.avatar ? (
      <div className="w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <img
                referrerPolicy="no-referrer"
                src={viewer.avatar}
                alt="viewer avatar"
                className="rounded-full w-16 h-16"
              />
            </Menu.Button>
          </div>
          <MenuItems viewer={viewer} setViewer={setViewer} />
        </Menu>
      </div>
    ) : (
      <div className="mt-2">
        <Link to="/login">
          <button className="border-1 border-gray-300 px-5 py-2 mr-2 rounded-full flex items-center hover:bg-main-purple hover:text-gray-900 transition-all">
            <span className="text-gray-800">Login</span>
          </button>
        </Link>
      </div>
    );

  return (
    <div className="w-full h-20 border-gray-400 shadow-lg">
      <div className="flex justify-between mx-5 mt-2 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-16 w-16" />
        </Link>
        {dropDownMenu}
      </div>
    </div>
  );
};
