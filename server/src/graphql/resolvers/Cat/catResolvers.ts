import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Cat, Database } from "../../../lib/types";

export const catResolvers: IResolvers = {
  Query: {},
  Mutation: {},
  Cat: {
    id: (cat: Cat): ObjectId => {
      return cat._id;
    },
  },
};
