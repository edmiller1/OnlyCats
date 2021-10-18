import React from "react";
import { AppHeader } from "../../components/";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
}

export const Home: React.FC<Props> = ({ viewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} />
      <h1>Home</h1>
    </div>
  );
};
