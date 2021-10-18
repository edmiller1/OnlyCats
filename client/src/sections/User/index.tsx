import React from "react";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
}

export const User: React.FC<Props> = ({ viewer }) => {
  return (
    <div>
      <AppHeader viewer={viewer} />
      <h1>User</h1>
    </div>
  );
};
