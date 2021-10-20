import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Viewer } from "../../lib/types";
import { LOG_OUT } from "../../graphql/mutations";
import { LogOut as LogOutData } from "../../graphql/mutations/LogOut/types";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const MenuItems: React.FC<Props> = ({ viewer, setViewer }) => {
  const [logOut, { loading: logOutLoading }] = useMutation<LogOutData>(
    LOG_OUT,
    {
      onCompleted: (data) => {
        if (data && data.logOut) {
          setViewer(data.logOut);
        }
      },
    }
  );

  const handleLogOut = () => {
    logOut();
  };

  // if (logOutLoading) {
  //   return (
  //     <div
  //       className="flex flex-col justify-center items-center min-h-full"
  //       style={{ height: "100vh" }}
  //     >
  //       <svg
  //         aria-hidden="true"
  //         focusable="false"
  //         data-prefix="fas"
  //         data-icon="spinner"
  //         className="animate-spin svg-inline--fa fa-spinner fa-w-16 w-20 h-20 text-purple-300"
  //         role="img"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 512 512"
  //       >
  //         <path
  //           fill="currentColor"
  //           d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
  //         ></path>
  //       </svg>
  //       <span className="text-2xl text-gray-400">Logging out...</span>
  //     </div>
  //   );
  // }

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
