export interface LogIn_logIn {
  __typename: "Viewer";
  id: string | null;
  token: string | null;
  avatar: string;
  didRequest: boolean;
}

export interface LogIn {
  logIn: LogIn_logIn;
}

export interface LogInInput {
  code: string;
}

export interface LogInVariables {
  input?: LogInInput | null;
}
