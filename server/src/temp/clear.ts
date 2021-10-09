require("dotenv").config();

import { connectDatabase } from "../database";

const clear = async () => {
  try {
    console.log("[clear] : Running...");
    const db = await connectDatabase();

    const cats = await db.cats.find({}).toArray();
    const users = await db.users.find({}).toArray();

    if (cats.length > 0) {
      await db.cats.drop();
    }

    if (users.length > 0) {
      await db.users.drop();
    }

    console.log("[clear] : Success");
  } catch (error) {
    throw new Error("Failed to clear database: " + error);
  }
};

clear();
