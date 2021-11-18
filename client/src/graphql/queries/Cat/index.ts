import { gql } from "@apollo/client";

export const CAT = gql`
  query Cat($id: ID!) {
    cat(id: $id) {
      id
      username
      profileName
      profileImage
      bannerImage
      bio
      city
      country
      link
      dateJoined
      followers
      subscriptionPrice
      owner
    }
  }
`;
