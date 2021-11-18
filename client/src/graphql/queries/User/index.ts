import { gql } from "@apollo/client";

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
      contact
      catBucks
      accounts {
        id
        username
        profileName
        profileImage
        bio
        city
        country
        followers
        subscriptionPrice
      }
    }
  }
`;
