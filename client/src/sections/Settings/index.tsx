import React from "react";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const Settings: React.FC<Props> = ({ viewer, setViewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <div className="mx-10 my-10">
        <h1>Settings</h1>
      </div>
    </div>
  );
};
