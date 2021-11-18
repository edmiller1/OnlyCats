export interface Viewer {
  id: string | null;
  token: string | null;
  avatar: string | null;
  didRequest: boolean;
}

export interface Cat {
  id: string;
  username: string;
  profileName: string;
  profileImage: string;
  bannerImage: string;
  bio: string;
  city: string;
  country: string;
  link: string;
  dateJoined: string;
  followers: number;
  subscriptionPrice: number;
  owner: string;
}
