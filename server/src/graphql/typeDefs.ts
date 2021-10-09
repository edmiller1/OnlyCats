import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Cat {
    id: ID!
    username: String!
    profileName: String!
    profileImage: String!
    bannerImage: String!
    bio: String!
    location: String!
    link: String!
    dateJoined: String!
    followers: String!
    subscriptionPrice: Float!
    posts: [Post!]
  }

  type Cats {
    total: Int!
    result: [Cats!]!
  }

  type Comment {
    id: ID!
    author: String!
    content: String!
    likes: Int!
    replies: [Reply!]
  }

  type Comments {
    total: Int!
    result: [Comment!]!
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

  type Posts {
    total: Int!
    result: [Post!]!
  }

  type Reply {
    id: ID!
    author: String!
    content: String!
    likes: Int!
  }

  type Replies {
    total: Int!
    result: [Reply!]!
  }

  type User {
    id: ID!
    token: String!
    name: String!
    avatar: String!
    contact: String!
    catBucks: Int!
    accounts: [Cat!]!
  }

  type Viewer {
    id: ID!
    token: String
    avatar: String
    didRequest: Boolean!
  }

  input LogInInput {
    code: String!
  }

  type Query {
    authUrl: String!
    users: [User!]!
    user(id: ID!): User!
    cat(id: ID!): Cat!
  }

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
  }
`;
