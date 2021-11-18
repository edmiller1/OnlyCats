import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  AppHeader,
  AvatarSkeleton,
  ErrorNotification,
  PageSkeleton,
} from "../../components";
import { Viewer } from "../../lib/types";
import { useQuery } from "@apollo/client";
import { USER } from "../../graphql/queries";
import {
  User as UserData,
  UserVariables,
} from "../../graphql/queries/User/types";
import { UserProfile } from "./components";
import { NotFound } from "../NotFound";

interface ViewerProps {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

interface MatchParams {
  id: string;
}

export const User = ({
  viewer,
  setViewer,
  match,
}: ViewerProps & RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
    },
  });

  const user = data ? data.user : null;
  console.log(user);
  const viewerIsUser = viewer.id === match.params.id;

  const userProfileElement =
    user && viewerIsUser ? <UserProfile user={user} /> : <NotFound />;

  if (error) {
    <div>
      <ErrorNotification
        title="Uh Oh!"
        message="Failed to get profile data. Please Try Again"
      />
      <div className="absolute top-28 left-72">
        <AvatarSkeleton />
      </div>
      <PageSkeleton />
    </div>;
  }

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
      {userProfileElement}
    </div>
  );
};
