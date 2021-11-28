import React from "react";
import { Route, RouteComponentProps, useRouteMatch } from "react-router-dom";
import { AppHeader, AvatarSkeleton, PageSkeleton } from "../../components";
import { NotFound } from "..";
import { Viewer } from "../../lib/types";
import { ProfileSettingsBlank, SettingsNavigation } from "./components";
import { useQuery } from "@apollo/client";
import { USER } from "../../graphql/queries";
import {
  User as UserData,
  UserVariables,
} from "../../graphql/queries/User/types";

interface ViewerProps {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

interface MatchParams {
  id: string;
}

export const Settings = ({
  viewer,
  setViewer,
  match,
}: ViewerProps & RouteComponentProps<MatchParams>) => {
  const { url, path } = useRouteMatch();
  console.log("path", path);
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
    },
  });

  const user = data ? data.user : null;
  const viewerIsUser = viewer.id === match.params.id;

  const catSettingsElement =
    user && viewerIsUser ? (
      <div className="mx-10 mt-10">
        <h1 className="text-4xl font-semibold">Settings</h1>
        <div className="w-5/6 flex m-auto border-t-1 border-r-1 border-l-1 rounded-2xl shadow-xl">
          <SettingsNavigation user={user} url={url} />
          <ProfileSettingsBlank />
        </div>
        <div className="h-16"></div>
      </div>
    ) : (
      <NotFound />
    );

  if (loading) {
    return (
      <div>
        <div className="absolute top-28 left-72">
          <AvatarSkeleton />
        </div>
        <PageSkeleton />
      </div>
    );
  }

  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      {catSettingsElement}
    </div>
  );
};
