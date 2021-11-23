import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Cat, Database, User } from "../../../lib/types";
import { CatArgs, CatsArgs } from "./types";

export const catResolvers: IResolvers = {
  Query: {
    cat: async (
      _root: undefined,
      { id }: CatArgs,
      { db }: { db: Database }
    ): Promise<Cat | null> => {
      try {
        const cat = await db.cats.findOne({ _id: new ObjectId(id) });

        if (!cat) {
          throw new Error("Cat cannot be found");
        }

        return cat;
      } catch (error) {
        throw new Error(`Failed to query cat - ${error}`);
      }
    },
    cats: async (
      _root: undefined,
      { limit }: CatsArgs,
      { db }: { db: Database }
    ): Promise<Cat[]> => {
      try {
        //limit = limit || db.cats.countDocuments();
        const cats = await db.cats.find().limit(limit).toArray();

        if (!cats) {
          throw new Error("Cats cannot be found");
        }

        return cats;
      } catch (error) {
        throw new Error(`Failed to query cats - ${error}`);
      }
    },
  },
  Mutation: {},
  Cat: {
    id: (cat: Cat): string => {
      return cat._id.toString();
    },
  },
};
