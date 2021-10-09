import { Cat } from "../../../lib/types";

export interface UserArgs {
  id: string;
}

export interface UserAccountsData {
  total: number;
  result: Cat[];
}
