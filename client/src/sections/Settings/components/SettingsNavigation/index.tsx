import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const SettingsNavigation: React.FC = () => {
  return (
    <div className="w-1/4 py-5">
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
  );
};
