import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/onlycats_logo.png";
import { Viewer } from "../../lib/types";
import { Menu } from "@headlessui/react";
import { MenuItems } from "../../components";

interface Props {
  viewer: Viewer;
}

export const AppHeader: React.FC<Props> = ({ viewer }) => {
  return (
    <div className="w-full h-20 border-gray-400 shadow-lg">
      <div className="flex justify-between mx-5 mt-2 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-16 w-16" />
        </Link>
        <div className="mt-2">
          <Link to="/login">
            <button className="border-1 border-gray-300 px-5 py-2 mr-2 rounded-full flex items-center hover:bg-main-purple hover:text-gray-900 transition-all">
              <span className="text-gray-800">Login</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-56 text-right fixed top-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
              Options
            </Menu.Button>
          </div>
          <MenuItems viewer={viewer} />
        </Menu>
      </div>
    </div>
  );
};
