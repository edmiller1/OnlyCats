export interface LogOut_logOut {
  __typename: "Viewer";
  id: string | null;
  token: string | null;
  avatar: string;
  didRequest: boolean;
}

export interface LogOut {
  logOut: LogOut_logOut;
}
