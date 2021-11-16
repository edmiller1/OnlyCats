import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Cat, Database } from "../../../lib/types";
import { CatArgs } from "./types";

export const catResolvers: IResolvers = {
  Query: {
    cat: async (
      _root: undefined,
      { id }: CatArgs,
      { db }: { db: Database }
    ): Promise<Cat | null> => {
      try {
        const cat = db.cats.findOne({ _id: new ObjectId(id) });

        if (!cat) {
          throw new Error("Cat cannot be found");
        }

        return cat;
      } catch (error) {
        throw new Error(`Failed to query cat - ${error}`);
      }
    },
  },
  Mutation: {},
  Cat: {
    id: (cat: Cat): ObjectId => {
      return cat._id;
    },
  },
};
