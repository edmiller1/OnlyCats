import { gql } from "@apollo/client";

export const CATS = gql`
  query Cats($limit: Number) {
    cats(limit: $limit) {
      id
      profileImage
      profileName
      username
    }
  }
`;
