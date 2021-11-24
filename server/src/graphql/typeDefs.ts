import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Cat {
    id: ID!
    username: String!
    profileName: String!
    profileImage: String!
    bannerImage: String!
    bio: String!
    city: String!
    country: String!
    link: String!
    dateJoined: String!
    followers: Int!
    subscriptionPrice: Float!
    owner: String!
    posts: [Post!]
  }

  type Comment {
    id: ID!
    author: String!
    content: String!
    likes: Int!
    replies: [Reply!]
  }

  type Post {
    id: ID!
    author: String!
    text: String!
    media: String
    datePosted: String!
    likes: Int!
    comments: [Comment!]
  }

  type Reply {
    id: ID!
    author: String!
    content: String!
    likes: Int!
  }

  type User {
    id: ID!
    name: String!
    avatar: String!
    contact: String!
    catBucks: Int
    accounts: [Cat!]
  }

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  input LogInInput {
    code: String!
  }

  type Query {
    authUrl: String!
    user(id: ID!): User!
    cat(id: ID!): Cat!
    randomCats: [Cat!]!
  }

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
  }
`;
