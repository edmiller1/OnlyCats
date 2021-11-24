import { gql } from "@apollo/client";

export const RANDOM_CATS = gql`
  query randomCats {
    randomCats {
      id
      profileImage
      profileName
      username
    }
  }
`;
