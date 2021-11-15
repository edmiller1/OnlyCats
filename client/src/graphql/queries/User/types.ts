import { Cat } from "../../../lib/types";

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  contact: string;
  catBucks: number | null;
  accounts: Cat[] | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
}
