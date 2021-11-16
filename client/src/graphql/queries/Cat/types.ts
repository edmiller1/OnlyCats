export interface Cat_cat {
  __typename: "Cat";
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
}

export interface Cat {
  cat: Cat_cat;
}

export interface CatVariables {
  id: string;
}
