export interface RandomCats_randomcats {
  __typename: "RandomCats";
  id: string;
  username: string;
  profileName: string;
  profileImage: string;
}

export interface RandomCats {
  randomCats: RandomCats_randomcats[];
}
