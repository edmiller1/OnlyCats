require("dotenv").config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import { connectDatabase } from "./database";
import { userResolvers } from "./graphql/resolvers/User/userResolvers";

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });

  await server.applyMiddleware({ app, path: "/api" });

  app.listen(process.env.PORT);

  console.log(`[app] : http://localhost:${process.env.PORT}`);

  // const users = await db.users.find({}).toArray();
  // console.log(users);
};

mount(express());
