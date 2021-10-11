export interface LogIn {
  id: string | null;
  token: string | null;
  avatar: string | null;
  didRequest: boolean;
}

export interface LogInInput {
  code: string;
}

export interface LogInVariables {
  input?: LogInInput | null;
}
