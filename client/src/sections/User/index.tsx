import React from "react";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const User: React.FC<Props> = ({ viewer, setViewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <h1>User</h1>
    </div>
  );
};
