import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CAT } from "../../graphql/queries";
import { Cat as CatData, CatVariables } from "../../graphql/queries/Cat/types";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";
import { CatProfile } from "./components";
import {
  AvatarSkeleton,
  PageSkeleton,
  ErrorNotification,
} from "../../components";
import { NotFound } from "../NotFound";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

interface MatchParams {
  id: string;
}

export const Cat = ({
  viewer,
  setViewer,
  match,
}: Props & RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<CatData, CatVariables>(CAT, {
    variables: {
      id: match.params.id,
    },
  });

  const cat = data ? data.cat : null;
  const isCatOwner = viewer.id === cat?.owner;

  const catProfileElement = cat ? (
    <CatProfile cat={cat} isCatOwner={isCatOwner} />
  ) : (
    <NotFound />
  );

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
      {catProfileElement}
    </div>
  );
};
