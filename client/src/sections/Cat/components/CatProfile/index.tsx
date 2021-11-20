import React from "react";
import { Cat as CatData } from "../../../../graphql/queries/Cat/types";

interface Props {
  cat: CatData["cat"];
  isCatOwner: boolean;
}

export const CatProfile: React.FC<Props> = ({ cat, isCatOwner }) => {
  return <div></div>;
};
