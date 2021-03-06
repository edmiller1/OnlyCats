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
        const cat = await db.cats.findOne({ _id: new ObjectId(id) });

        if (!cat) {
          throw new Error("Cat cannot be found");
        }

        return cat;
      } catch (error) {
        throw new Error(`Failed to query cat - ${error}`);
      }
    },
    randomCats: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Cat[]> => {
      try {
        const cats = await db.cats.find({}).limit(3).toArray();

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
