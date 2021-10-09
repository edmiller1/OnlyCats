import { Collection, ObjectId } from "mongodb";

export interface Post {
  _id: ObjectId;
  author: string;
  text: string;
  media?: string;
  datePosted: string;
  likes: number;
  comments: ObjectId[];
}

export interface Comment {
  _id: ObjectId;
  author: string;
  content: string;
  likes: number;
  replies: ObjectId[];
}

export interface Reply {
  _id: ObjectId;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  catBucks: number;
  accounts: Cat[];
  authorised?: boolean;
}

export interface Cat {
  _id: ObjectId;
  username: string;
  profileName: string;
  profileImage: string;
  bannerImage: string;
  bio: string;
  location: string;
  link: string;
  dateJoined: string;
  followers: number;
  subscriptionPrice: number;
  posts: Post[];
}

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  didRequest: boolean;
}

export interface Database {
  users: Collection<User>;
  cats: Collection<Cat>;
}
