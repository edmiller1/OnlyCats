import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Viewer } from "../../../../lib/types";
import { LOG_OUT } from "../../../../graphql/mutations";
import { LogOut as LogOutData } from "../../../../graphql/mutations/LogOut/types";
import {
  displayErrorMessage,
  displaySuccessNotification,
} from "../../../../lib/util/index";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const MenuItems: React.FC<Props> = ({ viewer, setViewer }) => {
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        displaySuccessNotification("Logged Out!");
      }
    },
    onError: () => {
      displayErrorMessage("Sorry! We cou;dn't log you out. Try again later.");
    },
  });

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <Link to={`/user/${viewer.id}`}>
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Account Settings
                </button>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="submit"
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block w-full text-left px-4 py-2 text-sm"
                )}
                onClick={handleLogOut}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  );
};
