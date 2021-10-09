import { MongoClient } from "mongodb";
import { Cat, User, Database } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.fmhub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url);
  const db = client.db("main");

  return {
    users: db.collection<User>("users"),
    cats: db.collection<Cat>("cats"),
  };
};
