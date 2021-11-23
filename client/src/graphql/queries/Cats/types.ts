export interface Cats_cats {
  __typename: "Cats";
  id: string;
  username: string;
  profileName: string;
  profileImage: string;
}

export interface Cats {
  cats: Cats_cats;
}

export interface CatVariables {
  limit: number;
}
