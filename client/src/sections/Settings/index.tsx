import React from "react";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";
import { ProfileSettings, SettingsNavigation } from "./components";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const Settings: React.FC<Props> = ({ viewer, setViewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <div className="mx-10 mt-10">
        <h1 className="text-4xl font-semibold">Settings</h1>
        <div className="w-5/6 flex m-auto border-t-1 border-r-1 border-l-1 rounded-2xl shadow-xl">
          <SettingsNavigation />
          <ProfileSettings />
        </div>
        <div className="h-16"></div>
      </div>
    </div>
  );
};
