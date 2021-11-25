import React from "react";
import { Tab } from "@headlessui/react";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const Settings: React.FC<Props> = ({ viewer, setViewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <div className="mx-10 my-10">
        <h1 className="text-4xl font-semibold">Settings</h1>
        <div className="w-5/6 flex m-auto border-t-1 border-r-1 border-l-1 rounded-2xl shadow-xl">
          <div className="w-1/4 py-5 border-r-1 h-full">
            <Tab.Group>
              <Tab.List>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full flex items-center py-2.5 text-base font-semibold",
                      selected
                        ? "border-l-4 border-main-purple bg-purple-100"
                        : "hover:bg-gray-200 transition-all"
                    )
                  }
                >
                  <img
                    src="https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA="
                    alt="cat"
                    className="w-16 h-16 rounded-full ml-3"
                  />
                  <span className="pl-2 text-base">Milo</span>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full flex items-center py-2.5 text-base font-semibold",
                      selected
                        ? "border-l-4 border-main-purple bg-purple-100"
                        : "hover:bg-gray-100 transition-all"
                    )
                  }
                >
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-beautiful-tabby-cat-picture-id1291082120?b=1&k=20&m=1291082120&s=170667a&w=0&h=GdTZThfTc1LSGBMc7YBPtZF9W7Rrc6Q9GOTX5PB608U="
                    alt="cat"
                    className="w-16 h-16 rounded-full ml-3"
                  />
                  <span className="pl-2 text-base">Jeff</span>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full flex items-center py-2.5 text-base font-semibold",
                      selected
                        ? "border-l-4 border-main-purple bg-purple-100"
                        : "hover:bg-gray-100 transition-all"
                    )
                  }
                >
                  <img
                    src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="cat"
                    className="w-16 h-16 rounded-full ml-3"
                  />
                  <span className="pl-2 text-base">Sanchez</span>
                </Tab>
              </Tab.List>
            </Tab.Group>
          </div>
          <div className="w-3/4 py-5 px-3">
            <h2 className="text-xl">Profile - Milo</h2>
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
                  />
                  <label htmlFor="username">About (Bio)</label>
                  <textarea
                    className="h-24 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    id="forms-labelOverInputCode"
                  />
                </div>
                <div className="w-2/6 flex justify-center">
                  <span className="text-base">photo</span>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="person"
                    className="h-44 w-44 rounded-full cursor-pointer object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
