import React from "react";
import { useQuery } from "@apollo/client";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

export interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const Cat: React.FC<Props> = ({ viewer, setViewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <h1>Cat</h1>
    </div>
  );
};
