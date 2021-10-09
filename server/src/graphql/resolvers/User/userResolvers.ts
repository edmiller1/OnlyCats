//import { Request } from "express";
import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Cat, User, Database } from "../../../lib/types";
import { UserArgs, UserAccountsData } from "./types";

export const userResolvers: IResolvers = {
  Query: {
    users: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<User[]> => {
      const users = await db.users.find({}).toArray();

      return users;
    },
    user: async (
      _root: undefined,
      { id }: UserArgs,
      { db }: { db: Database }
    ): Promise<User> => {
      try {
        const user = await db.users.findOne({ _id: id });

        if (!user) {
          throw new Error("user cannot be found");
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
  },
};
