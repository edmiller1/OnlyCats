import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/onlycats-logo.png";
import { Viewer } from "../../lib/types";
import { Menu } from "@headlessui/react";
import { MenuItems } from "./components";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader: React.FC<Props> = ({ viewer, setViewer }) => {
  const dropDownMenu =
    viewer.id && viewer.avatar ? (
      <div className="text-right flex items-center">
        <i className="far fa-bell mt-2 mr-10 text-2xl text-gray-400 cursor-pointer hover:text-gray-500 transition-all"></i>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <img
                referrerPolicy="no-referrer"
                src={viewer.avatar}
                alt="viewer avatar"
                className="mt-3 rounded-full w-9 h-9"
              />
            </Menu.Button>
          </div>
          <MenuItems viewer={viewer} setViewer={setViewer} />
        </Menu>
      </div>
    ) : (
      <div className="mt-2">
        <Link to="/login">
          <button className="border-1 border-gray-300 px-5 py-2 mr-2 rounded-full flex items-center text-gray-800 hover:bg-main-purple hover:text-white transition-all">
            <span>Login</span>
          </button>
        </Link>
      </div>
    );

  return (
    <div className="bg-white w-full h-20 border-gray-300 border-b-1">
      <div className="flex justify-between mx-5 mt-2 items-center">
        <Link to="/home">
          <img src={logo} alt="logo" className="h-16 w-16" />
        </Link>
        <div className="flex items-center">
          <div className="mr-10 pt-2 relative mx-auto text-gray-600">
            <input
              className="w-80 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          {dropDownMenu}
        </div>
      </div>
    </div>
  );
};
