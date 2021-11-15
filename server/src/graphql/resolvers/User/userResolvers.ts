import { Request } from "express";
import { IResolvers } from "apollo-server-express";
import { User, Database, Cat } from "../../../lib/types";
import { authorise } from "../../../lib/utils";
import { UserArgs } from "./types";

export const userResolvers: IResolvers = {
  Query: {
    user: async (
      _root: undefined,
      { id }: UserArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<User> => {
      try {
        const user = await db.users.findOne({ _id: id });

        if (!user) {
          throw new Error("user cannot be found");
        }

        const viewer = await authorise(db, req);
        if (viewer && viewer._id === user._id) {
          user.authorized = true;
        }

        return user;
      } catch (error) {
        throw new Error(`Failed to query user - ${error}`);
      }
    },
  },
  Mutation: {},
  User: {
    id: (user: User): string => {
      return user._id;
    },
    catBucks: (user: User): number | null => {
      return user.authorized ? user.catBucks : null;
    },
    accounts: (user: User): Cat[] | null => {
      return user.accounts;
    },
  },
};
