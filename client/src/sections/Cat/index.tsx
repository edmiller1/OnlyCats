import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CAT } from "../../graphql/queries";
import { Cat as CatData, CatVariables } from "../../graphql/queries/Cat/types";
import { AppHeader } from "../../components";
import { Viewer } from "../../lib/types";

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
  console.log(cat);
  return (
    <div>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <h1>Name: {cat?.profileName}</h1>
    </div>
  );
};
